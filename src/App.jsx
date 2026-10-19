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
import { useEffect } from 'react'
import { useRoute } from './hooks/useRoute'

const pages = { privacidad: Privacy }

export default function App() {
  const route = useRoute()
  const Page = pages[route]

  // Al volver de una página legal con un ancla (#contacto), baja a esa sección.
  useEffect(() => {
    if (!Page && window.location.hash.length > 1) {
      document.querySelector(window.location.hash)?.scrollIntoView()
    }
  }, [Page])

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
