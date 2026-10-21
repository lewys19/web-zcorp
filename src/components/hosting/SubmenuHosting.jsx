// Submenú propio de la sección de hosting: queda fijo debajo del menú principal.

import { useEffect, useRef, useState } from 'react'
import { areaClientes, hostingWhatsapp } from '../../data/hosting'
import IconoHosting from './IconoHosting'

const enlaces = [
  { texto: 'Planes', href: '/hosting/', ruta: '/hosting' },
  { texto: 'Ayuda', href: '/hosting/ayuda/', ruta: '/hosting/ayuda' },
]

export default function SubmenuHosting({ ruta }) {
  return (
    <div className="sticky top-16 z-40 border-b border-white/10 bg-host-noche text-white shadow-lg shadow-host-noche/20">
      <nav aria-label="Hosting" className="mx-auto flex h-12 max-w-6xl items-center gap-1 px-4 sm:px-6">
        <span className="mr-3 hidden items-center gap-2 font-mono text-xs font-bold tracking-widest text-host-amarillo uppercase sm:flex">
          <IconoHosting nombre="servidor" className="h-4 w-4" /> Hosting
        </span>

        <ul className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto font-mono text-sm">
          {enlaces.map((e) => {
            const activo = ruta === e.ruta
            return (
              <li key={e.href}>
                <a
                  href={e.href}
                  aria-current={activo ? 'page' : undefined}
                  className={`block whitespace-nowrap rounded-md px-3 py-1.5 transition ${
                    activo ? 'bg-white/10 font-bold text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {e.texto}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Fuera de la fila deslizable: si estuviera dentro, esa fila recortaría el desplegable. */}
        <div className="shrink-0 font-mono text-sm">
          <AreaClientes />
        </div>

        <a
          href={hostingWhatsapp('Hola Z-CORP, quiero contratar un plan de hosting.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-md bg-host-azul px-4 py-1.5 font-mono text-sm font-bold text-white transition hover:bg-host-azul-2 sm:block"
        >
          Contratar
        </a>
      </nav>
    </div>
  )
}

/** "Área de clientes ▾": accesos para quien ya es cliente. */
function AreaClientes() {
  const [abierto, setAbierto] = useState(false)
  const caja = useRef(null)

  useEffect(() => {
    if (!abierto) return
    const cerrar = (e) => caja.current && !caja.current.contains(e.target) && setAbierto(false)
    const tecla = (e) => e.key === 'Escape' && setAbierto(false)
    document.addEventListener('mousedown', cerrar)
    document.addEventListener('keydown', tecla)
    return () => {
      document.removeEventListener('mousedown', cerrar)
      document.removeEventListener('keydown', tecla)
    }
  }, [abierto])

  return (
    <div ref={caja} className="relative">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-expanded={abierto}
        aria-haspopup="menu"
        className="flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-1.5 text-white/70 transition hover:bg-white/5 hover:text-white"
      >
        Área de clientes
        <IconoHosting nombre="abajo" className={`h-4 w-4 transition-transform ${abierto ? 'rotate-180' : ''}`} />
      </button>
      {abierto && (
        <div role="menu" className="fixed top-28 right-4 left-4 z-50 rounded-xl bg-white p-2 text-azul shadow-2xl ring-1 ring-black/5 sm:absolute sm:top-full sm:right-auto sm:left-0 sm:mt-2 sm:w-72">
          {areaClientes.map((a) => (
            <a
              key={a.titulo}
              role="menuitem"
              href={a.href}
              {...(a.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-3 rounded-lg p-2.5 transition hover:bg-host-fondo"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-host-azul/10 text-host-azul">
                <IconoHosting nombre={a.icono} />
              </span>
              <span>
                <span className="block text-sm font-semibold">{a.titulo}</span>
                <span className="block text-xs text-azul/60">{a.detalle}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
