import Reveal from './Reveal'

export default function SectionTitle({ tag, title, dark = false, className = '' }) {
  return (
    <Reveal anim="blur" className={`text-center ${className}`}>
      {tag && (
        <p className="font-mono text-xs tracking-[0.3em] text-rojo uppercase">
          // {tag}
        </p>
      )}
      <h2 className={`mt-3 font-mono text-2xl font-bold uppercase tracking-tight sm:text-3xl ${dark ? 'text-claro' : 'text-azul'}`}>
        {title}
      </h2>
    </Reveal>
  )
}
