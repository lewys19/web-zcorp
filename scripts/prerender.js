// Post-build: inserta el HTML prerenderizado en dist/index.html y genera robots.txt, sitemap.xml y los datos estructurados (JSON-LD).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { loadEnv } from 'vite'

const { VITE_SITE_URL } = loadEnv('production', process.cwd())
const site = (VITE_SITE_URL || '').replace(/\/$/, '')
if (!site || site.includes('tudominio')) {
  console.warn('\n⚠️  VITE_SITE_URL no está configurado en .env: pon tu dominio real antes de publicar.\n')
}

const { render, brand, socials, services } = await import('../.ssr/entry-server.js')

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: brand.name,
  description: 'Desarrollo de páginas web, sistemas POS, software a medida y automatizaciones en Lima, Perú.',
  url: `${site}/`,
  logo: `${site}/favicon.png`,
  image: `${site}/og-image.jpg`,
  telephone: brand.phone,
  email: brand.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Lima', addressRegion: 'Lima', addressCountry: 'PE' },
  areaServed: { '@type': 'Country', name: 'Perú' },
  priceRange: 'S/ 1,490 - S/ 3,900+',
  sameAs: socials.filter((s) => s.icon !== 'whatsapp').map((s) => s.href),
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.text },
  })),
}

const html = readFileSync('dist/index.html', 'utf8')
  .replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
  .replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`)
writeFileSync('dist/index.html', html)

writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`)
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`)

rmSync('.ssr', { recursive: true, force: true })
console.log('✓ prerender, robots.txt y sitemap.xml generados')
