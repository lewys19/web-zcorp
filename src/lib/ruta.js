// Páginas del sitio por ruta real (/hosting/, …). Cada una se prerenderiza como su propio HTML (scripts/prerender.js).

/** "/hosting" y "/hosting/" son la misma página. */
export const normalizar = (ruta = '/') => (ruta.length > 1 ? ruta.replace(/\/+$/, '') : ruta) || '/'

export const rutaActual = () => (typeof window === 'undefined' ? '/' : normalizar(window.location.pathname))

export const esHosting = (ruta) => ruta === '/hosting' || ruta.startsWith('/hosting/')
