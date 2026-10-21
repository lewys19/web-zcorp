import { plans } from '../data/site'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

export default function Pricing() {
  return (
    <section id="planes" className="bg-claro py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle tag="pricing" title="Planes y paquetes" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              anim={i === 1 ? 'down' : 'up'}
              delay={i * 150}
              className={`relative flex flex-col rounded-2xl bg-white p-7 ring-1 transition hover:-translate-y-1 ${p.featured ? 'ring-2 ring-rojo shadow-xl' : 'ring-azul/10'}`}
            >
              {p.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-rojo px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                  popular
                </span>
              )}
              <p className="font-mono text-sm text-azul/60">{p.name}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">
                {p.desde && <span className="mr-2 font-mono text-xs font-normal text-azul/50">desde</span>}
                {p.price}
                <span className="ml-2 font-mono text-xs font-normal text-azul/50">/{p.note}</span>
              </p>

              <ul className="mt-7 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="font-mono text-rojo">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-8 rounded-md py-3 text-center font-mono text-sm font-bold transition ${p.featured ? 'bg-rojo text-white hover:brightness-110' : 'bg-azul text-claro hover:bg-azul-900'}`}
              >
                {p.cta} ↗
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-xs text-azul/50">
          * Precios referenciales. Cada proyecto se cotiza según su alcance.
        </p>
      </div>
    </section>
  )
}
