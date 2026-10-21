// Contenido de la sección de hosting. Precios, planes, preguntas y tutoriales se editan aquí.

import { whatsappUrl } from './site'

export const hostingWhatsapp = (texto) => whatsappUrl(texto)

// Precios en soles. anual = precio total del año (2 meses gratis).
export const planesHosting = [
  {
    id: 'emprende',
    nombre: 'Emprende',
    para: 'Landing page o web pequeña',
    mensual: 30,
    anual: 300,
    recursos: { sitios: '1 sitio web', espacio: '2 GB NVMe', correos: '5 correos', bd: '2 bases de datos' },
    extras: ['SSL gratis (HTTPS)', 'Backups diarios', 'WordPress en 1 clic', 'Soporte por WhatsApp en horario de oficina'],
  },
  {
    id: 'negocio',
    nombre: 'Negocio',
    para: 'Web de empresa con correos corporativos',
    mensual: 50,
    anual: 500,
    destacado: true,
    recursos: { sitios: '3 sitios web', espacio: '5 GB NVMe', correos: '20 correos', bd: '5 bases de datos' },
    extras: ['SSL gratis (HTTPS)', 'Backups diarios', 'WordPress en 1 clic', 'Migración gratis', 'Soporte prioritario'],
  },
  {
    id: 'pro',
    nombre: 'Pro',
    para: 'Tienda online, sistema o web con backend',
    mensual: 85,
    anual: 850,
    recursos: { sitios: '10 sitios web', espacio: '10 GB NVMe', correos: '50 correos', bd: '15 bases de datos' },
    extras: ['SSL gratis (HTTPS)', 'Backups diarios', 'Python y Node.js', 'Migración gratis', 'Soporte prioritario'],
  },
]

// Tabla comparativa: [etiqueta, valor por plan (emprende, negocio, pro)]. true/false = ✓/—
export const comparativa = [
  ['Sitios web', '1', '3', '10'],
  ['Espacio NVMe', '2 GB', '5 GB', '10 GB'],
  ['Correos corporativos', '5', '20', '50'],
  ['Bases de datos', '2', '5', '15'],
  ['Certificado SSL gratis', true, true, true],
  ['Backups diarios', true, true, true],
  ['WordPress en 1 clic', true, true, true],
  ['Panel de control cPanel', true, true, true],
  ['Python y Node.js', false, false, true],
  ['Migración gratis', false, true, true],
  ['Soporte prioritario', false, true, true],
]

export const incluidos = [
  { icono: 'candado', titulo: 'SSL gratis', texto: 'Tu web con HTTPS y el candado de seguridad, sin costo extra.' },
  { icono: 'copia', titulo: 'Backups diarios', texto: 'Copias de seguridad automáticas todos los días.' },
  { icono: 'correo', titulo: 'Correos con tu dominio', texto: 'ventas@tuempresa.com: más confianza para tus clientes.' },
  { icono: 'rayo', titulo: 'Discos NVMe', texto: 'Almacenamiento de última generación: tu web carga rápido.' },
  { icono: 'panel', titulo: 'Panel cPanel', texto: 'Administra archivos, correos y bases de datos fácilmente.' },
  { icono: 'wp', titulo: 'WordPress en 1 clic', texto: 'Instala WordPress y otras aplicaciones en segundos.' },
]

export const razones = [
  { titulo: 'Soporte humano en español', texto: 'Te atendemos por WhatsApp personas reales que conocen tu web, no un robot ni un ticket en inglés.' },
  { titulo: 'Migración gratis', texto: '¿Ya tienes web en otro hosting? La traemos sin costo y sin que se caiga (planes Negocio y Pro).' },
  { titulo: 'También te hacemos la web', texto: 'Somos una agencia de desarrollo: hosting, página web, tienda o sistema en un solo lugar.' },
]

