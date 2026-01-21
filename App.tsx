import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesCarousel } from './components/ServicesCarousel';
import { PricingSection } from './components/PricingSection';
import { IsThisForYouSection } from './components/IsThisForYouSection';
import { ResultsSection } from './components/ResultsSection';
import { FAQSection } from './components/FAQSection';

// --- LEGAL TEXTS CONSTANTS ---
const LEGAL_TEXTS = {
  aviso: {
    title: "AVISO LEGAL",
    content: `LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI-CE)
RICHARD NOGALES ZABALA, responsable del sitio web masclientes.vip, en adelante el RESPONSABLE, pone a disposición de los usuarios el presente documento con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.
Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.
El RESPONSABLE se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas modificaciones, entendiéndose como suficiente la publicación en el propio sitio web.

1. DATOS IDENTIFICATIVOS
Titular: RICHARD NOGALES ZABALA
Nombre comercial: masclientes.vip
NIF: 10233170X
Domicilio: C/ dels Centelles, 45, Ensanche, 46006 – Valencia (España)
Correo electrónico: richardnogalesz@gmail.com

2. OBJETO
A través del presente Sitio Web, el RESPONSABLE ofrece a los usuarios información sobre servicios de marketing digital orientados a la captación de reseñas online, la mejora de la visibilidad en Google Maps y la reputación digital, así como el suministro de soportes físicos asociados, tales como expositores y tarjetas con tecnología QR y/o NFC, dirigidos principalmente a negocios locales y profesionales.
El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena de las presentes condiciones.

3. USO DEL SITIO WEB
El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el RESPONSABLE ofrece a través de su sitio web y, con carácter enunciativo pero no limitativo, a no emplearlos para:
Realizar actividades ilícitas o contrarias a la buena fe y al orden público.
Difundir contenidos o propaganda de carácter ilegal, ofensivo o contrario a derechos fundamentales.
Provocar daños en los sistemas físicos y lógicos del RESPONSABLE o de terceros.
El RESPONSABLE se reserva el derecho a retirar o bloquear el acceso a aquellos contenidos que vulneren la legalidad vigente o resulten inapropiados.

4. RESPONSABILIDAD
El RESPONSABLE no se hace responsable de la información publicada en su sitio web siempre que esta haya sido manipulada o introducida por terceros ajenos al mismo.
Asimismo, no se garantiza la inexistencia de errores en el acceso al sitio web ni en su contenido, ni que este se encuentre permanentemente actualizado, aunque se compromete a poner todos los medios razonables para evitarlos, subsanarlos o actualizarlos.
El RESPONSABLE no garantiza resultados concretos, tales como un número determinado de reseñas, valoraciones o posiciones en plataformas externas, ya que estos dependen de factores ajenos a su control, incluyendo el comportamiento de los usuarios finales y las políticas de terceros como Google.

5. PROPIEDAD INTELECTUAL E INDUSTRIAL
Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, marcas, código fuente, estructura y demás elementos) son titularidad del RESPONSABLE o dispone de los derechos necesarios para su uso, estando protegidos por la normativa vigente en materia de propiedad intelectual e industrial.
Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación, total o parcial, de los contenidos de este sitio web sin la autorización expresa del RESPONSABLE.

6. PRIVACIDAD Y PROTECCIÓN DE DATOS
El RESPONSABLE cumple con la normativa vigente en materia de protección de datos personales, en particular el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
Los datos personales que el usuario facilite a través del sitio web, ya sea mediante formularios de contacto, correo electrónico o sistemas de mensajería, serán tratados con la finalidad de:
Atender solicitudes de información
Gestionar contactos comerciales
Elaborar presupuestos y propuestas de servicios
El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando una solicitud al correo electrónico indicado en el apartado de datos identificativos.
Para más información, el usuario puede consultar la correspondiente Política de Privacidad.

7. ENLACES EXTERNOS
Desde el sitio web es posible que se redirija a contenidos de terceros. Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por dichos terceros, no asume ningún tipo de responsabilidad respecto a los mismos.

8. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
Con carácter general, las relaciones entre el RESPONSABLE y los Usuarios de los servicios telemáticos presentes en este sitio web se encuentran sometidas a la legislación y jurisdicción españolas.
En particular, resultan de aplicación las siguientes normas:
Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).
Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (Reglamento General de Protección de Datos – RGPD).
Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
Para la resolución de cualquier controversia que pudiera surgir, las partes se someterán a los Juzgados y Tribunales de Valencia, salvo que la normativa aplicable disponga otra cosa.`
  },
  terminos: {
    title: "TÉRMINOS Y CONDICIONES DE CONTRATACIÓN",
    content: `1. IDENTIFICACIÓN DEL TITULAR
En cumplimiento de lo dispuesto en la normativa vigente, se informa que el presente sitio web masclientes.vip es titularidad de:
Titular: RICHARD NOGALES ZABALA
Nombre comercial: masclientes.vip
NIF: 10233170X
Domicilio: C/ dels Centelles, 45, Ensanche, 46006 – Valencia (España)
Correo electrónico: richardnogalesz@gmail.com
En adelante, el RESPONSABLE.

2. OBJETO
Las presentes Condiciones regulan la contratación de los productos y servicios ofrecidos a través del sitio web masclientes.vip, consistentes en:
Expositores físicos para la captación de reseñas
Tarjetas con tecnología QR y/o NFC
Servicios asociados de instalación, formación y soporte
Servicios de marketing orientados a la mejora de la visibilidad online y reputación digital
La contratación se realiza previo contacto directo con el RESPONSABLE a través de formulario web, correo electrónico o WhatsApp.

3. PROCESO DE CONTRATACIÓN
El proceso de contratación se desarrolla del siguiente modo:
El usuario contacta con el RESPONSABLE a través de los medios habilitados.
El RESPONSABLE facilita información detallada del producto o servicio.
Se confirma el precio final, condiciones y gastos de envío.
Una vez aceptadas las condiciones, se formaliza el pedido por los medios acordados.
No existe contratación automática ni pago directo a través del sitio web.

4. PRECIOS Y FORMA DE PAGO
Todos los precios mostrados en la web incluyen el IVA correspondiente, salvo que se indique expresamente lo contrario.
Los gastos de envío no están incluidos en el precio y se informarán antes de la confirmación del pedido.
El pago se realizará mediante el método acordado entre las partes tras el contacto previo.

5. ENVÍO Y ENTREGA
Los productos se envían a la dirección facilitada por el cliente.
Los plazos de entrega serán orientativos y se comunicarán al cliente en el momento de la contratación.
El RESPONSABLE no será responsable de retrasos imputables a la empresa de transporte o a causas de fuerza mayor.

6. SERVICIOS INCLUIDOS
La contratación puede incluir, según lo acordado:
Instalación del sistema
Formación básica para el uso correcto del expositor y tarjeta
Soporte posterior relacionado con el servicio contratado
El alcance exacto de estos servicios será el indicado en la comunicación previa a la contratación.

7. DERECHO DE DESISTIMIENTO
El cliente dispone de un plazo de catorce (14) días naturales desde la recepción del pedido para ejercer su derecho de desistimiento, sin necesidad de indicar el motivo.
Para ejercer este derecho, el cliente deberá comunicarlo de forma expresa al RESPONSABLE a través del correo electrónico indicado.
Condiciones del desistimiento:
El producto deberá devolverse en perfecto estado, sin usar y con su embalaje original.
Los gastos de devolución correrán a cargo del cliente.
Una vez recibido el producto y comprobado su estado, se procederá al reembolso correspondiente.

8. RESPONSABILIDAD Y LIMITACIÓN DE GARANTÍAS
El RESPONSABLE no garantiza resultados concretos derivados del uso de los productos o servicios contratados, tales como un número determinado de reseñas, valoraciones o posicionamiento en plataformas externas.
El funcionamiento de servicios de terceros (como Google) depende de políticas ajenas al RESPONSABLE, por lo que no se asume responsabilidad por cambios, suspensiones o decisiones adoptadas por dichas plataformas.

9. PROPIEDAD INTELECTUAL
Todos los contenidos, sistemas, diseños, textos y materiales asociados al servicio son titularidad del RESPONSABLE o se utilizan con autorización, quedando prohibida su reproducción o uso sin consentimiento expreso.

10. PROTECCIÓN DE DATOS
Los datos personales facilitados durante el proceso de contacto o contratación serán tratados conforme a la normativa vigente en materia de protección de datos, tal y como se detalla en la Política de Privacidad del sitio web.

11. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
Las presentes Condiciones se rigen por la legislación española.
Para la resolución de cualquier controversia que pudiera derivarse de la interpretación o ejecución de las mismas, las partes se someten a los Juzgados y Tribunales de Valencia, salvo que la normativa aplicable disponga otra cosa.`
  },
  privacidad: {
    title: "POLÍTICA DE PRIVACIDAD",
    content: `1. RESPONSABLE DEL TRATAMIENTO
De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa a los usuarios que los datos personales facilitados a través del sitio web masclientes.vip serán tratados por:
Responsable: RICHARD NOGALES ZABALA
Nombre comercial: masclientes.vip
NIF: 10233170X
Domicilio: C/ dels Centelles, 45, Ensanche, 46006 – Valencia (España)
Correo electrónico: richardnogalesz@gmail.com

2. DATOS PERSONALES QUE SE RECABAN
A través del sitio web se podrán recabar los siguientes datos personales:
Nombre y apellidos
Teléfono
Dirección de correo electrónico
Datos facilitados voluntariamente en el mensaje de contacto
Los datos se recaban mediante:
Formularios de contacto
Comunicación directa por WhatsApp
Correo electrónico
No se recogen datos especialmente protegidos.

3. FINALIDAD DEL TRATAMIENTO
Los datos personales facilitados por el usuario serán tratados con las siguientes finalidades:
Atender solicitudes de información
Gestionar contactos comerciales
Elaborar presupuestos y propuestas de servicios
Mantener comunicaciones relacionadas con los servicios ofrecidos
Los datos no se utilizarán para fines distintos a los descritos.

4. LEGITIMACIÓN DEL TRATAMIENTO
La base legal para el tratamiento de los datos es:
El consentimiento del usuario, otorgado al enviar el formulario o contactar voluntariamente por los medios habilitados.
La aplicación de medidas precontractuales, cuando el usuario solicita información o presupuesto.

5. CONSERVACIÓN DE LOS DATOS
Los datos personales se conservarán durante:
El tiempo necesario para atender la solicitud del usuario.
El período en que exista una relación comercial o contractual.
Los plazos exigidos por la normativa aplicable.
Una vez finalizados estos plazos, los datos serán eliminados de forma segura.

6. DESTINATARIOS DE LOS DATOS
Los datos personales no se comunicarán a terceros, salvo obligación legal o cuando sea necesario para la correcta prestación del servicio.
En particular, podrán tener acceso a determinados datos personales:
Proveedores de servicios de transporte y logística, únicamente cuando sea necesario para la entrega del pedido.
Proveedores de servicios tecnológicos (alojamiento web, mantenimiento y soporte técnico), que actúan como encargados del tratamiento.
En ningún caso los datos serán cedidos para fines comerciales ajenos al servicio contratado.

7. DERECHOS DEL USUARIO
El usuario podrá ejercer en cualquier momento los siguientes derechos:
Acceso a sus datos personales
Rectificación de los datos inexactos
Supresión de sus datos cuando ya no sean necesarios
Oposición o limitación del tratamiento
Portabilidad de los datos cuando proceda
Para ejercer estos derechos, el usuario podrá enviar una solicitud al correo electrónico indicado en el apartado de identificación, adjuntando un documento que permita verificar su identidad.

8. MEDIDAS DE SEGURIDAD
El RESPONSABLE adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, evitando su pérdida, alteración o acceso no autorizado.

9. CAMBIOS EN LA POLÍTICA DE PRIVACIDAD
El RESPONSABLE se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a cambios normativos o a la operativa del sitio web. Las modificaciones serán publicadas en el propio sitio web.

10. ACEPTACIÓN DE LA POLÍTICA DE PRIVACIDAD
El uso del sitio web implica la aceptación de la presente Política de Privacidad por parte del usuario.`
  },
  cookies: {
    title: "POLÍTICA DE COOKIES",
    content: `El sitio web masclientes.vip, titularidad de RICHARD NOGALES ZABALA, utiliza cookies propias y de terceros con el fin de mejorar la experiencia del usuario y analizar el uso del sitio web.
La presente Política de Cookies explica qué son las cookies, qué tipo de cookies se utilizan y cómo pueden gestionarse.

1. ¿QUÉ SON LAS COOKIES?
Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Permiten que el sitio web recuerde información sobre la visita, como el idioma preferido o determinadas configuraciones, con el objetivo de facilitar la navegación y mejorar la experiencia del usuario.

2. TIPOS DE COOKIES UTILIZADAS
Este sitio web puede utilizar las siguientes cookies:
a) Cookies técnicas o necesarias
Son cookies imprescindibles para el correcto funcionamiento del sitio web y permiten al usuario la navegación a través del mismo y la utilización de sus diferentes opciones o servicios, como el envío de formularios o el acceso seguro a determinadas áreas.
Estas cookies no requieren el consentimiento del usuario.

b) Cookies de análisis o medición (si se utilizan)
Son cookies que permiten cuantificar el número de usuarios y analizar estadísticamente el uso que hacen los usuarios del sitio web, con el fin de mejorar los servicios ofrecidos.
Estas cookies solo se instalarán si el usuario presta su consentimiento.

c) Cookies de terceros
Este sitio web puede utilizar cookies de terceros, como herramientas de medición o servicios integrados (por ejemplo, servicios de mensajería o mapas), que pueden recopilar información con fines estadísticos o técnicos.
La instalación de estas cookies estará sujeta al consentimiento del usuario.

3. COOKIES UTILIZADAS EN ESTE SITIO WEB
Actualmente, el sitio web masclientes.vip puede utilizar cookies técnicas necesarias para su funcionamiento y, en su caso, cookies de análisis para la medición de la actividad del sitio web.
En ningún caso se utilizan cookies para fines publicitarios propios ni se ceden los datos obtenidos a terceros con fines comerciales.

4. GESTIÓN Y CONFIGURACIÓN DE COOKIES
El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador utilizado.
A continuación, se facilitan enlaces a la información de configuración de los navegadores más habituales:
Google Chrome


Mozilla Firefox


Microsoft Edge


Safari


La desactivación de cookies puede afectar al correcto funcionamiento del sitio web.

5. ACEPTACIÓN DE LA POLÍTICA DE COOKIES
Al acceder al sitio web, el usuario ha sido informado sobre el uso de cookies mediante un aviso o banner informativo.
La aceptación del aviso de cookies implica el consentimiento expreso para el uso de aquellas cookies que lo requieran, de acuerdo con las condiciones establecidas en la presente Política de Cookies.

6. CAMBIOS EN LA POLÍTICA DE COOKIES
El RESPONSABLE se reserva el derecho a modificar la presente Política de Cookies para adaptarla a novedades legislativas o técnicas. Cualquier modificación será publicada en el propio sitio web.`
  }
};

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<keyof typeof LEGAL_TEXTS | null>(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [activeModal]);

  return (
    <>
      <footer className="bg-[#050505] py-16 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          
          {/* Brand Logo Removed */}
          
          {/* Legal Links (Centered on Desktop) */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <button 
              onClick={() => setActiveModal('aviso')}
              className="text-white/60 hover:text-premium-gold text-xs font-medium uppercase tracking-wider transition-colors"
            >
              Aviso Legal
            </button>
            <button 
              onClick={() => setActiveModal('terminos')}
              className="text-white/60 hover:text-premium-gold text-xs font-medium uppercase tracking-wider transition-colors"
            >
              Términos y Condiciones
            </button>
            <button 
              onClick={() => setActiveModal('privacidad')}
              className="text-white/60 hover:text-premium-gold text-xs font-medium uppercase tracking-wider transition-colors"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => setActiveModal('cookies')}
              className="text-white/60 hover:text-premium-gold text-xs font-medium uppercase tracking-wider transition-colors"
            >
              Política de Cookies
            </button>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
             <div className="flex gap-4">
              <i className="fa-brands fa-instagram text-white/70 hover:text-premium-gold cursor-pointer transition-colors text-lg"></i>
              <i className="fa-brands fa-linkedin text-white/70 hover:text-premium-gold cursor-pointer transition-colors text-lg"></i>
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-wider">
              © {new Date().getFullYear()} masclientes.vip
            </p>
          </div>
        </div>
      </footer>

      {/* --- LEGAL MODAL --- */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveModal(null)}
          ></div>
          
          {/* Content Container */}
          <div className="relative bg-[#0E0E12] w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 flex flex-col animate-in fade-in zoom-in-95 duration-300">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#0E0E12] rounded-t-2xl z-10">
              <h3 className="text-lg font-bold text-premium-gold uppercase tracking-wider">
                {LEGAL_TEXTS[activeModal].title}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
              >
                <i className="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-light">
                {LEGAL_TEXTS[activeModal].content}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-white/10 bg-[#0E0E12] rounded-b-2xl flex justify-end">
               <button 
                 onClick={() => setActiveModal(null)}
                 className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wide rounded transition-colors"
               >
                 Cerrar
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar for Modal */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0E0E12;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D4AF37;
        }
      `}</style>
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-premium-dark text-white font-manrope selection:bg-premium-gold selection:text-black">
      <Hero />
      <ProblemSection />
      <ServicesCarousel />
      <PricingSection />
      <IsThisForYouSection />
      <ResultsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;