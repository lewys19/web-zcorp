import { whatsappUrl } from '../data/site'
import SocialIcon from './SocialIcon'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-20 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-110 sm:bottom-24 sm:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" aria-hidden />
      <SocialIcon name="whatsapp" className="relative h-6 w-6" />
      <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-azul px-3 py-1.5 font-mono text-xs opacity-0 transition group-hover:opacity-100">
        ¿Hablamos?
      </span>
    </a>
  )
}
