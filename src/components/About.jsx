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
            
            Somos un equipo de profesionales que nos asociamos para aplicar nuestros conocimientos y resolver diferentes problemas en el sector TI. Nuestro objetivo es optimizar procesos, asesorar empresas y desarrollar soluciones tecnológicas que generen impacto real.

Iniciamos hace 2 años, en 2024, y desde entonces nuestro foco principal ha sido el desarrollo de software y la automatización con inteligencia artificial. 

Contamos con un proceso de trabajo estructurado que garantiza resultados óptimos. Sabemos que la inteligencia artificial está generando mucha competencia, pero estamos seguros de que nuestro diferenciador está en la arquitectura sólida y las buenas metodologías que aplicamos.
<hr/>

            <span className="text-azul/50">Confía en nosotros: estaremos contentos y preparados para atenderte.</span>
          </p>
          </Reveal>
        </div>

        <SectionTitle tag="team" title="Equipo compuesto" className="mt-24" />

        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} anim="zoom" delay={i * 150} className="group text-center">
              <div className="relative mx-auto h-36 w-36">
                <div className="absolute inset-0 overflow-hidden rounded-full bg-rojo ring-4 ring-rojo transition group-hover:scale-105">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition duration-500 group-hover:grayscale-0" />
                  ) : (
                    <span className="grid h-full place-items-center font-mono text-3xl font-extrabold text-claro">{m.initials}</span>
                  )}
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
