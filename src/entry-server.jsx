import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Usado solo en el build (scripts/prerender.js): genera el HTML inicial para que Google lea el contenido sin ejecutar JS.
export const render = () => renderToString(<App />)

export { brand, socials, services } from './data/site'
