const icons = {
  facebook: <path fill="currentColor" stroke="none" d="M14 8h3V4h-3c-2.8 0-4 1.8-4 4.3V10H7v4h3v8h4v-8h3l.8-4H14V8.6c0-.4.2-.6.6-.6z" />,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></>,
  tiktok: <path fill="currentColor" stroke="none" d="M16.2 3c.3 2.3 1.8 3.9 4.1 4.1v3.3a7 7 0 0 1-4-1.3v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.4a2.3 2.3 0 1 0 1.5 2.1V3h3.1z" />,
  whatsapp: <><path d="M3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 3.1 3l-4.4 1.2z" /><path fill="currentColor" stroke="none" d="M9 7.6c-.4 0-.9.4-.9 1.2 0 2.7 3.1 6.2 6.5 6.6.9.1 1.5-.5 1.5-1l-.1-.6-1.7-.8c-.3-.1-.5 0-.7.3l-.4.5c-.1.2-.3.2-.5.1a5.2 5.2 0 0 1-2.4-2.4c-.1-.2 0-.4.1-.5l.4-.4c.2-.2.2-.4.2-.6l-.7-1.7c-.1-.3-.3-.4-.5-.4H9z" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
}

export default function SocialIcon({ name, className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {icons[name]}
    </svg>
  )
}
