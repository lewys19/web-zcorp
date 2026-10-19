// Contenido de la web. Más adelante vendrá del panel administrable (API).

export const brand = {
  name: 'Z-CORP',
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

export const navLinks = [
  { label: 'inicio', href: '#inicio' },
  { label: 'nosotros', href: '#nosotros' },
  { label: 'servicios', href: '#servicios' },
  { label: 'proyectos', href: '#proyectos' },
  { label: 'contacto', href: '#contacto' },
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
  { name: 'Angelo Poma', role: 'CTO · Software Engineer', initials: 'AP' },
  { name: 'Luis Tapia', role: 'Backend · Software Engineer', initials: 'LT' },
  { name: 'Julieta María', role: 'Frontend · Software Engineer', initials: 'JM' },
]

// image (opcional): coloca el archivo en public/proyectos/ y escribe '/proyectos/nombre.webp'.
// Tamaño recomendado: vertical 520×720 px. Sin image se muestra la maqueta con degradado (from → to).
export const projects = [
  { title: 'ERP Comercial', category: 'Sistema informático', from: '#1c233f', to: '#f90038', image: '/proyectos/carusel1.jpg' },
  { title: 'Reservas Online', category: 'Desarrollo web', from: '#f90038', to: '#ff7a59' },
  { title: 'Panel Logístico', category: 'Microservicios', from: '#121729', to: '#3b4a8a' },
  { title: 'Bot de Pedidos', category: 'Automatización', from: '#2b3a67', to: '#f90038' },
  { title: 'Tienda Virtual', category: 'E-commerce', from: '#1c233f', to: '#5f6b8f' },
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
  { icon: 'web', title: 'Desarrollo web a medida', text: 'Webs y aplicaciones rápidas, seguras y pensadas para convertir.' },
  { icon: 'system', title: 'Sistemas informáticos', text: 'ERP, CRM, inventarios y sistemas internos adaptados a tu operación.' },
  { icon: 'bolt', title: 'Automatizaciones', text: 'Eliminamos tareas repetitivas conectando tus herramientas.' },
  { icon: 'nodes', title: 'Microservicios', text: 'Servicios independientes y escalables, listos para crecer.' },
  { icon: 'box', title: 'Venta e implementación', text: 'Vendemos software, lo ponemos en marcha y lo mantenemos actualizado.' },
]

export const clients = ['NOVA', 'kuntur', 'ANDES/LOG', 'pixel.co', 'MERKADO', 'vértice', 'QHAPAQ', 'datum']
