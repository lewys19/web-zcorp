import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Usado solo en el build (scripts/prerender.js): genera el HTML inicial de cada página para que Google lea el contenido sin ejecutar JS.
export const render = (ruta = '/') => renderToString(<App ruta={ruta} />)

export { brand, socials, services } from './data/site'
export { planesHosting, preguntasHosting } from './data/hosting'
export { paginas } from './data/paginas'
