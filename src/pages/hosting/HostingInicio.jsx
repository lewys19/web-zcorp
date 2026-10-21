// /hosting/: portada del hosting con planes, dominio, qué incluye, comparativa y preguntas frecuentes.

import { useState } from 'react'
import Reveal from '../../components/Reveal'
import IconoHosting from '../../components/hosting/IconoHosting'
import { comparativa, extensiones, hostingWhatsapp, incluidos, planesHosting, preguntasHosting, razones } from '../../data/hosting'

const soles = (n) => `S/ ${Number.isInteger(n) ? n : n.toFixed(2)}`

export default function HostingInicio() {
  return (
    <>
      <Portada />
      <Dominio />
      <Planes />
      <Incluidos />
      <PorQue />
      <Comparar />
      <Preguntas />
      <Migracion />
    </>
  )
}

function Etiqueta({ children, oscuro = false }) {
  return (
    <p className={`font-mono text-xs font-bold tracking-[0.3em] uppercase ${oscuro ? 'text-host-amarillo' : 'text-host-azul'}`}>
      // {children}
    </p>
  )
}

function Portada() {
  return (
    <section className="relative overflow-hidden bg-host-noche pb-36 text-white">
      {/* Puntos de fondo y un brillo azul: aire "tecnológico" sin imágenes pesadas */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(rgb(255 255 255 / .18) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-host-azul/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:pt-24">
        <Reveal anim="left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs">
            <span className="text-host-amarillo">★</span> Plan anual: <strong className="text-host-amarillo">2 meses gratis</strong>
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Rápido<span className="text-host-amarillo">.</span> Seguro<span className="text-host-amarillo">.</span> Estable
            <span className="text-host-amarillo">.</span>
            <br />
            <span className="font-mono text-[0.8em] text-white/90">Hosting para tu negocio</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Aloja tu página web y tus correos corporativos en servidores con discos NVMe, SSL gratis y copias de seguridad
            diarias. Con soporte humano en español por WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 font-mono text-sm font-bold">
            <a href="#planes" className="rounded-md bg-host-azul px-6 py-3.5 transition hover:-translate-y-0.5 hover:bg-host-azul-2">
              Ver planes
            </a>
            <a
              href={hostingWhatsapp('Hola Z-CORP, quiero información sobre sus planes de hosting.')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/30 px-6 py-3.5 transition hover:border-white hover:bg-white/5"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal anim="right" delay={200}>
          <ul className="grid gap-3">
            {[
              ['candado', 'SSL gratis', 'en todos los planes'],
              ['copia', 'Backups diarios', 'tu información protegida'],
              ['chat', 'Soporte por WhatsApp', 'en español, con personas'],
            ].map(([icono, titulo, detalle]) => (
              <li key={titulo} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-host-amarillo text-host-noche">
                  <IconoHosting nombre={icono} />
                </span>
                <span>
                  <span className="block font-semibold">{titulo}</span>
                  <span className="block text-sm text-white/60">{detalle}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/** Consultar un dominio: arma el mensaje y abre WhatsApp (sin buscador automático por ahora). */
function Dominio() {
  const [nombre, setNombre] = useState('')
  const [extension, setExtension] = useState(extensiones[0])
  const limpio = nombre.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\..*$/, '')

  return (
    <section id="dominio" className="relative z-10 -mt-24 px-4 sm:px-6">
      <Reveal anim="zoom" className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-2xl shadow-host-noche/15 ring-1 ring-host-noche/5 sm:p-10">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">Encuentra tu plan y registra tu dominio</h2>
        <p className="mt-2 text-center text-sm text-azul/60">Escribe el nombre que quieres y te confirmamos si está disponible y su precio.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (!limpio) return
            window.open(
              hostingWhatsapp(`Hola Z-CORP, quiero registrar el dominio ${limpio}${extension}. ¿Está disponible?`),
              '_blank',
              'noopener,noreferrer',
            )
          }}
          className="mt-7 flex flex-col gap-2 rounded-xl bg-host-fondo p-2 ring-1 ring-host-noche/10 sm:flex-row"
        >
          <label className="sr-only" htmlFor="dominio-nombre">
            Nombre del dominio
          </label>
          <input
            id="dominio-nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="tuempresa"
            maxLength={63}
            className="min-w-0 flex-1 rounded-lg bg-white px-4 py-3 outline-none ring-host-azul focus:ring-2"
          />
          <label className="sr-only" htmlFor="dominio-extension">
            Extensión
          </label>
          <select
            id="dominio-extension"
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
            className="rounded-lg bg-white px-3 py-3 font-mono outline-none ring-host-azul focus:ring-2"
          >
            {extensiones.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
          <button
            type="submit"
            disabled={!limpio}
            className="flex items-center justify-center gap-2 rounded-lg bg-host-azul px-6 py-3 font-mono text-sm font-bold text-white transition hover:bg-host-azul-2 disabled:opacity-50"
          >
            <IconoHosting nombre="buscar" className="h-4 w-4" /> Consultar
          </button>
        </form>
        <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono text-xs">
          {extensiones.map((x) => (
            <span key={x} className="rounded-full bg-host-fondo px-3 py-1 text-host-azul ring-1 ring-host-azul/20">
              {x}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Planes() {
  const [anual, setAnual] = useState(true)

  return (
    <section id="planes" className="scroll-mt-32 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Etiqueta>planes</Etiqueta>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">El plan justo para tu web</h2>
          <p className="mt-3 text-azul/60">Todos incluyen SSL, backups diarios y correos con tu dominio.</p>
        </Reveal>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 font-mono text-sm shadow-sm ring-1 ring-host-noche/10" role="radiogroup" aria-label="Forma de pago">
            {[
              [false, 'Mensual'],
              [true, 'Anual'],
            ].map(([valor, texto]) => (
              <button
                key={texto}
                type="button"
                role="radio"
                aria-checked={anual === valor}
                onClick={() => setAnual(valor)}
                className={`rounded-full px-5 py-2 font-bold transition ${anual === valor ? 'bg-host-noche text-white' : 'text-azul/60 hover:text-azul'}`}
              >
                {texto}
                {valor && <span className={`ml-2 text-xs ${anual ? 'text-host-amarillo' : 'text-host-azul'}`}>−2 meses</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {planesHosting.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 120}
              className={`relative flex flex-col rounded-2xl bg-white p-7 transition hover:-translate-y-1 ${
                p.destacado ? 'shadow-2xl shadow-host-azul/20 ring-2 ring-host-azul' : 'shadow-sm ring-1 ring-host-noche/10'
              }`}
            >
              {p.destacado && (
                <span className="absolute -top-3 right-6 rounded-full bg-host-amarillo px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-host-noche uppercase">
                  Más elegido
                </span>
              )}
              <h3 className="font-mono text-lg font-bold">{p.nombre}</h3>
              <p className="mt-1 text-sm text-azul/60">{p.para}</p>

              <p className="mt-6 text-4xl font-semibold tracking-tight">
                {soles(anual ? p.anual : p.mensual)}
                <span className="ml-1 font-mono text-sm font-normal text-azul/50">/{anual ? 'año' : 'mes'}</span>
              </p>
              <p className="mt-1 h-5 font-mono text-xs text-host-azul">
                {anual ? `Equivale a ${soles(Math.round((p.anual / 12) * 100) / 100)}/mes · ahorras ${soles(p.mensual * 12 - p.anual)}` : ''}
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2 rounded-xl bg-host-fondo p-3 text-sm">
                {Object.values(p.recursos).map((r) => (
                  <li key={r} className="font-semibold">
                    {r}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {p.extras.map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <IconoHosting nombre="check" className="mt-0.5 h-4 w-4 shrink-0 text-host-azul" />
                    {x}
                  </li>
                ))}
              </ul>

              <a
                href={hostingWhatsapp(`Hola Z-CORP, quiero contratar el plan de hosting ${p.nombre} (${anual ? 'anual' : 'mensual'}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 rounded-md py-3 text-center font-mono text-sm font-bold text-white transition ${
                  p.destacado ? 'bg-host-azul hover:bg-host-azul-2' : 'bg-host-noche hover:bg-host-noche-2'
                }`}
              >
                Contratar {p.nombre}
              </a>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-xs text-azul/50">
          * El dominio se cotiza aparte. ¿Necesitas también tu página web?{' '}
          <a href="/#planes" className="text-host-azul underline">
            Mira nuestros planes de desarrollo
          </a>
          .
        </p>
      </div>
    </section>
  )
}

function Incluidos() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Etiqueta>incluido en todos</Etiqueta>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Todo lo que tu web necesita</h2>
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {incluidos.map((x, i) => (
            <Reveal as="li" key={x.titulo} delay={i * 80} className="rounded-2xl bg-host-fondo p-6 ring-1 ring-host-noche/5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-host-azul text-white shadow-lg shadow-host-azul/30">
                <IconoHosting nombre={x.icono} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-semibold">{x.titulo}</h3>
              <p className="mt-1 text-sm text-azul/60">{x.texto}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function PorQue() {
  const iconos = ['persona', 'mudanza', 'codigo']
  return (
    <section className="bg-host-noche px-4 py-24 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <Etiqueta oscuro>por qué z-corp</Etiqueta>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Más que un hosting: un equipo detrás de tu web</h2>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {razones.map((r, i) => (
            <Reveal as="li" key={r.titulo} delay={i * 120} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-host-amarillo text-host-noche">
                <IconoHosting nombre={iconos[i]} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{r.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{r.texto}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Comparar() {
  return (
    <section id="comparar" className="scroll-mt-32 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Etiqueta>comparar</Etiqueta>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Compara los planes</h2>
        </Reveal>
        <Reveal className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-host-noche/10">
          <table className="w-full min-w-[34rem] text-sm">
            <thead>
              <tr className="bg-host-noche text-white">
                <th scope="col" className="px-5 py-4 text-left font-mono font-bold">Característica</th>
                {planesHosting.map((p) => (
                  <th key={p.id} scope="col" className={`px-5 py-4 text-center font-mono font-bold ${p.destacado ? 'text-host-amarillo' : ''}`}>
                    {p.nombre}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparativa.map(([etiqueta, ...valores], i) => (
                <tr key={etiqueta} className={i % 2 ? 'bg-host-fondo/60' : ''}>
                  <th scope="row" className="px-5 py-3 text-left font-medium">
                    {etiqueta}
                  </th>
                  {valores.map((v, j) => (
                    <td key={j} className="px-5 py-3 text-center">
                      {v === true ? (
                        <IconoHosting nombre="check" className="mx-auto h-5 w-5 text-host-azul" />
                      ) : v === false ? (
                        <span className="text-azul/30" aria-label="No incluido">—</span>
                      ) : (
                        <span className="font-semibold">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-host-noche/10">
                <th scope="row" className="px-5 py-4 text-left font-medium">Precio mensual</th>
                {planesHosting.map((p) => (
                  <td key={p.id} className="px-5 py-4 text-center font-mono font-bold">
                    {soles(p.mensual)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}

function Preguntas() {
  return (
    <section className="bg-white px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <Etiqueta>preguntas frecuentes</Etiqueta>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Resolvemos tus dudas</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {preguntasHosting.map(([pregunta, respuesta]) => (
            <details key={pregunta} className="group rounded-xl bg-host-fondo p-5 ring-1 ring-host-noche/5 open:ring-host-azul/30">
              <summary className="flex list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {pregunta}
                <IconoHosting nombre="abajo" className="h-5 w-5 shrink-0 text-host-azul transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-azul/70">{respuesta}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-azul/60">
          ¿Tienes otra duda?{' '}
          <a href="/hosting/ayuda/" className="font-semibold text-host-azul underline">
            Visita el centro de ayuda
          </a>
        </p>
      </div>
    </section>
  )
}

function Migracion() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-2xl bg-host-azul p-8 text-center text-white shadow-2xl shadow-host-azul/30 sm:p-12 md:flex-row md:text-left">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15">
          <IconoHosting nombre="mudanza" className="h-8 w-8" />
        </span>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold tracking-tight">¿Ya tienes web en otro hosting?</h2>
          <p className="mt-1 text-white/80">La migramos gratis y sin que se caiga (planes Negocio y Pro).</p>
        </div>
        <a
          href={hostingWhatsapp('Hola Z-CORP, quiero migrar mi web a su hosting.')}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md bg-host-amarillo px-6 py-3.5 font-mono text-sm font-bold text-host-noche transition hover:brightness-105"
        >
          Quiero migrar mi web
        </a>
      </Reveal>
    </section>
  )
}
