// /hosting/terminos/: términos del servicio de hosting. Modelo base: conviene revisarlo con un abogado antes de vender.

import { brand } from '../../data/site'

export default function HostingTerminos() {
  return (
    <>
      <section className="bg-host-noche px-4 py-14 text-white sm:px-6">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-[0.3em] text-host-amarillo uppercase">// legal</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Términos del servicio de hosting</h1>
          <p className="mt-2 font-mono text-xs text-white/50">Última actualización: octubre de 2026</p>
        </div>
      </section>

      <article
        className="mx-auto max-w-3xl px-4 py-12 text-sm leading-relaxed text-azul/80 sm:px-6
          [&_h2]:mt-10 [&_h2]:font-mono [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-azul
          [&_li]:mt-2 [&_p]:mt-4 [&_strong]:text-azul [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:text-host-azul [&_a]:underline"
      >
        <p>
          Estos términos regulan el servicio de alojamiento web («hosting») que ofrece <strong>{brand.legalName}</strong>{' '}
          (RUC {brand.ruc}, {brand.address}). Al contratar un plan, aceptas estas condiciones.
        </p>

        <h2>1. El servicio</h2>
        <ul>
          <li>Te brindamos espacio en servidores para tu sitio web, correos y bases de datos, según los recursos de tu plan.</li>
          <li>Incluye certificado SSL gratuito, copias de seguridad diarias y acceso al panel de control cPanel.</li>
          <li>El dominio no está incluido: se contrata y renueva por separado.</li>
        </ul>

        <h2>2. Pagos y renovación</h2>
        <ul>
          <li>El servicio se paga por adelantado, de forma mensual o anual.</li>
          <li>Te avisaremos antes de cada vencimiento para que puedas renovar a tiempo.</li>
          <li>Los precios pueden actualizarse; cualquier cambio se aplica desde la siguiente renovación y te lo comunicaremos con anticipación.</li>
        </ul>

        <h2>3. Falta de pago</h2>
        <ul>
          <li>A los 3 días del vencimiento sin pago enviamos un recordatorio.</li>
          <li>A los 7 días el servicio se suspende (sitio web y correos dejan de funcionar).</li>
          <li>A los 30 días la cuenta se elimina. Antes guardamos una copia de seguridad, que podemos entregarte si la solicitas.</li>
        </ul>

        <h2>4. Uso aceptable</h2>
        <p>Para proteger a todos los clientes que comparten nuestros servidores, está prohibido usar el servicio para:</p>
        <ul>
          <li>Enviar correo no deseado (spam) o masivo sin consentimiento.</li>
          <li>Alojar o distribuir malware, phishing, contenido ilegal o que infrinja derechos de autor (incluido software pirata).</li>
          <li>Minar criptomonedas, ejecutar ataques o escaneos a otros sistemas.</li>
          <li>Consumir recursos de forma que afecte el funcionamiento del servidor para otros clientes.</li>
        </ul>
        <p>Si detectamos un uso prohibido, podremos suspender el servicio de inmediato y te lo comunicaremos.</p>

        <h2>5. Copias de seguridad</h2>
        <p>
          Realizamos copias de seguridad diarias como medida de protección. Aun así, te recomendamos conservar tus propias
          copias de la información importante.
        </p>

        <h2>6. Disponibilidad</h2>
        <p>
          Trabajamos para que tu sitio esté disponible el mayor tiempo posible. Pueden existir interrupciones por
          mantenimiento programado (que avisaremos con anticipación) o por causas ajenas a nosotros.
        </p>

        <h2>7. Reembolsos</h2>
        <p>
          Si no estás conforme, puedes solicitar el reembolso dentro de los <strong>7 días</strong> siguientes a tu primera
          contratación. No aplica a renovaciones ni al registro de dominios.
        </p>

        <h2>8. Privacidad</h2>
        <p>
          Tratamos tus datos según nuestra <a href="/#/privacidad">Política de Privacidad</a> y la Ley N.° 29733. No
          accedemos al contenido de tu sitio ni de tus correos, salvo que nos lo pidas para darte soporte o lo exija la ley.
        </p>

        <h2>9. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos términos, escríbenos a <a href={`mailto:${brand.email}`}>{brand.email}</a>.
        </p>
      </article>
    </>
  )
}
