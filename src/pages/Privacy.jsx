import { brand } from '../data/site'
import LegalPage from './LegalPage'

export default function Privacy() {
  return (
    <LegalPage tag="privacidad" title="Política de Privacidad" updated="octubre de 2026">
      <p>
        En {brand.name} respetamos tu privacidad. Esta política explica qué datos personales recogemos a través de
        este sitio web, para qué los usamos y cómo puedes ejercer tus derechos, conforme a la{' '}
        <strong>Ley N.° 29733, Ley de Protección de Datos Personales</strong>, y su Reglamento (Decreto Supremo
        N.° 016-2024-JUS).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Titular:</strong> {brand.legalName}</li>
        <li><strong>RUC:</strong> {brand.ruc}</li>
        <li><strong>Domicilio:</strong> {brand.address}</li>
        <li><strong>Correo de contacto:</strong> <a href={`mailto:${brand.email}`}>{brand.email}</a></li>
      </ul>

      <h2>2. Datos que recogemos</h2>
      <p>Solo los que nos das voluntariamente en el formulario de contacto:</p>
      <ul>
        <li>Nombre</li>
        <li>Correo electrónico</li>
        <li>Número de celular / WhatsApp (opcional)</li>
        <li>Servicio de interés y el mensaje que nos escribes</li>
      </ul>
      <p>No solicitamos datos sensibles. Te pedimos no incluirlos en tu mensaje.</p>

      <h2>3. Finalidad</h2>
      <ul>
        <li>Responder tu consulta y elaborar una cotización o propuesta.</li>
        <li>Contactarte por correo, teléfono o WhatsApp sobre tu solicitud.</li>
      </ul>
      <p>
        No usamos tus datos para publicidad ni los vendemos. Si en el futuro quisiéramos enviarte novedades, te
        pediremos un consentimiento aparte.
      </p>

      <h2>4. Base legal: tu consentimiento</h2>
      <p>
        Tratamos tus datos porque nos das tu consentimiento libre, previo, expreso e informado al marcar la casilla
        del formulario. Puedes revocarlo en cualquier momento escribiendo a{' '}
        <a href={`mailto:${brand.email}`}>{brand.email}</a>.
      </p>

      <h2>5. Con quién compartimos tus datos</h2>
      <p>No cedemos tus datos a terceros. Para que el sitio funcione usamos estos proveedores (encargados de tratamiento):</p>
      <ul>
        <li>
          <strong>FormSubmit</strong>: recibe el formulario y nos lo reenvía por correo. Sus servidores pueden
          estar fuera del Perú, lo que constituye un <strong>flujo transfronterizo</strong> de datos.
        </li>
        <li>
          <strong>Google (Gmail)</strong>: servicio de correo donde recibimos los mensajes.
        </li>
      </ul>

      <h2>6. Cuánto tiempo los conservamos</h2>
      <p>
        Mientras dure la atención de tu solicitud y la relación comercial que surja de ella. Si no llegamos a
        trabajar juntos, eliminamos tus datos como máximo a los 12 meses del último contacto, salvo que una
        obligación legal exija conservarlos más tiempo.
      </p>

      <h2>7. Tus derechos (ARCO)</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de <strong>acceso, rectificación, cancelación y
        oposición</strong>, así como revocar tu consentimiento. Escribe a{' '}
        <a href={`mailto:${brand.email}`}>{brand.email}</a> con el asunto «Derechos ARCO», indicando tu nombre,
        el derecho que deseas ejercer y una copia de tu documento de identidad. Responderemos dentro de los plazos
        que establece la normativa.
      </p>
      <p>
        Si consideras que no atendimos tu solicitud, puedes presentar una reclamación ante la{' '}
        <strong>Autoridad Nacional de Protección de Datos Personales</strong> del Ministerio de Justicia y
        Derechos Humanos.
      </p>
    </LegalPage>
  )
}
