import { stackPills } from '../data/site'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const rows = [
  { cls: 'animate-marquee', offset: 0 },
  { cls: 'animate-marquee-reverse', offset: 4 },
  { cls: 'animate-marquee-slow', offset: 8 },
]

export default function StackMarquee() {
  return (
    <section className="grid-bg overflow-hidden bg-azul py-20">
      <SectionTitle tag="stack" title="Analizamos y construimos" dark />
      <div className="mt-12 space-y-5">
        {rows.map((r, ri) => {
          const items = [...stackPills.slice(r.offset), ...stackPills.slice(0, r.offset)]
          return (
            <Reveal key={ri} anim={ri % 2 ? 'right' : 'left'} delay={ri * 120}>
            <div className={`flex w-max ${r.cls}`}>
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 gap-5 pr-5" aria-hidden={dup === 1}>
                  {items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-claro/40 px-8 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-claro transition hover:border-rojo hover:bg-rojo"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
