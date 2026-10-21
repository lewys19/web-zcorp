// /hosting/ayuda/: tutoriales con barra lateral (índice + buscador). Todos los artículos están en la página (bueno para SEO);
// la barra lateral salta a cada uno y resalta el que estás leyendo.

import { useEffect, useMemo, useState } from 'react'
import IconoHosting from '../../components/hosting/IconoHosting'
import { ayuda, hostingWhatsapp } from '../../data/hosting'

const sinTildes = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export default function HostingAyuda() {
  const [busqueda, setBusqueda] = useState('')
  const [actual, setActual] = useState(ayuda[0].articulos[0].id)
  const [indiceAbierto, setIndiceAbierto] = useState(false)

  // Busca en títulos, introducciones y pasos (sin importar tildes ni mayúsculas).
  const filtrado = useMemo(() => {
    const q = sinTildes(busqueda.trim())
    if (!q) return ayuda
    return ayuda
      .map((c) => ({
        ...c,
        articulos: c.articulos.filter((a) => sinTildes([a.titulo, a.intro, ...a.pasos, a.nota ?? ''].join(' ')).includes(q)),
      }))
      .filter((c) => c.articulos.length)
  }, [busqueda])

  // Resalta en el índice el artículo que está en pantalla.
  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        const visible = entradas.find((e) => e.isIntersecting)
        if (visible) setActual(visible.target.id)
      },
      { rootMargin: '-140px 0px -60% 0px' },
    )
    document.querySelectorAll('article[data-ayuda]').forEach((a) => observador.observe(a))
    return () => observador.disconnect()
  }, [filtrado])

  const indice = (
    <nav aria-label="Temas de ayuda">
      <label className="relative block">
        <span className="sr-only">Buscar en la ayuda</span>
        <IconoHosting nombre="buscar" className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-azul/40" />
        <input
          type="search"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar ayuda…"
          className="w-full rounded-lg bg-white py-2.5 pr-3 pl-9 text-sm outline-none ring-1 ring-host-noche/10 focus:ring-2 focus:ring-host-azul"
        />
      </label>
      {filtrado.length === 0 && <p className="mt-4 text-sm text-azul/60">No encontramos “{busqueda}”.</p>}
      {filtrado.map((c) => (
        <div key={c.categoria} className="mt-6">
          <p className="font-mono text-[11px] font-bold tracking-widest text-host-azul uppercase">{c.categoria}</p>
          <ul className="mt-2 space-y-0.5 border-l border-host-noche/10">
            {c.articulos.map((a) => (
              <li key={a.id}>
                <a
                  href={`#${a.id}`}
                  onClick={() => setIndiceAbierto(false)}
                  aria-current={actual === a.id ? 'true' : undefined}
                  className={`-ml-px block border-l-2 py-1.5 pl-3 text-sm transition ${
                    actual === a.id ? 'border-host-azul font-semibold text-host-azul' : 'border-transparent text-azul/70 hover:border-host-noche/30 hover:text-azul'
                  }`}
                >
                  {a.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )

  return (
    <>
      <section className="bg-host-noche px-4 py-14 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs font-bold tracking-[0.3em] text-host-amarillo uppercase">// centro de ayuda</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">¿En qué te ayudamos?</h1>
          <p className="mt-2 max-w-2xl text-white/70">Guías paso a paso para administrar tu hosting, tus correos y tu web.</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[17rem_1fr]">
        {/* Celular: el índice se abre con un botón */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setIndiceAbierto((a) => !a)}
            aria-expanded={indiceAbierto}
            className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-3 font-mono text-sm font-bold ring-1 ring-host-noche/10"
          >
            <span className="flex items-center gap-2">
              <IconoHosting nombre="menu" className="h-4 w-4" /> Temas
            </span>
            <IconoHosting nombre="abajo" className={`h-4 w-4 transition-transform ${indiceAbierto ? 'rotate-180' : ''}`} />
          </button>
          {indiceAbierto && <div className="mt-3 rounded-xl bg-host-fondo p-4 ring-1 ring-host-noche/10">{indice}</div>}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-36 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2">{indice}</div>
        </aside>

        <div className="min-w-0 space-y-6">
          {filtrado.flatMap((c) =>
            c.articulos.map((a) => (
              <article key={a.id} id={a.id} data-ayuda className="scroll-mt-36 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-host-noche/5 sm:p-8">
                <p className="font-mono text-[11px] font-bold tracking-widest text-host-azul uppercase">{c.categoria}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{a.titulo}</h2>
                <p className="mt-2 text-azul/70">{a.intro}</p>
                <ol className="mt-5 space-y-3">
                  {a.pasos.map((p, i) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-host-azul font-mono text-xs font-bold text-white">{i + 1}</span>
                      <span className="pt-0.5">{p}</span>
                    </li>
                  ))}
                </ol>
                {a.nota && (
                  <p className="mt-5 rounded-lg border-l-4 border-host-amarillo bg-host-amarillo/10 px-4 py-3 text-sm text-azul/80">💡 {a.nota}</p>
                )}
              </article>
            )),
          )}

          <div className="flex flex-col items-center gap-4 rounded-2xl bg-host-noche p-8 text-center text-white sm:flex-row sm:text-left">
            <div className="flex-1">
              <p className="text-lg font-semibold">¿Sigues con dudas?</p>
              <p className="text-sm text-white/65">Escríbenos y te ayudamos paso a paso.</p>
            </div>
            <a
              href={hostingWhatsapp('Hola Z-CORP, revisé el centro de ayuda y necesito ayuda con…')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-host-azul px-5 py-3 font-mono text-sm font-bold transition hover:bg-host-azul-2"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
