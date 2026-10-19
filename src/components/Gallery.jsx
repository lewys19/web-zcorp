import { gallery, whatsappUrl } from '../data/site'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import SocialIcon from './SocialIcon'

export default function Gallery() {
  return (
    <section id="galeria" className="grid-bg-light bg-claro pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle tag="portfolio" title="Proyectos realizados" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((p, i) => (
            <Reveal key={p.title} anim="zoom" delay={(i % 3) * 120}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-claro/10 bg-azul p-3 text-claro shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Ventana tipo navegador */}
      <div className="overflow-hidden rounded-xl border border-claro/10 bg-azul-900">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 truncate font-mono text-[10px] text-claro/40">{p.domain}</span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden">
          {p.image ? (
            <img
              src={p.image}
              alt={`Captura de ${p.title}`}
              loading="lazy"
              className={`h-full w-full object-cover ${p.scroll ? 'object-top transition-[object-position] duration-[5s] ease-in-out group-hover:object-bottom' : p.imagePos === 'center' ? 'object-center' : 'object-top'}`}
            />
          ) : (
            <MockPreview project={p} />
          )}
          <span className="absolute right-2 top-2 rounded bg-rojo px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-white shadow">
            {p.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-5">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-claro/60">{p.description}</p>
        <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-claro/50">
          <SocialIcon name="pin" className="h-3.5 w-3.5 text-rojo" /> {p.country}
        </p>

        <div className="mt-5 flex gap-2 font-mono text-xs font-bold">
          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-claro/15 bg-azul-900 py-2 transition hover:border-rojo hover:text-rojo"
            >
              Visitar sitio <span aria-hidden>↗</span>
            </a>
          ) : (
            <span className="flex flex-1 items-center justify-center rounded-md border border-claro/10 bg-azul-900/60 py-2 text-claro/35">
              Proyecto privado
            </span>
          )}
          <a
            href={whatsappUrl(`Hola Z-CORP, vi el proyecto "${p.title}" y quiero algo similar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-rojo px-4 py-2 text-white transition hover:brightness-110"
          >
            Contactar
          </a>
        </div>
      </div>
    </article>
  )
}

// Maqueta de página cuando aún no hay captura real.
function MockPreview({ project: p }) {
  return (
    <div className="absolute inset-0 p-4" style={{ background: `linear-gradient(150deg, ${p.from}, ${p.to})` }}>
      <div className="flex items-center justify-between">
        <span className="h-2 w-12 rounded-full bg-white/70" />
        <span className="flex gap-1.5">
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-6 rounded-full bg-white/40" />)}
        </span>
      </div>
      <p className="mt-6 max-w-[80%] font-mono text-lg font-extrabold uppercase leading-tight text-white">{p.title}</p>
      <span className="mt-2 block h-1.5 w-2/3 rounded-full bg-white/40" />
      <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-white/30" />
      <span className="mt-4 inline-block h-5 w-20 rounded bg-white/80" />
    </div>
  )
}
