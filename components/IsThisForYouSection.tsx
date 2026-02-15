import React from 'react';

export const IsThisForYouSection: React.FC = () => {
  return (
    <section className="relative w-full pt-[120px] pb-10 px-6 bg-[#050505] overflow-hidden flex flex-col items-center">
      
      {/* --- CUSTOM STYLES & ANIMATIONS --- */}
      <style>{`
        @keyframes subtle-drift {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-10px); opacity: 0.6; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heartbeat-red-glow {
          0% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(210, 74, 92, 0)); }
          15% { transform: scale(1.3); filter: drop-shadow(0 0 10px rgba(210, 74, 92, 0.9)); }
          30% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(210, 74, 92, 0)); }
          45% { transform: scale(1.3); filter: drop-shadow(0 0 10px rgba(210, 74, 92, 0.9)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 0px rgba(210, 74, 92, 0)); }
        }
        .animate-subtle-drift {
          animation: subtle-drift 8s ease-in-out infinite;
        }
        .animate-border-rotate {
          animation: border-rotate 4s linear infinite;
        }
        .animate-heartbeat-red {
          animation: heartbeat-red-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Gradient (Darker - Nearly Black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-black to-[#050505] z-0"></div>
      
      {/* 2. Cinematic Spotlight (Diffuse) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      {/* 3. Film Grain (2-3% opacity) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}>
      </div>

      {/* 4. Minimal Gold Dust Bokeh */}
      <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px] animate-subtle-drift z-0"></div>
      <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-[#D4AF37] rounded-full blur-[2px] animate-subtle-drift z-0" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[30%] left-[20%] w-0.5 h-0.5 bg-[#D4AF37] rounded-full blur-[0px] animate-subtle-drift z-0" style={{ animationDelay: '4s' }}></div>

      {/* --- CONTENT CONTAINER (Wider for bigger text) --- */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col gap-12">
        
        {/* HEADER */}
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.2] tracking-tight mb-3">
                Este sistema no es para todos <br/>
                {/* Updated color to match the card header gold */}
                <span className="text-[#E5D196] font-light text-3xl">(y es intencionado)</span>
            </h2>
        </div>

        {/* --- CARD 1: ENCAJA CONTIGO (GOLD LED) --- */}
        <div className="relative group w-full rounded-[28px]">
            {/* LED Edge Effect (Animated Border) */}
            <div className="absolute -inset-[2px] rounded-[28px] overflow-hidden opacity-100">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-border-rotate"
                     style={{
                         background: 'conic-gradient(transparent 120deg, #D4AF37 180deg, transparent 240deg)'
                     }}>
                </div>
            </div>
            
            {/* Card Body - Increased margin to 2px to show LED border better */}
            {/* BACKGROUND CHANGED TO #1A1A1A */}
            <div className="relative bg-[#1A1A1A] rounded-[26px] h-full overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]" style={{ margin: '2px' }}>
                
                {/* Smoked Glass Overlay inside */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xl z-0"></div>

                {/* Subtle Diagonal Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none z-0 opacity-10"></div>
                
                {/* Card Body Content */}
                <div className="relative z-10 px-8 py-9 md:p-10">
                    
                    {/* Header */}
                    <h3 className="text-[15px] font-bold uppercase tracking-[5px] text-[#E5D196]/90 border-b border-white/[0.1] pb-5 mb-4">
                        Encaja contigo si:
                    </h3>

                    <div className="flex flex-col">
                        {[
                            { title: "Atención Directa", desc: "Tienes contacto presencial con el cliente en mostrador, mesa o despacho." },
                            { title: "Flujo Constante", desc: "Buscas un crecimiento orgánico y diario de tu reputación, no picos temporales." },
                            { title: "Dominio Digital", desc: "Quieres el control total de tu visibilidad y posicionamiento en Google." },
                            { title: "Compromiso", desc: "Estás decidido a aplicar un método profesional junto a tu equipo." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6 py-6 border-b border-white/[0.08] last:border-0 last:pb-0">
                                {/* Icon Chip - GOLD STYLE - UPSIZED */}
                                <div className="shrink-0 w-[42px] h-[42px] rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center mt-0.5">
                                    <i className="fa-solid fa-check text-[20px] text-[#D4AF37]"></i>
                                </div>
                                
                                {/* Text Columns */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[#F5F5F7]/95 text-[22px] font-semibold tracking-tight">
                                        {item.title}
                                    </span>
                                    <span className="text-[#F5F5F7]/75 text-[17px] font-normal leading-[1.65]">
                                        {item.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- CARD 2: NO ES PARA TI (RED LED) --- */}
        <div className="relative group w-full rounded-[28px]">
            {/* LED Edge Effect (Animated Border) - RED */}
            <div className="absolute -inset-[2px] rounded-[28px] overflow-hidden opacity-100">
                <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-border-rotate"
                     style={{
                         background: 'conic-gradient(transparent 120deg, #D24A5C 180deg, transparent 240deg)'
                     }}>
                </div>
            </div>

            {/* Card Body */}
            {/* BACKGROUND CHANGED TO #1A1A1A */}
            <div className="relative bg-[#1A1A1A] rounded-[26px] h-full overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.65)]" style={{ margin: '2px' }}>
                
                {/* Panel Background: Black with transparency (Smoked Glass) */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[20px] z-0"></div>

                {/* Subtle Diagonal Reflection (Nacreous) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none z-0 opacity-10"></div>
                
                {/* Card Body Content */}
                <div className="relative z-10 px-8 py-9 md:p-10">
                     
                     {/* Header */}
                     <h3 className="text-[15px] font-bold uppercase tracking-[5px] text-[#C9A24A]/90 border-b border-white/[0.1] pb-5 mb-4">
                        No es para ti si:
                    </h3>

                    <div className="flex flex-col">
                        {[
                            { title: "Careces de Contacto", desc: "Tu negocio no tiene trato directo con el cliente final." },
                            { title: "Prefieres los Atajos", desc: "Buscas soluciones mágicas o métodos para comprar reseñas falsas." }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-6 py-6 border-b border-white/[0.08] last:border-0 last:pb-0">
                                {/* Icon Chip - BURGUNDY STYLE - UPSIZED */}
                                <div className="shrink-0 w-[42px] h-[42px] rounded-full bg-[#7A1E2B]/15 border border-[#7A1E2B]/35 flex items-center justify-center mt-0.5">
                                    <i className="fa-solid fa-xmark text-[20px] text-[#D24A5C]/90 animate-heartbeat-red"></i>
                                </div>
                                
                                {/* Text Columns */}
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[#F5F5F7]/95 text-[22px] font-semibold tracking-tight">
                                        {item.title}
                                    </span>
                                    <span className="text-[#F5F5F7]/75 text-[17px] font-normal leading-[1.65]">
                                        {item.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="w-full flex justify-center mt-10">
            <a 
                href="https://wa.me/34643871290?text=Hola%2C%20estoy%20interesado%20en%20un%20sistema%20para%20conseguir%20rese%C3%B1as%20constantes%20en%20Google%20Maps.%20%C2%BFC%C3%B3mo%20funciona%20y%20qu%C3%A9%20incluye%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative h-[64px] w-full max-w-sm rounded-full 
                  bg-[#060608] border border-[#D4AF37]/40 
                  text-[#D4AF37] text-[16px] font-bold uppercase tracking-widest
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,1)]
                  hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                  transition-all duration-500 ease-out
                  flex items-center justify-center gap-3
                  group
                  cursor-pointer no-underline
                  animate-sway
                "
            >
                <span className="relative z-10 group-hover:tracking-[0.15em] transition-all duration-500">
                   Quiero mejorar mis reseñas
                </span>
                {/* Subtle Metallic Shine Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
        </div>

      </div>
    </section>
  );
};