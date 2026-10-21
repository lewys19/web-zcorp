// Post-build: genera un HTML prerenderizado por cada página (/, /hosting/, …) con su título, descripción,
// URL canónica y datos estructurados (JSON-LD), además de robots.txt y sitemap.xml.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { loadEnv } from 'vite'

const { VITE_SITE_URL } = loadEnv('production', process.cwd())
const site = (VITE_SITE_URL || '').replace(/\/$/, '')
if (!site || site.includes('tudominio')) {
  console.warn('\n⚠️  VITE_SITE_URL no está configurado en .env: pon tu dominio real antes de publicar.\n')
}

const { render, brand, socials, services, planesHosting, preguntasHosting, paginas } = await import('../.ssr/entry-server.js')

// "/" → https://…/  ·  "/hosting" → https://…/hosting/ (con barra: así la sirve Apache sin redirigir)
const urlDe = (ruta) => `${site}${ruta === '/' ? '/' : `${ruta}/`}`

const negocio = {
  '@type': 'ProfessionalService',
  name: brand.name,
  url: `${site}/`,
  logo: `${site}/favicon.png`,
  image: `${site}/og-image.jpg`,
  telephone: brand.phone,
  email: brand.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressRegion: 'Lima', addressCountry: 'PE' },
}

const migas = (ruta, titulo) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: urlDe('/') },
    { '@type': 'ListItem', position: 2, name: 'Hosting', item: urlDe('/hosting') },
    ...(ruta === '/hosting' ? [] : [{ '@type': 'ListItem', position: 3, name: titulo, item: urlDe(ruta) }]),
  ],
})

function datosEstructurados(ruta, titulo) {
  if (ruta === '/') {
    return [
      {
        ...negocio,
        description: 'Desarrollo de páginas web, sistemas POS, software a medida y automatizaciones en Lima, Perú.',
        areaServed: { '@type': 'Country', name: 'Perú' },
        priceRange: 'S/ 600 - S/ 2,500+',
        sameAs: socials.filter((s) => s.icon !== 'whatsapp').map((s) => s.href),
        makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.text } })),
      },
    ]
  }
  const lista = [migas(ruta, titulo)]
  if (ruta === '/hosting') {
    lista.push(
      {
        '@type': 'Service',
        name: 'Hosting web',
        serviceType: 'Alojamiento web',
        provider: negocio,
        areaServed: { '@type': 'Country', name: 'Perú' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Planes de hosting',
          itemListElement: planesHosting.map((p) => ({
            '@type': 'Offer',
            name: `Hosting ${p.nombre}`,
            description: `${p.para}: ${Object.values(p.recursos).join(', ')}.`,
            price: p.mensual,
            priceCurrency: 'PEN',
            url: `${urlDe('/hosting')}#planes`,
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: preguntasHosting.map(([pregunta, respuesta]) => ({
          '@type': 'Question',
          name: pregunta,
          acceptedAnswer: { '@type': 'Answer', text: respuesta },
        })),
      },
    )
  }
  return lista
}

const escapar = (texto) => texto.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const plantilla = readFileSync('dist/index.html', 'utf8')
const hoy = new Date().toISOString().slice(0, 10)

for (const { ruta, titulo, descripcion } of paginas) {
  const url = urlDe(ruta)
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': datosEstructurados(ruta, titulo) })
  // Reemplazos con función: así un "$" en los textos no se interpreta como patrón.
  let html = plantilla
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapar(titulo)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, (_, a) => a + escapar(descripcion))
    .replace(/(<link rel="canonical" href=")[^"]*/, (_, a) => a + url)
    .replace(/(<meta property="og:url" content=")[^"]*/, (_, a) => a + url)
    .replace(/(<meta property="og:title" content=")[^"]*/, (_, a) => a + escapar(titulo))
    .replace(/(<meta property="og:description" content=")[^"]*/, (_, a) => a + escapar(descripcion))
    .replace('<div id="root"></div>', () => `<div id="root">${render(ruta)}</div>`)
    .replace('</head>', () => `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`)
  // Solo la portada muestra la pantalla de carga.
  if (ruta !== '/') html = html.replace('<html lang="es-PE" class="is-loading">', '<html lang="es-PE">')

  const carpeta = ruta === '/' ? 'dist' : `dist${ruta}`
  mkdirSync(carpeta, { recursive: true })
  writeFileSync(`${carpeta}/index.html`, html)
}

writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paginas.map((p) => `  <url>\n    <loc>${urlDe(p.ruta)}</loc>\n    <lastmod>${hoy}</lastmod>\n  </url>`).join('\n')}
</urlset>
`,
)

rmSync('.ssr', { recursive: true, force: true })
console.log(`✓ ${paginas.length} páginas prerenderizadas, robots.txt y sitemap.xml generados`)
