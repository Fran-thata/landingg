import React, { useState, useEffect } from 'react';

export const ProblemSection: React.FC = () => {
  // Estado para la animación de las tarjetas
  const [activeIndex, setActiveIndex] = useState(0);

  // Efecto para rotar el highlight cada 2 segundos (más rápido)
  useEffect(() => {
    // Respetar preferencia de movimiento reducido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2000); // Cambiado a 2 segundos para mayor velocidad

    return () => clearInterval(interval);
  }, []);

  // Datos para la primera sección (Problemas)
  const problems = [
    {
      icon: "fa-arrow-trend-down",
      title: "Perfil estancado",
      desc: "Sin reseñas recientes, pareces un negocio abandonado."
    },
    {
      icon: "fa-eye-slash",
      title: "Invisible en Google",
      desc: "Si no entran reseñas nuevas, Google deja de mostrarte."
    },
    {
      icon: "fa-users-slash",
      title: "Pérdida de clientes",
      desc: "Antes de entrar a un local valoran irse con quien tiene más estrellas."
    }
  ];

  // Datos exactos de las 5 tarjetas para la sección del Método
  const steps = [
    {
      title: "Identificar",
      desc: "Detectar al cliente satisfecho.",
      icon: "fa-magnifying-glass"
    },
    {
      title: "Cerrar",
      desc: "Sin prisas ni presión.",
      icon: "fa-handshake"
    },
    {
      title: "Naturalidad",
      desc: "Usar una frase cercana.",
      icon: "fa-microphone"
    },
    {
      title: "Filtrar",
      desc: "Saber a quién NO pedirla.",
      icon: "fa-user-xmark"
    },
    {
      title: "Anticipar",
      desc: "Prevenir malas reseñas.",
      icon: "fa-shield-halved"
    }
  ];

  return (
    <>
      {/* --- PARTE 1: PROBLEMAS DEL NEGOCIO (Con Auto-Rotating Highlight) --- */}
      <section className="bg-neutral-950 pt-10 pb-20 md:pt-16 md:pb-28 px-5 md:px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          
          {/* Texto Principal Centrado */}
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Clientes satisfechos sin reseñas: <br className="hidden md:block" />
              <span className="text-premium-gold">Tu negocio no crece.</span>
            </h2>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
              Si no pides la valoración en el momento justo, el cliente se olvida. <br className="hidden md:block" />
              Sin un sistema, tu perfil se estanca y la competencia te gana terreno.
            </p>
          </div>

          {/* Stack de 3 Tarjetas con Animación Automática */}
          <div className="flex flex-col gap-4">
             {problems.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={index}
                    className={`relative p-5 md:p-6 rounded-2xl flex items-center gap-5 md:gap-6 border transition-all duration-500 ease-in-out cursor-default
                      ${isActive 
                        ? 'border-premium-gold bg-white/[0.06] shadow-[0_4px_20px_rgba(212,175,55,0.15)] z-10' 
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04] z-0'
                      }
                    `}
                    // Permitir interacción manual si el usuario pasa el mouse
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-500
                      ${isActive
                        ? 'bg-premium-gold/10 border-premium-gold text-premium-gold'
                        : 'bg-neutral-900 border-white/10 text-white'
                      }
                    `}>
                      <i className={`fa-solid ${item.icon} text-xl md:text-2xl`}></i>
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-500 text-white`}>
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg leading-snug text-white">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
             })}
          </div>
        </div>
      </section>

      {/* --- SEPARADOR DORADO 1 --- */}
      <div className="w-full h-1.5 bg-gradient-to-r from-premium-gold-dark via-premium-gold to-premium-gold-dark shadow-[0_0_25px_rgba(212,175,55,0.8)] relative z-20"></div>

      {/* --- PARTE 2: FONDO NEGRO Y TARJETAS #1A1A1A (MÉTODO VS SUERTE) --- */}
      <section className="bg-black py-16 md:py-24 px-5 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 md:mb-4 leading-tight">
              Sin un método, las reseñas dependen de la suerte
            </h2>
            <h3 className="text-xl md:text-3xl font-bold text-premium-gold">
              Con un sistema, son constantes y predecibles
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
            {/* CAJA 1: EL CAOS (Fondo actualizado a #1A1A1A) */}
            <div className="bg-[#1A1A1A] border-2 border-[#7f1d1d] p-6 md:p-10 rounded-3xl relative min-h-[auto] md:min-h-[360px] flex flex-col justify-center shadow-2xl shadow-red-900/20">
               <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-[#1a0505] text-red-600 font-bold px-4 md:px-6 py-2 rounded-full text-xs md:text-sm border border-[#7f1d1d] uppercase tracking-wide">
                 <i className="fa-solid fa-xmark mr-2"></i> Sin Método
               </div>
               <ul className="space-y-6 md:space-y-8 mt-6 md:mt-0">
                  <li className="flex items-start gap-4"><i className="fa-regular fa-calendar-xmark text-red-500 mt-1"></i><span className="text-white">Se pide "cuando se puede".</span></li>
                  <li className="flex items-start gap-4"><i className="fa-solid fa-wave-square text-red-500 mt-1"></i><span className="text-white">Resultados a rachas.</span></li>
                  <li className="flex items-start gap-4"><i className="fa-solid fa-circle-question text-red-500 mt-1"></i><span className="text-white">Incertidumbre total.</span></li>
               </ul>
            </div>
            {/* CAJA 2: LA SOLUCIÓN (Fondo actualizado a #1A1A1A) */}
            <div className="bg-[#1A1A1A] border-2 border-premium-gold p-6 md:p-10 rounded-3xl relative shadow-2xl shadow-premium-gold/20 min-h-[auto] md:min-h-[360px] flex flex-col justify-center">
               <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-premium-gold to-premium-gold-dark text-neutral-950 font-extrabold px-4 md:px-6 py-2 rounded-full text-xs md:text-sm uppercase tracking-wide">
                 <i className="fa-solid fa-check mr-2"></i> Con Método
               </div>
               <ul className="space-y-6 md:space-y-8 mt-6 md:mt-0">
                  <li className="flex items-start gap-4"><i className="fa-solid fa-bullseye text-premium-gold mt-1"></i><span className="text-white font-bold">Momento exacto definido.</span></li>
                  <li className="flex items-start gap-4"><i className="fa-solid fa-users-gear text-premium-gold mt-1"></i><span className="text-white font-bold">Ejecución como un reloj.</span></li>
                  <li className="flex items-start gap-4"><i className="fa-solid fa-arrow-trend-up text-premium-gold mt-1"></i><span className="text-white font-bold">Reseñas constantes.</span></li>
               </ul>
            </div>
          </div>
          
          {/* Texto de cierre añadido */}
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white font-medium italic">
              Cuando el momento está definido, la reseña sale de forma natural.
            </p>
          </div>
        </div>
      </section>

      {/* --- NUEVO ORDEN SECCIÓN 3: "NO SE TRATA DE PEDIR..." (MOVIDO DESDE EL FINAL) --- */}
      <section className="bg-neutral-950 py-20 px-6 relative border-t border-white/5 overflow-hidden">
        
        {/* Spotlight Effect - White, Top Center, Cone Shape */}
        <div className="absolute inset-0 pointer-events-none z-0">
            {/* White Spotlight: Ellipse positioned at top center, creating a cone effect downwards */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_70%_at_50%_-10%,rgba(255,255,255,0.15),rgba(255,255,255,0)_100%)]"></div>
            
            {/* Vignette: Subtle darkening at the edges to center focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
            {/* Headlines - Aligned Left */}
            <div className="text-left mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
                    No se trata de <br />
                    pedir reseñas.
                </h2>
                <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] uppercase tracking-widest text-[#B48F26]">
                    SE TRATA DE SABER <br />
                    CUÁNDO HACERLO.
                </h3>
            </div>

            {/* Body Paragraphs - Aligned Left */}
            <div className="space-y-6 text-lg text-white leading-relaxed font-medium text-left max-w-2xl">
                <p>
                    Muchos locales lo hacen mal. Ponen un QR en el ticket o envían un email horas después. El resultado suele ser el mismo: Acaba en la basura. Cuando el cliente cruza la puerta, ya ha desconectado.
                </p>
                <p>
                    La clave es capturarlo en caliente, mientras siguen en la mesa. Sin fricción. De forma natural. Justo cuando la satisfacción es máxima.
                </p>
            </div>
            
             {/* Quote Section - Aligned Left & White */}
             <div className="mt-16 text-left">
                 <p className="text-2xl md:text-3xl text-white leading-relaxed font-bold">
                    La reseña es la consecuencia de un servicio bien hecho... cuando se pide en el momento correcto.
                 </p>
            </div>
        </div>
      </section>

      {/* --- NUEVO ORDEN SECCIÓN 4: "EL MÉTODO PARA CONVERTIR..." (MOVIDO DESDE POSICIÓN 5) --- */}
      <section 
        className="relative w-full pt-4 pb-24 px-4 overflow-hidden border-t border-white/5" 
        style={{
            backgroundImage: "url('https://res.cloudinary.com/ddpujsrsg/image/upload/v1768393896/WhatsApp_Image_2026-01-14_at_12.17.08_rzwvix.png')",
            backgroundSize: '100% auto', 
            backgroundPosition: 'center top', 
            backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay removed */}

        <div className="relative z-10 w-full flex flex-col items-center">
            
            {/* BLOQUE SUPERIOR */}
            <div className="text-center max-w-4xl mx-auto mb-8 px-4">
                {/* Título Modificado: Quitada font-serif y añadida font-extrabold */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#E0E0E0] mb-3 leading-tight drop-shadow-lg tracking-wide">
                    El método para convertir <br />
                    <span className="text-premium-gold font-bold">experiencias en 5★</span>
                </h2>
                <div className="flex flex-col gap-1 mt-6">
                    <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] uppercase tracking-[0.15em] drop-shadow-md font-sans">
                        NO ES PEDIR POR PEDIR.
                    </h3>
                    <h3 className="text-lg md:text-xl font-bold text-[#D4AF37] uppercase tracking-[0.15em] drop-shadow-md font-sans">
                        ES SABER LEER LA MESA.
                    </h3>
                </div>
            </div>

            {/* BLOQUE CENTRAL: CAJAS (Compactas y juntas) */}
            <div className="relative flex flex-col items-center w-full gap-2">
                
                {/* Línea vertical ajustada */}
                <div className="absolute left-[calc(50%-110px)] top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent z-0"></div>

                {steps.map((item, idx) => (
                    <div 
                       key={idx}
                       style={{
                           width: '290px', // Ancho compacto
                           backdropFilter: 'blur(4px)',
                           border: '1px solid rgba(212,175,55,0.25)', 
                           borderRadius: '10px',
                       }}
                       className="flex items-center gap-3 px-4 py-2.5 relative z-10"
                    >
                        {/* Icono */}
                        <div className="w-8 h-8 flex items-center justify-center shrink-0">
                            <i className={`fa-solid ${item.icon} text-[#D4AF37] text-lg drop-shadow-sm`}></i>
                        </div>
                        
                        {/* Textos: Estilo "Foto" (más pequeño y nítido) */}
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-[#D4AF37] font-bold text-base leading-tight mb-0.5">
                                {item.title}
                            </span>
                            <span className="text-white text-xs font-medium leading-tight">
                                {item.desc}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

             {/* BLOQUE INFERIOR (Cita) */}
             <div className="relative z-30 mt-16 mb-0 max-w-2xl mx-auto px-4">
                <div className="text-center">
                    {/* Cita Modificada: Quitada font-serif, sin bordes y bajada un poco */}
                    <p className="text-xl md:text-2xl text-white italic leading-relaxed">
                        "La diferencia entre pedir y conseguir no está en la herramienta, está en el método."
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SEPARADOR DORADO 2 (LUMINOSO) --- */}
      <div className="max-w-4xl mx-auto my-12 relative z-20">
             {/* Main Beam */}
             <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_30px_rgba(255,215,0,0.8),0_0_60px_rgba(255,215,0,0.4)] relative">
                 {/* Inner Hot White Core for Extra Luminosity */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-[1px] bg-white blur-[1px]"></div>
             </div>
      </div>

      {/* --- NUEVO ORDEN SECCIÓN 5: "LOS ACCESORIOS NFC..." (MOVIDO DESDE POSICIÓN 3) --- */}
      <section className="relative py-20 px-5 md:px-6 overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-100" style={{ backgroundImage: "url('https://res.cloudinary.com/ddpujsrsg/image/upload/v1768388082/WhatsApp_Image_2026-01-14_at_11.53.24_pnkqzj.jpg')" }}></div>
        {/* Overlay más oscuro para que resalte el texto y las cajas */}
        <div className="absolute inset-0 z-10 bg-black/75"></div>
        
        <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center text-center">
            {/* Título Principal - Modificado: Quitada font-serif */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-xl tracking-tight">
                Los accesorios NFC y <br />
                <span className="text-premium-gold">QR no generan reseñas</span> <br />
                <span className="text-premium-gold">por sí solos</span>
            </h2>
            <p className="text-white text-lg md:text-xl mb-12 font-medium drop-shadow-md tracking-wide">
                Solo conectan el móvil con el perfil.
            </p>
            
            {/* Stack de 3 Tarjetas con Iconos 3D-Like */}
            <div className="w-full flex flex-col gap-5 mb-10">
                
                {/* Card 1: Monedas + X */}
                <div className="group relative bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-5 md:p-6 flex items-center gap-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.01]">
                    <div className="relative shrink-0 w-16 h-16 flex items-center justify-center">
                        <i className="fa-solid fa-coins text-4xl text-premium-gold drop-shadow-[0_2px_5px_rgba(212,175,55,0.5)]"></i>
                        <div className="absolute -bottom-1 -right-1 bg-black rounded-full border border-premium-gold w-6 h-6 flex items-center justify-center">
                            <i className="fa-solid fa-xmark text-premium-gold text-sm font-bold"></i>
                        </div>
                    </div>
                    <p className="text-left text-white text-2xl md:text-3xl leading-tight font-medium">
                        Tener tarjetas y expositores sin un método es <span className="text-white font-bold">tirar el dinero.</span>
                    </p>
                </div>

                {/* Card 2: Varita Mágica */}
                <div className="group relative bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-5 md:p-6 flex items-center gap-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.01]">
                    <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                        <i className="fa-solid fa-wand-magic-sparkles text-4xl text-premium-gold drop-shadow-[0_2px_5px_rgba(212,175,55,0.5)]"></i>
                    </div>
                    <p className="text-left text-white text-2xl md:text-3xl leading-tight font-medium">
                        Sirven para agilizar el proceso, <span className="text-white font-bold">pero no hacen magia.</span>
                    </p>
                </div>

                {/* Card 3: Trofeo */}
                <div className="group relative bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-5 md:p-6 flex items-center gap-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.01]">
                    <div className="shrink-0 w-16 h-16 flex items-center justify-center">
                        <i className="fa-solid fa-trophy text-4xl text-premium-gold drop-shadow-[0_2px_5px_rgba(212,175,55,0.5)]"></i>
                    </div>
                    <p className="text-left text-white text-2xl md:text-3xl leading-tight font-medium">
                        Si tu equipo no prepara el terreno y el cliente no sale encantado, <span className="text-white">se quedarán de adorno.</span>
                    </p>
                </div>

            </div>

            {/* Caja Dorada Inferior */}
            <div className="w-full bg-gradient-to-r from-[#F2D06B] via-[#D4AF37] to-[#B48F26] rounded-xl p-6 md:p-8 shadow-[0_0_30px_rgba(212,175,55,0.3)] relative overflow-hidden">
                <p className="text-black font-extrabold text-xl md:text-2xl leading-tight relative z-10">
                    Los dispositivos no piden la reseña por ti. Tu equipo sí.
                </p>
            </div>
        </div>
      </section>

      {/* --- SECCIÓN 6: CÓMO FUNCIONA EN EL DÍA A DÍA --- */}
      <section className="bg-black py-16 px-6 relative overflow-hidden border-t border-white/10">
          
          {/* Header - Update: Use Font-Extrabold (Manrope) instead of Playfair for consistency */}
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#D4AF37] mb-6 leading-tight tracking-tight">
                  Cómo funciona <br />
                  en el día a día
              </h2>
              <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6 opacity-60"></div>
              {/* Text reverted to neutral */}
              <p className="text-white text-lg md:text-xl font-medium tracking-wide">
                  Se integra en tu rutina sin que lo notes.
              </p>
          </div>

          {/* Timeline Vertical */}
          <div className="max-w-2xl mx-auto relative mb-16">
              {/* Línea vertical conectora */}
              <div className="absolute left-[27px] md:left-[27px] top-4 bottom-4 w-0.5 bg-[#D4AF37] opacity-40"></div>

              {/* Pasos */}
              <div className="space-y-12">
                  
                  {/* Paso 1 */}
                  <div className="relative flex items-start gap-8">
                      {/* Icono Circular */}
                      <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-black flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                          <i className="fa-solid fa-handshake text-[#D4AF37] text-xl"></i>
                      </div>
                      {/* Texto */}
                      <div className="pt-1">
                          <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Paso 1: Petición natural</h3>
                          {/* Text reverted to white/neutral */}
                          <p className="text-white leading-relaxed text-base">
                              Cliente satisfecho → El equipo pide la valoración al cerrar la cuenta.
                          </p>
                      </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="relative flex items-start gap-8">
                      <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-black flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                          <i className="fa-solid fa-microphone-lines text-[#D4AF37] text-xl"></i>
                      </div>
                      <div className="pt-1">
                          <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Paso 2: Guía del mensaje</h3>
                          {/* Text reverted to white/neutral */}
                          <p className="text-white leading-relaxed text-base">
                              Sugerimos sutilmente qué escribir. Así el cliente no tiene que pensar y Google te premie.
                          </p>
                      </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="relative flex items-start gap-8">
                      <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37] bg-black flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                          <i className="fa-solid fa-mobile-screen-button text-[#D4AF37] text-xl"></i>
                      </div>
                      <div className="pt-1">
                          <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Paso 3: Publicación en segundos</h3>
                          {/* Text reverted to white/neutral */}
                          <p className="text-white leading-relaxed text-base">
                              Acerca el móvil y la reseña se publica al instante.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Caja Cliente Insatisfecho - ESCUDO A LA IZQUIERDA SIEMPRE */}
          <div className="max-w-2xl mx-auto mb-0 relative">
              <div className="border border-[#D4AF37] rounded-xl p-6 md:p-8 bg-black/80 backdrop-blur-sm shadow-[0_0_25px_rgba(212,175,55,0.15)] flex flex-row items-center gap-6 text-left">
                   <div className="shrink-0">
                        <i className="fa-solid fa-shield-halved text-4xl text-[#D4AF37]"></i>
                   </div>
                   <div>
                       <h3 className="text-[#D4AF37] font-bold text-xl mb-2">
                          ¿Cliente insatisfecho?
                       </h3>
                       {/* Text reverted to white/neutral */}
                       <p className="text-white text-base leading-relaxed">
                          Se detecta y se corrige en la mesa. Así evitas que la queja llegue a Google Maps.
                       </p>
                   </div>
              </div>
          </div>
      </section>
    </>
  );
};