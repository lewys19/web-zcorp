import { ribbonItems } from '../data/site'

export default function Ribbon() {
  const items = [...ribbonItems, ...ribbonItems]
  return (
    <div className="pointer-events-none absolute inset-x-[-5%] bottom-10 -rotate-3 overflow-hidden bg-rojo py-3 shadow-lg">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {items.map((t, i) => (
              <span key={i} className="flex items-center gap-6 px-6 font-mono text-sm font-bold uppercase tracking-widest text-azul">
                {t} <span className="text-claro">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
