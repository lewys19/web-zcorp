import { useState } from 'react'
import { navLinks } from '../data/site'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-rojo text-azul">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo badge />

        <ul className="hidden gap-8 font-mono text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative py-1">
                <span className="opacity-0 transition group-hover:opacity-100">./</span>
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-azul transition-all group-hover:w-full" />
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
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3">
                &gt; {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
