import { services } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import ventasGirl from '../assets/ventas-girl.webp'

export default function Services() {
  return (
    <section id="servicios" className="grid-bg-light bg-claro pb-24">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* manchas de color detrás para que se note el efecto vidrio */}
        <div className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-rojo/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-6 bottom-0 h-80 w-80 rounded-full bg-azul/25 blur-3xl" aria-hidden />
        <div className="relative grid items-center gap-14 rounded-3xl border border-white/60 bg-white/30 p-6 shadow-[0_8px_40px_-12px_rgb(28_35_63/.25)] backdrop-blur-xl sm:p-10 lg:grid-cols-2">
          <div>
            <Reveal anim="blur">
            <p className="font-mono text-xs tracking-[0.3em] text-rojo uppercase">// servicios</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Soluciones que <span className="font-mono text-rojo">funcionan</span>
            </h2>
            </Reveal>

            <ul className="mt-10 space-y-3">
              {services.map((s, i) => (
                <Reveal as="li" key={s.title} anim="left" delay={i * 90}>
                  <a href="#contacto" className="group flex items-center gap-4 rounded-xl p-3 ring-1 ring-azul/10 transition hover:bg-azul hover:text-claro hover:ring-azul">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-azul/5 text-rojo transition group-hover:bg-rojo group-hover:text-white">
                      <Icon name={s.icon} />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold">{s.title}</span>
                      <span className="block text-sm text-azul/60 transition group-hover:text-claro/60">{s.text}</span>
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current font-mono text-sm opacity-40 transition group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal anim="right" delay={200}>
            <img
              src={ventasGirl}
              alt="Clienta revisando el crecimiento de sus ventas en su web"
              loading="lazy"
              className="mx-auto w-full max-w-lg drop-shadow-[0_20px_30px_rgb(28_35_63/.18)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
