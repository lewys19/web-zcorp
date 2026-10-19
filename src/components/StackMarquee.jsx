import { stackPills } from '../data/site'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

const rows = [
  { cls: 'animate-marquee', offset: 0, duration: '26s' },
  { cls: 'animate-marquee-reverse', offset: 4, duration: '26s' },
  { cls: 'animate-marquee', offset: 8, duration: '34s' },
]

export default function StackMarquee() {
  return (
    <section className="grid-bg overflow-hidden bg-azul py-20">
      <SectionTitle tag="stack" title="Analizamos y construimos" dark />
      <div className="mt-14 space-y-9 sm:space-y-12">
        {rows.map((r, ri) => {
          const items = [...stackPills.slice(r.offset), ...stackPills.slice(0, r.offset)]
          return (
            <Reveal key={ri} anim={ri % 2 ? 'right' : 'left'} delay={ri * 120}>
            <div className={`flex w-max ${r.cls}`} style={{ animationDuration: r.duration }}>
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 gap-12 pr-12 sm:gap-16 sm:pr-16" aria-hidden={dup === 1}>
                  {items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-claro/25 px-8 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-claro/50 transition hover:border-rojo hover:bg-rojo hover:text-white"
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
