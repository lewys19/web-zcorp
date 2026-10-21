import { brand, navLinks, services, socials, whatsappUrl } from '../data/site'
import Logo from './Logo'
import Reveal from './Reveal'
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="bg-azul-900 text-claro">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Logo className="text-claro" />
          <p className="mt-5 text-xl font-semibold">
            Abierto a nuevas <span className="font-mono text-rojo">oportunidades</span>
          </p>
          <p className="mt-2 text-sm text-claro/50">Nuevos retos, nuevas ideas, nuevas soluciones. ¿Creamos algo juntos?</p>
        </div>

        <FooterCol title="acceso" items={navLinks.map((l) => [l.label, l.href])} />
        <FooterCol title="servicios" items={services.map((s) => [s.title, '/#servicios'])} />

        <div>
          <h4 className="font-mono text-xs font-bold tracking-widest text-rojo uppercase">contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-claro/70">
            <li>
              <a href={`mailto:${brand.email}`} className="flex items-center gap-2 hover:text-rojo">
                <SocialIcon name="mail" /> {brand.email}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-rojo">
                <SocialIcon name="whatsapp" /> {brand.phone}
              </a>
            </li>
            <li>
              <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-rojo">
                <SocialIcon name="pin" /> {brand.city}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-claro/20 transition hover:-translate-y-0.5 hover:border-rojo hover:bg-rojo"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="border-t border-claro/10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-5 font-mono text-xs text-claro/40 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {brand.name} · Software Developer. Todos los derechos reservados.</p>
         
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-mono text-xs font-bold tracking-widest text-rojo uppercase">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-claro/70">
        {items.map(([label, href]) => (
          <li key={label}><a href={href} className="inline-block hover:text-rojo first-letter:uppercase">{label}</a></li>
        ))}
      </ul>
    </div>
  )
}
