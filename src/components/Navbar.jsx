import { useState } from 'react'
import { navLinks } from '../data/site'
import { esHosting } from '../lib/ruta'
import Logo from './Logo'

// ruta: la página actual; resalta "hosting" cuando estás en esa sección.
export default function Navbar({ ruta = '/' }) {
  const [open, setOpen] = useState(false)
  const activo = (href) => href === '/hosting/' && esHosting(ruta)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-rojo text-azul">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo badge className="shrink-0 whitespace-nowrap" />

        <ul className="hidden items-center gap-5 font-mono text-sm font-medium md:flex lg:gap-8">
          {navLinks.map((l) => l.destacado ? (
            <li key={l.href}>
              <BotonDestacado link={l} activo={activo(l.href)} />
            </li>
          ) : (
            <li key={l.href}>
              <a href={l.href} aria-current={activo(l.href) ? 'page' : undefined} className={`group relative py-1 ${activo(l.href) ? 'font-bold' : ''}`}>
                <span className={`transition group-hover:opacity-100 ${activo(l.href) ? 'opacity-100' : 'opacity-0'}`}>./</span>
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-azul transition-all group-hover:w-full ${activo(l.href) ? 'w-full' : 'w-0'}`} />
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-sm font-bold md:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? '[ x ]' : '[ menu ]'}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-azul/20 px-4 pb-4 font-mono text-sm md:hidden">
          {navLinks.map((l) => l.destacado ? (
            <li key={l.href} className="pt-3" onClick={() => setOpen(false)}>
              <BotonDestacado link={l} activo={activo(l.href)} />
            </li>
          ) : (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className={`block py-3 ${activo(l.href) ? 'font-bold' : ''}`}>
                &gt; {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

// Enlace en forma de pastilla oscura con un punto que late (hoy: hosting).
function BotonDestacado({ link, activo }) {
  return (
    <a
      href={link.href}
      aria-current={activo ? 'page' : undefined}
      className={`inline-flex items-center gap-2.5 rounded-full bg-azul px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-claro shadow-[0_6px_18px_-6px_rgba(18,23,41,0.7)] transition hover:-translate-y-0.5 hover:bg-azul-900 ${activo ? 'ring-2 ring-claro/70' : ''}`}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rojo opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rojo" />
      </span>
      {link.label}
    </a>
  )
}
