import { useReveal } from '../hooks/useReveal'

// anim: up | down | left | right | zoom | blur
export default function Reveal({ as: Tag = 'div', anim = 'up', className = '', delay = 0, children }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} data-anim={anim} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  )
}
