import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
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

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <StackMarquee />
        <Pricing />
        <Process />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}
