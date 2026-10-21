import { brand } from '../data/site'
import logo from '../assets/logo.png'

// El logo vuelve a la portada mostrando la pantalla de carga (ver el script de index.html).
const pedirPantallaDeCarga = () => {
  try { sessionStorage.setItem('zc-loader', '1') } catch { /* sin sessionStorage: entra sin pantalla */ }
}

// badge: encierra la Z en un cuadro azul para que se vea sobre fondos rojos.
export default function Logo({ badge = false, className = '' }) {
  return (
    <a href="/" onClick={pedirPantallaDeCarga} className={`flex items-center gap-2.5 font-mono text-xl font-extrabold tracking-tight ${className}`}>
      <span className={badge ? 'grid h-9 w-9 place-items-center rounded-md bg-azul' : ''}>
        <img src={logo} alt="" className={badge ? 'h-6 w-6' : 'h-8 w-8'} />
      </span>
      {brand.name}
    </a>
  )
}
