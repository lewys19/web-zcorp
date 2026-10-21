// Estructura común de las páginas de hosting: menú principal + submenú de hosting + pie propio + pie general.

import { useEffect } from 'react'
import { hostingWhatsapp } from '../../data/hosting'
import BackToTop from '../BackToTop'
import Footer from '../Footer'
import Navbar from '../Navbar'
import WhatsAppButton from '../WhatsAppButton'
import IconoHosting from './IconoHosting'
import SubmenuHosting from './SubmenuHosting'

export default function HostingLayout({ ruta, children }) {
  // Estas páginas no muestran la pantalla de carga de la portada: el contenido aparece de inmediato.
  useEffect(() => {
    document.documentElement.classList.remove('is-loading')
  }, [])

  return (
    <>
      <Navbar ruta={ruta} />
      <div className="pt-16">
        <SubmenuHosting ruta={ruta} />
        <main className="bg-host-fondo">{children}</main>
        <PieHosting />
      </div>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

function PieHosting() {
  const columnas = [
    ['Hosting', [['Planes y precios', '/hosting/#planes'], ['Comparar planes', '/hosting/#comparar'], ['Registrar un dominio', '/hosting/#dominio']]],
    ['Ayuda', [['Centro de ayuda', '/hosting/ayuda/'], ['Entrar a cPanel', '/cpanel'], ['Webmail', '/webmail']]],
    ['Legal', [['Términos del servicio', '/hosting/terminos/'], ['Política de privacidad', '/#/privacidad']]],
  ]
  return (
    <section className="bg-host-noche text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-host-amarillo uppercase">
            <IconoHosting nombre="servidor" className="h-4 w-4" /> Z-CORP Hosting
          </p>
          <p className="mt-4 text-lg font-semibold">¿Dudas sobre qué plan elegir?</p>
          <p className="mt-1 text-sm text-white/60">Te asesoramos gratis, sin compromiso.</p>
          <a
            href={hostingWhatsapp('Hola Z-CORP, necesito ayuda para elegir un plan de hosting.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-host-azul px-4 py-2.5 font-mono text-sm font-bold transition hover:bg-host-azul-2"
          >
            Hablar con un asesor <IconoHosting nombre="flecha" className="h-4 w-4" />
          </a>
        </div>
        {columnas.map(([titulo, items]) => (
          <div key={titulo}>
            <h4 className="font-mono text-xs font-bold tracking-widest text-host-amarillo uppercase">{titulo}</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {items.map(([texto, href]) => (
                <li key={texto}>
                  <a href={href} className="hover:text-white">
                    {texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
