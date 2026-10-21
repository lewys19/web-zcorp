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
        <Logo badge />

        <ul className="hidden gap-8 font-mono text-sm font-medium md:flex">
          {navLinks.map((l) => (
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
          {navLinks.map((l) => (
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
