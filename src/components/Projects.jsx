import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { projects } from '../data/site'
import Reveal from './Reveal'

// Anillo infinito: con pocos proyectos se duplican para que nunca quede un hueco.
const ring = projects.length >= 8 ? projects : [...projects, ...projects]
const n = ring.length
const step = (2 * Math.PI) / n

// Posición de cada tarjeta sobre un cilindro; las que salen por un lado giran por detrás.
function cardStyle(off, radius) {
  const a = off * step
  const depth = Math.cos(a)
  return {
    transform: `translateX(${Math.sin(a) * radius}px) scale(${0.74 + 0.26 * depth}) rotateY(${-Math.sin(a) * 25}deg)`,
    zIndex: Math.round(depth * 100) + 100,
    opacity: Math.min(Math.max((depth + 0.8) * 2, 0), 1),
    filter: `blur(${Math.max(Math.abs(off) - 0.6, 0) * 1.6}px) brightness(${0.75 + 0.25 * depth})`,
  }
}

export default function Projects() {
  const [pos, setPos] = useState(0)
  const [paused, setPaused] = useState(false)
  const [radius, setRadius] = useState(300)
  const target = useRef(0)
  const current = useRef(0)
  const stageRef = useRef(null)

  // El radio se ajusta al ancho disponible: las tarjetas de los extremos llegan hasta el borde.
  useLayoutEffect(() => {
    const update = () => {
      const w = stageRef.current.clientWidth
      const card = w < 640 ? 200 : w < 1024 ? 230 : 260
      const edgeScale = 0.74 + 0.26 * Math.cos(2 * step)
      setRadius(Math.max((w / 2 - (card * edgeScale) / 2) / Math.sin(2 * step), card * 0.6))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(stageRef.current)
    return () => ro.disconnect()
  }, [])

  // Animación suave hacia el destino (sin límites: siempre sigue girando).
  useEffect(() => {
    let raf
    const tick = () => {
      const d = target.current - current.current
      if (d !== 0) {
        current.current = Math.abs(d) < 0.001 ? target.current : current.current + d * 0.08
        setPos(current.current)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => (target.current += 1), 3500)
    return () => clearInterval(t)
  }, [paused])

  const offsetOf = (i, from) => {
    let off = (((i - from) % n) + n) % n
    if (off > n / 2) off -= n
    return off
  }
  const go = (dir) => (target.current = Math.round(target.current) + dir)
  const activeProject = ring[((Math.round(pos) % n) + n) % n]

  return (
    <section id="proyectos" className="grid-bg-light bg-claro py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-8 md:grid-cols-2">
          <Reveal anim="left">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Proyectos que
              <br />
              <span className="font-mono text-rojo">ya están en marcha</span>
            </h2>
          </Reveal>
          <Reveal anim="right" delay={150}>
            <p className="text-azul/70">
              Sistemas, webs y automatizaciones que hoy trabajan para nuestros clientes. Cada uno diseñado a medida,
              desplegado y con soporte continuo.
            </p>
            <a href="#contacto" className="mt-5 inline-block rounded-md bg-rojo px-5 py-2.5 font-mono text-sm font-bold text-white">
              Quiero el mío →
            </a>
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <p className="font-semibold">{activeProject.title}</p>
          <p className="font-mono text-xs text-azul/50">{activeProject.category}</p>
        </div>

        <Reveal anim="zoom">
          <div
            ref={stageRef}
            className="relative mt-8 h-[340px] overflow-x-clip [perspective:1200px] [mask-image:linear-gradient(to_right,transparent,rgb(0_0_0/.35)_6%,black_14%,black_86%,rgb(0_0_0/.35)_94%,transparent)] lg:h-[380px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {ring.map((p, i) => {
              const off = offsetOf(i, pos)
              return (
                <button
                  key={i}
                  onClick={() => (target.current = Math.round(target.current) + Math.round(offsetOf(i, target.current)))}
                  aria-label={p.title}
                  tabIndex={Math.abs(off) < 2.5 ? 0 : -1}
                  className="absolute left-1/2 top-0 h-[320px] w-[200px] -ml-[100px] overflow-hidden rounded-2xl shadow-xl will-change-transform sm:w-[230px] sm:-ml-[115px] lg:h-[360px] lg:w-[260px] lg:-ml-[130px]"
                  style={{ ...cardStyle(off, radius), background: `linear-gradient(160deg, ${p.from}, ${p.to})` }}
                >
                  {p.image ? (
                    <>
                      <img src={p.image} alt={p.title} loading="lazy" draggable="false" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                    </>
                  ) : (
                    <ProjectScreen />
                  )}
                  <span className="absolute bottom-4 left-4 font-mono text-xs font-bold text-white/90">{p.category}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => go(-1)} aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full border border-azul/20 font-mono transition hover:border-rojo hover:text-rojo">←</button>
          <button onClick={() => go(1)} aria-label="Siguiente" className="grid h-10 w-10 place-items-center rounded-full bg-rojo font-mono text-white">→</button>
        </div>
      </div>
    </section>
  )
}

function ProjectScreen() {
  return (
    <div className="absolute inset-4 bottom-12 space-y-2 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/60" />)}
      </div>
      <div className="h-2 w-2/3 rounded-full bg-white/70" />
      <div className="h-2 w-1/2 rounded-full bg-white/40" />
      <div className="grid grid-cols-2 gap-2 pt-2">
        <div className="h-14 rounded bg-white/20" />
        <div className="h-14 rounded bg-white/20" />
      </div>
      <div className="flex h-16 items-end gap-1 pt-2">
        {[40, 70, 55, 90, 65, 80].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-white/50" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}