export const preguntasHosting = [
  ['¿Qué es el hosting y por qué lo necesito?', 'Es el espacio en un servidor donde vive tu página web y tus correos. Sin hosting, tu web no se puede ver en internet.'],
  ['¿El dominio está incluido?', 'El dominio (tuempresa.com) se registra aparte y se renueva cada año. Te ayudamos a registrarlo o a usar el que ya tienes.'],
  ['¿Puedo cambiar de plan después?', 'Sí. Puedes subir de plan en cualquier momento sin perder tus archivos ni tus correos.'],
  ['¿Cómo pago?', 'Por adelantado, de forma mensual o anual. El plan anual te regala 2 meses. Escríbenos por WhatsApp y te indicamos los medios de pago.'],
  ['¿Qué pasa si no renuevo a tiempo?', 'Te avisamos antes del vencimiento. Si no se renueva, el servicio se suspende y, pasado un plazo, se elimina (antes guardamos una copia de seguridad).'],
  ['¿Pueden migrar mi web desde otro proveedor?', 'Sí, en los planes Negocio y Pro la migración es gratis. En el plan Emprende la cotizamos según el tamaño de tu web.'],
]

export const extensiones = ['.com', '.pe', '.com.pe', '.net', '.org']

export const areaClientes = [
  { titulo: 'Entrar a cPanel', detalle: 'Tu panel de control', href: '/cpanel', icono: 'panel' },
  { titulo: 'Webmail', detalle: 'Revisa tus correos', href: '/webmail', icono: 'correo' },
  { titulo: 'Soporte por WhatsApp', detalle: 'Te respondemos en minutos', href: hostingWhatsapp('Hola Z-CORP, soy cliente de hosting y necesito ayuda con…'), icono: 'chat', externo: true },
]

