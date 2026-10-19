import { steps } from '../data/site'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Process() {
  return (
    <section className="grid-bg-light bg-claro py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle tag="workflow" title="Proceso de desarrollo" />

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} anim={i % 2 ? 'right' : 'left'} delay={i * 100} className="group flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border-2 border-azul font-mono text-lg font-extrabold transition group-hover:border-rojo group-hover:bg-rojo group-hover:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-mono text-base font-bold uppercase leading-tight">{s.title}</h3>
                <p className="mt-1 text-sm text-azul/60">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
