// Íconos de trazo para la sección de hosting (24×24, heredan el color del texto).

const trazos = {
  candado: <><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  copia: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
  correo: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  rayo: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  panel: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 13h3M8 16h6" /></>,
  wp: <><circle cx="12" cy="12" r="9" /><path d="M5 9l4 10 3-8 3 8 4-10M4 9h4M15 9h4" /></>,
  chat: <path d="M4 5h16v11H9l-5 4V5z" />,
  check: <path d="M5 12l5 5 9-10" />,
  flecha: <path d="M5 12h14M13 6l6 6-6 6" />,
  buscar: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  servidor: <><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
  persona: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  mudanza: <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-.1M17 19a2 2 0 1 0 0-.1" />,
  codigo: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  libro: <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5zM4 19a2 2 0 0 1 2-2h13" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  abajo: <path d="M6 9l6 6 6-6" />,
}

export default function IconoHosting({ nombre, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {trazos[nombre]}
    </svg>
  )
}
