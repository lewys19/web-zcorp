import { team } from '../data/site'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="nosotros" className="grid-bg-light bg-claro py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal anim="left">
            <p className="font-mono text-xs tracking-[0.3em] text-rojo uppercase">// about</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Sobre <span className="font-mono text-rojo">nosotros</span>
            </h2>
          </Reveal>
          <Reveal anim="right" delay={150}>
          <p className="text-lg leading-relaxed text-azul/80">
            Somos un equipo de <strong className="text-azul">ingenieros de software</strong> que convierte procesos
            en sistemas. No solo desarrollamos: también <strong className="text-azul">vendemos programas listos</strong>,
            los ponemos en marcha en tu empresa y{' '}
            <span className="text-azul/50">los implementamos y actualizamos para que tu tecnología nunca se quede atrás.</span>
          </p>
          </Reveal>
        </div>

        <SectionTitle tag="team" title="Equipo compuesto" className="mt-24" />

        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} anim="zoom" delay={i * 150} className="group text-center">
              <div className="relative mx-auto h-36 w-36">
                <div className="absolute inset-0 rounded-full bg-rojo transition group-hover:scale-105" />
                <div className="absolute inset-0 grid place-items-center font-mono text-3xl font-extrabold text-claro">
                  {m.initials}
                </div>
                <div className="absolute -inset-2 rounded-full border border-dashed border-azul/30 transition duration-700 group-hover:rotate-90" />
              </div>
              <h3 className="mt-6 font-semibold">{m.name}</h3>
              <p className="font-mono text-xs text-azul/60">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
