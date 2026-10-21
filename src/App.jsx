import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import StackMarquee from './components/StackMarquee'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Privacy from './pages/Privacy'
import HostingLayout from './components/hosting/HostingLayout'
import HostingAyuda from './pages/hosting/HostingAyuda'
import HostingInicio from './pages/hosting/HostingInicio'
import HostingTerminos from './pages/hosting/HostingTerminos'
import { useEffect } from 'react'
import { useRoute } from './hooks/useRoute'
import { rutaActual } from './lib/ruta'

const pages = { privacidad: Privacy }

// Páginas con ruta propia (cada una se prerenderiza como su propio HTML).
const paginasHosting = {
  '/hosting': HostingInicio,
  '/hosting/ayuda': HostingAyuda,
  '/hosting/terminos': HostingTerminos,
}

// ruta: en el navegador se lee de la URL; al prerenderizar la pasa scripts/prerender.js.
export default function App({ ruta = rutaActual() }) {
  const Hosting = paginasHosting[ruta]
  if (Hosting) {
    return (
      <HostingLayout ruta={ruta}>
        <Hosting />
      </HostingLayout>
    )
  }
  return <Portada />
}

// Baja a la sección del ancla y quita el # de la URL (replaceState no dispara hashchange).
function irASeccion(hash) {
  document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
  history.replaceState(null, '', window.location.pathname + window.location.search)
}

function Portada() {
  const route = useRoute()
  const Page = pages[route]

  // Al llegar con un ancla (desde hosting o una página legal: /#contacto), baja a esa sección.
  useEffect(() => {
    if (!Page && window.location.hash.length > 1) irASeccion(window.location.hash)
  }, [Page])

  // Los enlaces a secciones (/#servicios, #contacto) bajan a la sección sin dejar el # en la URL.
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href]')
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return
      const url = new URL(a.href)
      const mismaPagina = url.origin === window.location.origin && url.pathname === window.location.pathname
      // Desde una página legal (#/privacidad) se deja navegar normal: el efecto de arriba baja a la sección.
      if (!mismaPagina || !url.hash || url.hash.startsWith('#/') || window.location.hash.startsWith('#/')) return
      e.preventDefault()
      irASeccion(url.hash)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Loader />
      <Navbar />
      {Page ? <Page /> : (
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <StackMarquee />
        <Pricing />
        <Process />
        <Services />
        <Clients />
        <Contact />
      </main>
      )}
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
