import { services } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="servicios" className="bg-claro pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 rounded-3xl bg-white/70 p-6 ring-1 ring-azul/5 sm:p-10 lg:grid-cols-2">
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
            <Dashboard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <div className="relative">
      <div className="rotate-2 rounded-2xl bg-azul p-4 shadow-2xl">
        <div className="grid grid-cols-[70px_1fr] gap-3 rounded-xl bg-claro p-3 sm:grid-cols-[90px_1fr]">
          <div className="space-y-2 rounded-lg bg-white p-2 font-mono text-[9px] text-azul/60">
            <p className="font-bold text-azul">panel</p>
            {['inicio', 'ventas', 'clientes', 'stock', 'reportes'].map((t, i) => (
              <p key={t} className={i === 1 ? 'rounded bg-rojo px-1 text-white' : ''}>{t}</p>
            ))}
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 font-mono">
              <div className="rounded-lg bg-white p-2">
                <p className="text-[9px] text-azul/50">ventas/mes</p>
                <p className="text-base font-bold">S/ 24,850</p>
              </div>
              <div className="rounded-lg bg-white p-2">
                <p className="text-[9px] text-azul/50">pedidos</p>
                <p className="text-base font-bold text-rojo">+38%</p>
              </div>
            </div>
            <div className="flex h-28 items-end gap-1.5 rounded-lg bg-white p-3">
              {[35, 55, 40, 70, 50, 85, 65, 95].map((h, i) => (
                <div key={i} className={`flex-1 rounded-sm ${i === 7 ? 'bg-rojo' : 'bg-azul/80'}`} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="space-y-1.5 rounded-lg bg-white p-2">
              {[80, 60, 45].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rojo" />
                  <span className="h-1.5 rounded-full bg-azul/20" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 rounded-lg bg-azul-900 px-3 py-2 font-mono text-[11px] text-claro shadow-xl sm:-left-6">
        <span className="text-rojo">$</span> deploy --prod <span className="text-emerald-400">✓ ok</span>
      </div>
    </div>
  )
}
