import { useLayoutEffect, useRef } from 'react'
import phoneSite from '../assets/phone-site.webp'

// Celular con la captura de una web que baja en bucle.
// Para cambiarla, reemplaza src/assets/phone-site.webp (captura vertical, a lo ancho del celular).
export default function PhoneMock() {
  const screenRef = useRef(null)
  const siteRef = useRef(null)

  useLayoutEffect(() => {
    const update = () => {
      const dist = siteRef.current.scrollHeight - screenRef.current.clientHeight
      siteRef.current.style.setProperty('--scroll-dist', `-${Math.max(dist, 0)}px`)
    }
    update()
    // También observa la imagen: su alto solo se conoce cuando termina de cargar.
    const ro = new ResizeObserver(update)
    ro.observe(screenRef.current)
    ro.observe(siteRef.current)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px] lg:translate-x-10">
      <div className="absolute -inset-6 rounded-[3rem] bg-rojo/20 blur-3xl" aria-hidden />
      <div className="relative rounded-[2.75rem] border border-claro/20 bg-azul-900 p-2.5 shadow-2xl">
        <div className="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-azul-900" />
        <div ref={screenRef} className="relative h-[520px] overflow-hidden rounded-[2.2rem] bg-white sm:h-[560px]">
          <div ref={siteRef} className="animate-site-scroll">
            <img src={phoneSite} alt="Ejemplo de web desarrollada por Z-CORP" className="block w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
