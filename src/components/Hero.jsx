import { heroWords } from '../data/site'
import { useTypewriter } from '../hooks/useTypewriter'
import PhoneMock from './PhoneMock'
import Reveal from './Reveal'
import Ribbon from './Ribbon'
import RobotZclau from './RobotZclau'

export default function Hero() {
  const word = useTypewriter(heroWords)

  return (
    <section id="inicio" className="grid-bg relative overflow-hidden bg-azul pb-40 pt-28 text-claro sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal anim="blur">
            <p className="font-mono text-sm text-rojo">
              <span className="text-claro/50">Agencia de Desarrollo </span> de Software
            </p>
          </Reveal>

          <Reveal anim="left" delay={120}>
          <h1 className="glitch mt-6 text-4xl font-semibold leading-[1.1] tracking-tight transition sm:text-5xl lg:text-6xl">
            Construimos
            {/* Tamaño pensado para que la frase más larga ("reportes automatizados") quepa en una línea
                desde sm; en celular se reservan dos líneas. Así el hero no salta al cambiar de palabra. */}
            <span className="block min-h-[2lh] font-mono text-[0.88em] font-bold text-rojo sm:min-h-0 sm:text-[0.85em] lg:text-[0.6em] xl:text-[0.72em]">
              {word}
              <span className="caret">_</span>
            </span>
            para tu negocio.
          </h1>
          </Reveal>

          <Reveal delay={260}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-claro/70 sm:text-lg">
            Te acompañamos en cada etapa de tu proyecto, desde el análisis de tus necesidades y la definición
            de requerimientos hasta el desarrollo y la puesta en funcionamiento de la solución. Agenda una
            asesoría gratuita y descubre las alternativas tecnológicas que tenemos para ti.
          </p>
          </Reveal>

          <Reveal delay={380}>
          <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm font-bold">
            <a href="#contacto" className="rounded-md bg-rojo px-7 py-3.5 text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_var(--color-rojo)]">
              &gt; Cotizar proyecto
            </a>
            <a href="#servicios" className="rounded-md border border-rojo px-7 py-3.5 text-rojo transition hover:bg-rojo hover:text-white">
              Ver servicios
            </a>
          </div>
          </Reveal>

          <Reveal delay={500}>
          <dl className="mt-12 flex gap-10 font-mono">
            {[['+20', 'proyectos'], ['24/7', 'soporte'], ['100%', 'a medida']].map(([n, l]) => (
              <div key={l}>
                <dt className="text-2xl font-bold">{n}</dt>
                <dd className="text-xs uppercase tracking-widest text-claro/50">{l}</dd>
              </div>
            ))}
          </dl>
          </Reveal>
        </div>

        <Reveal anim="right" delay={300}>
          <PhoneMock>
            <RobotZclau />
          </PhoneMock>
        </Reveal>
      </div>

      <Ribbon />
    </section>
  )
}
