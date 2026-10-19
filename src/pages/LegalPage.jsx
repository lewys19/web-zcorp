import { useEffect } from 'react'

export default function LegalPage({ tag, title, updated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="grid-bg-light bg-claro pb-24 pt-28">
      <article
        className="mx-auto max-w-3xl px-4 text-[0.75rem] text-azul/80 sm:px-6
          [&_a]:text-rojo [&_a]:underline
          [&_h2]:mt-10 [&_h2]:font-mono [&_h2]:text-[0.85rem] [&_h2]:font-bold [&_h2]:text-azul
          [&_li]:mt-2 [&_p]:mt-4 [&_p]:leading-relaxed
          [&_strong]:text-azul [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
      >
        <a href="#inicio" className="font-mono no-underline!">← volver al inicio</a>
        <p className="mt-10! font-mono text-[0.65rem] tracking-[0.3em] text-rojo uppercase">// {tag}</p>
        <h1 className="mt-3 text-[1.6rem] font-semibold tracking-tight text-azul sm:text-[2.1rem]">{title}</h1>
        <p className="font-mono text-[0.65rem] text-azul/50">Última actualización: {updated}</p>
        {children}
      </article>
    </main>
  )
}
