import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

// Pantalla de carga: 10% → 100% en ~2.2 s, luego se desvanece (total < 3 s).
const timeline = [
  [250, 10, 'iniciando kernel'],
  [650, 20, 'cargando módulos'],
  [1150, 50, 'compilando interfaz'],
  [1700, 80, 'conectando servicios'],
  [2200, 100, 'sistema listo'],
]

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [logs, setLogs] = useState([])
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const timers = timeline.map(([t, p, msg]) =>
      setTimeout(() => {
        setPct(p)
        setLogs((l) => [...l, msg])
      }, t),
    )
    timers.push(setTimeout(() => setLeaving(true), 2450))
    timers.push(setTimeout(() => {
      document.documentElement.classList.remove('is-loading')
      setGone(true)
    }, 2900))
    return () => timers.forEach(clearTimeout)
  }, [])

  if (gone) return null

  return (
    <div
      className={`grid-bg fixed inset-0 z-[100] grid place-items-center bg-azul px-6 font-mono text-claro transition duration-500 ${leaving ? 'pointer-events-none -translate-y-4 opacity-0' : ''}`}
      role="status"
      aria-label={`Cargando ${pct}%`}
    >
      <div className="w-[min(80vw,22rem)]">
        <div className="flex items-center justify-center gap-3">
          <img src={logo} alt="" className="h-9 w-9" />
          <span className="text-lg font-extrabold">Z-CORP</span>
        </div>

        <ul className="mx-auto mt-8 h-32 w-fit space-y-1 text-xs text-claro/50">
          {logs.map((l) => (
            <li key={l}>
              <span className="text-emerald-400">[ok]</span> {l}
            </li>
          ))}
        </ul>

        <p className="text-center text-sm">
          <span className="text-rojo">&gt;</span> loading<span className="loading-dots inline-block w-6 text-left" />
        </p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-claro/10">
          <div className="h-full bg-rojo shadow-[0_0_12px_var(--color-rojo)] transition-[width] duration-500 ease-out" style={{ width: `${pct}%` }} />
        </div>
        <p className="mt-3 text-center text-2xl font-bold tabular-nums">{pct}%</p>
      </div>
    </div>
  )
}
