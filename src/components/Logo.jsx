import { brand } from '../data/site'
import logo from '../assets/logo.png'

// badge: encierra la Z en un cuadro azul para que se vea sobre fondos rojos.
export default function Logo({ badge = false, className = '' }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 font-mono text-xl font-extrabold tracking-tight ${className}`}>
      <span className={badge ? 'grid h-9 w-9 place-items-center rounded-md bg-azul' : ''}>
        <img src={logo} alt="" className={badge ? 'h-6 w-6' : 'h-8 w-8'} />
      </span>
      {brand.name}
    </a>
  )
}
