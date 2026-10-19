import { useState } from 'react'
import { brand, services, socials, whatsappUrl } from '../data/site'
import Reveal from './Reveal'
import SocialIcon from './SocialIcon'

// Envío por FormSubmit (sin backend). El primer mensaje llega como correo de activación:
// hay que abrirlo y confirmar una sola vez. Luego se cambiará por la API del panel administrable.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${brand.email}`

const field = 'w-full rounded-md border border-claro/15 bg-azul-900 px-3 py-2.5 text-sm text-claro placeholder:text-claro/30 focus:border-rojo focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return // bot
    delete data._honey
    delete data.acepto

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          acepta_privacidad: `Sí — ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}`,
          _subject: `Nuevo proyecto web: ${data.nombre} — ${data.servicio || 'consulta'}`,
          _replyto: data.correo,
          _template: 'table',
        }),
      })
      const json = await res.json()
      if (!res.ok || String(json.success) !== 'true') throw new Error(json.message)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="grid-bg bg-azul text-claro">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal anim="left">
          <pre className="w-fit rounded-lg border border-claro/10 bg-azul-900 p-4 font-mono text-xs leading-relaxed text-claro/70">
{`> conectando...
> analizando requerimientos  `}<span className="text-emerald-400">[ok]</span>{`
> listo para construir  `}<span className="caret text-rojo">█</span>
          </pre>

          <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Tu sistema y tu web,
            <br />
            <span className="font-mono text-rojo">hechos a medida.</span>
          </h2>
          <ul className="mt-8 space-y-2 font-mono text-sm text-claro/70">
            <li><span className="text-rojo">›</span> Asesoría inicial sin costo</li>
            <li><span className="text-rojo">›</span> Venta, implementación y puesta en marcha</li>
            <li><span className="text-rojo">›</span> Soporte y actualizaciones continuas</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md bg-[#25d366] px-4 py-2.5 font-bold text-azul-900 transition hover:brightness-110">
              <SocialIcon name="whatsapp" /> {brand.phone}
            </a>
            <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-claro/20 px-4 py-2.5 transition hover:border-rojo hover:text-rojo">
              <SocialIcon name="pin" /> {brand.city}
            </a>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-claro/10">
            <iframe
              title={`Ubicación: ${brand.city}`}
              src={brand.mapsEmbed}
              className="h-44 w-full grayscale invert-[.92] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-claro/20 transition hover:-translate-y-0.5 hover:border-rojo hover:bg-rojo">
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal anim="right" delay={150}>
        <form onSubmit={onSubmit} className="rounded-2xl border border-claro/10 bg-azul-900/70 p-6 shadow-2xl backdrop-blur sm:p-8">
          <p className="font-mono text-xs text-rojo">// nuevo_proyecto.sh</p>
          <h3 className="mt-2 text-2xl font-semibold">Cuéntanos tu idea</h3>

          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

          <div className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-1.5 block font-mono text-xs text-claro/60">nombre</span>
              <input required name="nombre" className={field} placeholder="Tu nombre" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-claro/60">correo</span>
                <input required type="email" name="correo" className={field} placeholder="tu@correo.com" />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-claro/60">celular / whatsapp</span>
                <input type="tel" name="celular" className={field} placeholder="999 999 999" />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block font-mono text-xs text-claro/60">servicio</span>
              <select name="servicio" className={field} defaultValue="">
                <option value="" disabled>Selecciona un servicio</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block font-mono text-xs text-claro/60">mensaje</span>
              <textarea required name="mensaje" rows="4" className={field} placeholder="¿Qué necesitas construir?" />
            </label>

            <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-claro/70">
              <input required type="checkbox" name="acepto" className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-rojo" />
              <span>
                He leído la{' '}
                <a href="#/privacidad" target="_blank" rel="noopener" className="text-claro underline hover:text-rojo">Política de Privacidad</a>{' '}
                y autorizo a {brand.name} a tratar mis datos personales para atender mi solicitud, conforme a la Ley N.° 29733.
              </span>
            </label>
          </div>

          <button disabled={status === 'sending'} className="mt-6 w-full rounded-md bg-rojo py-3 font-mono text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70">
            {status === 'sending' ? '> enviando...' : '> Enviar solicitud'}
          </button>
          <p className="mt-4 min-h-5 font-mono text-xs" role="status">
            {status === 'sent' && <span className="text-emerald-400">✓ Solicitud enviada. Te contactaremos pronto.</span>}
            {status === 'error' && (
              <span className="text-rojo">
                ✗ No se pudo enviar. Escríbenos por{' '}
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline">WhatsApp</a>.
              </span>
            )}
          </p>
        </form>
        </Reveal>
      </div>
    </section>
  )
}
