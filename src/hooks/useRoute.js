import { useEffect, useState } from 'react'

// Rutas simples por hash: '#/privacidad' → 'privacidad'. Los anclas normales (#contacto) no cuentan como ruta.
const current = () =>
  typeof window !== 'undefined' && window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : ''

export function useRoute() {
  const [route, setRoute] = useState(current)
  useEffect(() => {
    const on = () => setRoute(current())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}
