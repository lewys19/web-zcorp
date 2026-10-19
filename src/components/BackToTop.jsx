import { useEffect, useState } from 'react'

const R = 20
const C = 2 * Math.PI * R

// Flecha para volver arriba; el anillo rojo muestra cuánto se ha bajado.
export default function BackToTop() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visible = progress > 0.08

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      className={`group fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-azul text-claro shadow-xl transition duration-300 hover:bg-rojo sm:bottom-8 sm:right-8 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx="24" cy="24" r={R} fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="2" />
        <circle cx="24" cy="24" r={R} fill="none" stroke="var(--color-rojo)" strokeWidth="2" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * (1 - progress)} className="transition-colors group-hover:stroke-white" />
      </svg>
      <span className="font-mono text-lg transition group-hover:-translate-y-0.5">↑</span>
    </button>
  )
}
