import angelo from '../assets/team/angelo.webp'
import jhonatan from '../assets/team/jhonatan.webp'
import julieta from '../assets/team/julieta.webp'

// Contenido de la web. Más adelante vendrá del panel administrable (API).

export const brand = {
  name: 'Z-CORP',
  // Datos legales: completar antes de publicar (Ley N.° 29733)
  legalName: 'Z-CORP',
  ruc: '10205544410',
  address: 'Lima, Perú',
  email: 'resuresua@gmail.com', // también recibe los mensajes del formulario
  phone: '+51 999 002 030',
  whatsapp: '51999002030',
  city: 'Lima, Perú',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lima%2C+Per%C3%BA',
  mapsEmbed: 'https://www.google.com/maps?q=Lima,Per%C3%BA&z=11&output=embed',
}

export const whatsappUrl = (text = 'Hola Z-CORP, quiero información sobre sus servicios.') =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`

export const socials = [
  { name: 'Facebook', icon: 'facebook', href: 'https://web.facebook.com/zcorpJh' },
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/zcorp_2026/' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@z_corp25' },
  { name: 'WhatsApp', icon: 'whatsapp', href: whatsappUrl() },
]

// Rutas absolutas (/#…): funcionan desde la portada y desde las páginas de hosting.
export const navLinks = [
  { label: 'inicio', href: '/#inicio' },
  { label: 'nosotros', href: '/#nosotros' },
  { label: 'servicios', href: '/#servicios' },
  { label: 'proyectos', href: '/#proyectos' },
  { label: 'hosting', href: '/hosting/' },
  { label: 'contacto', href: '/#contacto' },
]

export const heroWords = [
  'software',
  
  'automatizacion',
  'microservicios',
  'desarrollo web',
]

export const ribbonItems = [
  'Ingeniería de software',
  'Desarrollo web',
  'Sistemas informáticos',
  'Automatizaciones',
  'Microservicios',
  'Venta de software',
]

export const team = [
  { name: 'Angelo Poma', role: 'CTO · Software Engineer', initials: 'AP', photo: angelo },
  { name: 'Jhonatan Tapia', role: 'Backend · Software Engineer', initials: 'JT', photo: jhonatan },
  { name: 'Julieta María', role: 'Frontend · Software Engineer', initials: 'JM', photo: julieta },
]

// image (opcional): coloca el archivo en public/proyectos/ y escribe '/proyectos/nombre.webp'.
// Tamaño recomendado: vertical 520×720 px. Sin image se muestra la maqueta con degradado (from → to).
export const projects = [
  { title: 'POS Botica', category: 'Control total de medicamentos', from: '#1c233f', to: '#f90038', image: '/proyectos/w-botica.jpg' },
  { title: 'Sistema Gimancio', category: 'Gestion facil', from: '#f90038', to: '#ff7a59', image: '/proyectos/w-gimnacio.jpg' },
  { title: 'POS Ferreteria', category: 'Optimiza tus ventas', from: '#121729', to: '#3b4a8a', image: '/proyectos/w-ferreteria.jpg' },
  { title: 'Sistema Lavanderia', category: 'Registra y gestiona', from: '#2b3a67', to: '#f90038', image: '/proyectos/w-lavanderia.jpg'},
  { title: 'Sistema para Hoteles', category: 'Paneles administrativos', from: '#1c233f', to: '#5f6b8f', image: '/proyectos/w-hotel.jpg' },
]

// Galería "Proyectos realizados" (6 tarjetas).
// url: enlace del sitio (null = "Proyecto privado"). image: captura en public/proyectos/ (sin image se dibuja una maqueta).
// scroll: true → al pasar el ratón la captura baja (ideal para capturas largas de página completa).
export const gallery = [
  {
    title: 'Maquinaria pesada-construccion',
    description: 'Catálogo y venta de maquinaria pesada con buscador por tipo, marca y precio.',
    country: 'Estados Unidos',
    category: 'Maquinaria',
    domain: 'truckheavy.com',
    url: '#', // reemplazar por la URL real
    image: '/proyectos/truck-heavy.webp',
    scroll: true,
  },
  {
    title: 'Metrolytics',
    description: 'Dashboard inmobiliario con indicadores de mercado, ventas e inventario en tiempo real.',
    country: 'Chile',
    category: 'Dashboard',
    domain: 'metrolytics.app',
    url: '#',
    image: '/proyectos/carusel1.jpg',
    imagePos: 'center',
  },
  {
    title: 'Botica tu Salud',
    description: 'Reservas online de excursiones y paquetes turísticos con pagos integrados.',
    country: 'Perú',
    category: 'Turismo',
    domain: 'andestours.pe',
    url: '#',
     image: '/proyectos/w-botica.jpg',
    from: '#0f766e',
    to: '#1c233f',
  },
  {
    title: 'Pizzas-Restaurant',
    description: 'Web y sistema de citas para clínica dental, con recordatorios por WhatsApp.',
    country: 'Perú',
    category: 'Salud',
    domain: 'clinicasonrie.pe',
    url: '#',
    image: '/proyectos/pizza.jpg',
    from: '#0ea5e9',
    to: '#1c233f',
  },
  {
    title: 'Pasteleria Bakelys',
    description: 'Sistema de inventario, facturación electrónica y punto de venta multi-tienda.',
    country: 'Perú',
    category: 'Sistema',
    domain: 'erp.elconstructor',
    url: null,
     image: '/proyectos/tortas.jpg',
    from: '#f90038',
    to: '#1c233f',
  },
  {
    title: 'IFILM-decoraciones',
    description: 'Automatización de reportes contables y portal de documentos para clientes.',
    country: 'Perú',
    category: 'Automatización',
    domain: 'portal.riosconta',
    url: null,
     image: '/proyectos/ifilm.jpg',
    from: '#7c3aed',
    to: '#1c233f',
  },
]

export const stackPills = [
  'Micro apps', 'APIs REST', 'ERP', 'CRM', 'E-commerce', 'Automatizaciones',
  'Microservicios', 'Dashboards', 'Bots', 'Integraciones', 'Cloud', 'DevOps',
]

export const plans = [
  {
    name: 'Emprende',
    price: 'S/ 1,490',
    note: 'pago único',
    features: ['Landing page responsive', 'Formulario + WhatsApp', 'Dominio y hosting 1 año', 'SEO básico', 'Entrega en 2 semanas'],
    cta: 'Elegir Emprende',
  },
  {
    name: 'Pro',
    price: 'S/ 3,900',
    note: 'pago único',
    featured: true,
    features: ['Web a medida multipágina', 'Panel administrable', 'Pasarela de pagos', 'Integraciones (API, CRM)', 'Soporte 3 meses'],
    cta: 'Elegir Pro',
  },
  {
    name: 'Business',
    price: 'A medida',
    note: 'cotización',
    features: ['Sistema informático completo', 'Arquitectura de microservicios', 'Automatización de procesos', 'Implementación y capacitación', 'Actualizaciones continuas'],
    cta: 'Cotizar Business',
  },
]

export const steps = [
  { title: 'Cuéntanos tu idea', detail: 'análisis y requerimientos' },
  { title: 'Realizamos prototipo', detail: 'UX/UI y validación temprana' },
  { title: 'Producción', detail: 'desarrollo por sprints' },
  { title: 'Pruebas / validación', detail: 'QA, seguridad y rendimiento' },
  { title: 'Despliegue', detail: 'puesta en marcha en tu entorno' },
  { title: 'Actualización', detail: 'soporte y mejoras continuas' },
]

export const services = [
  { icon: 'code', title: 'Ingeniería de software', text: 'Arquitectura, buenas prácticas y código mantenible desde el día uno.' },
  { icon: 'web', title: 'Páginas web y tiendas online', text: 'Páginas web, landing pages y e-commerce rápidos, seguros y pensados para vender en Lima y todo el Perú.' },
  { icon: 'cart', title: 'Sistemas POS', text: 'Punto de venta con inventario, caja y facturación electrónica para boticas, ferreterías, restaurantes y tiendas.' },
  { icon: 'system', title: 'Sistemas informáticos', text: 'ERP, CRM, inventarios y sistemas internos adaptados a tu operación.' },
  { icon: 'bolt', title: 'Automatizaciones', text: 'Eliminamos tareas repetitivas conectando tus herramientas.' },
  { icon: 'nodes', title: 'Microservicios', text: 'Servicios independientes y escalables, listos para crecer.' },
  { icon: 'box', title: 'Venta e implementación', text: 'Vendemos software, lo ponemos en marcha y lo mantenemos actualizado.' },
]

export const clients = ['NOVA', 'kuntur', 'ANDES/LOG', 'pixel.co', 'MERKADO', 'vértice', 'QHAPAQ', 'datum']