// Centro de ayuda: cada artículo es una sección de /hosting/ayuda/ con su ancla (#id).
export const ayuda = [
  {
    categoria: 'Primeros pasos',
    articulos: [
      {
        id: 'entrar-cpanel',
        titulo: 'Entrar a tu cPanel',
        intro: 'cPanel es el panel donde administras tu hosting: archivos, correos, bases de datos y más.',
        pasos: [
          'Abre en tu navegador: https://tudominio.com/cpanel (cambia "tudominio.com" por el tuyo).',
          'Escribe el usuario y la contraseña que te enviamos al contratar.',
          'También puedes entrar desde "Área de clientes → Entrar a cPanel" en esta página.',
        ],
        nota: '¿Olvidaste tu contraseña? Escríbenos por WhatsApp y te ayudamos a restablecerla.',
      },
      {
        id: 'apuntar-dominio',
        titulo: 'Apuntar tu dominio a tu hosting',
        intro: 'Para que tu dominio muestre tu web, debe "apuntar" a nuestros servidores.',
        pasos: [
          'Entra al panel de la empresa donde compraste tu dominio.',
          'Busca la opción "Nameservers" o "Servidores DNS".',
          'Reemplázalos por los dos nameservers que te enviamos al contratar tu plan.',
          'Guarda los cambios.',
        ],
        nota: 'El cambio puede tardar de unas horas hasta 48–72 horas en verse en todo el mundo. Es normal.',
      },
    ],
  },
  {
    categoria: 'Correo',
    articulos: [
      {
        id: 'crear-correo',
        titulo: 'Crear una cuenta de correo',
        intro: 'Crea correos con tu dominio, por ejemplo ventas@tuempresa.com.',
        pasos: [
          'Entra a tu cPanel.',
          'Abre "Cuentas de correo electrónico" y pulsa "Crear".',
          'Escribe el nombre del correo y una contraseña segura, y pulsa "Crear".',
        ],
      },
      {
        id: 'correo-celular',
        titulo: 'Configurar tu correo en el celular (Android y iPhone)',
        intro: 'Usa la app de correo de tu celular (Gmail, Outlook o Mail) con tu cuenta corporativa.',
        pasos: [
          'En la app, elige "Agregar cuenta" → "Otra" (o "IMAP").',
          'Correo y contraseña: los de tu cuenta corporativa (el correo completo es tu usuario).',
          'Servidor entrante (IMAP): mail.tudominio.com · puerto 993 · seguridad SSL/TLS.',
          'Servidor saliente (SMTP): mail.tudominio.com · puerto 465 · seguridad SSL/TLS.',
        ],
        nota: 'Los datos exactos de tu cuenta están en cPanel → Cuentas de correo electrónico → "Conectar dispositivos".',
      },
      {
        id: 'correo-outlook',
        titulo: 'Configurar tu correo en Outlook (PC)',
        intro: 'Agrega tu correo corporativo a Outlook en tu computadora.',
        pasos: [
          'En Outlook, ve a Archivo → Agregar cuenta.',
          'Escribe tu correo, elige "Opciones avanzadas" → "Configurar mi cuenta manualmente" → IMAP.',
          'Entrante: mail.tudominio.com, puerto 993, SSL/TLS. Saliente: mail.tudominio.com, puerto 465, SSL/TLS.',
          'Escribe tu contraseña y finaliza.',
        ],
      },
      {
        id: 'webmail',
        titulo: 'Revisar tu correo desde el navegador (Webmail)',
        intro: 'Si no quieres configurar ninguna app, puedes leer y enviar correos desde cualquier navegador.',
        pasos: ['Abre https://tudominio.com/webmail.', 'Escribe tu correo completo y su contraseña.'],
      },
    ],
  },
  {
    categoria: 'WordPress y seguridad',
    articulos: [
      {
        id: 'instalar-wordpress',
        titulo: 'Instalar WordPress',
        intro: 'Instala WordPress en tu dominio en menos de un minuto.',
        pasos: [
          'Entra a tu cPanel y abre "Softaculous Apps Installer".',
          'Elige "WordPress" y pulsa "Instalar ahora".',
          'Selecciona tu dominio, define el usuario y la contraseña del administrador, y pulsa "Instalar".',
        ],
      },
      {
        id: 'activar-ssl',
        titulo: 'Activar el certificado SSL (HTTPS)',
        intro: 'El SSL pone el candado de seguridad en tu web. Es gratis en todos los planes.',
        pasos: [
          'Asegúrate de que tu dominio ya apunte a tu hosting (ver "Apuntar tu dominio").',
          'En cPanel, abre "SSL/TLS Status".',
          'Pulsa "Run AutoSSL" y espera unos minutos.',
        ],
        nota: 'Si después de una hora sigue sin candado, escríbenos y lo revisamos.',
      },
    ],
  },
  {
    categoria: 'Pagos y cuenta',
    articulos: [
      {
        id: 'renovar-plan',
        titulo: 'Renovar tu plan',
        intro: 'Te avisamos por WhatsApp o correo antes de que venza tu plan.',
        pasos: [
          'Escríbenos por WhatsApp para recibir los datos de pago.',
          'Envíanos la constancia de pago.',
          'Confirmamos la renovación y te enviamos tu comprobante.',
        ],
      },
      {
        id: 'falta-de-pago',
        titulo: '¿Qué pasa si no pago a tiempo?',
        intro: 'Queremos que tu web nunca se caiga, por eso te avisamos con tiempo.',
        pasos: [
          'Pasados 3 días del vencimiento: te enviamos un recordatorio.',
          'A los 7 días sin pago: el servicio se suspende (tu web y tus correos dejan de funcionar).',
          'A los 30 días: la cuenta se elimina, guardando antes una copia de seguridad.',
        ],
        nota: 'Al renovar, el servicio se reactiva de inmediato.',
      },
      {
        id: 'cambiar-plan',
        titulo: 'Cambiar de plan',
        intro: '¿Necesitas más espacio o más correos? Puedes subir de plan cuando quieras.',
        pasos: ['Escríbenos por WhatsApp indicando el plan que quieres.', 'Ajustamos tu cuenta sin perder archivos ni correos.'],
      },
    ],
  },
]
