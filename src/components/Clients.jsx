import { clients } from '../data/site'
import Reveal from './Reveal'

export default function Clients() {
  return (
    <section className="overflow-hidden border-y border-azul/10 bg-claro py-12">
      <p className="mb-8 text-center font-mono text-xs tracking-[0.3em] text-azul/50 uppercase">// confían en nosotros</p>
      <Reveal anim="blur">
      <div className="animate-marquee-slow flex w-max">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={dup === 1}>
            {clients.map((c) => (
              <span key={c} className="font-mono text-2xl font-extrabold tracking-tight text-azul/40 transition hover:text-azul">
                {c}
              </span>
            ))}
          </div>
        ))}
      </div>
      </Reveal>
    </section>
  )
}
