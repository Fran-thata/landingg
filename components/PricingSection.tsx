import React from 'react';

export const PricingSection: React.FC = () => {
  const benefits = [
    "Método + Capacitación: Tu equipo sabrá exactamente qué hacer.",
    "Implementación guiada: No estarás solo, lo dejamos listo.",
    "Kit Tecnológico: 1 Expositor + 2 Tarjetas NFC de alta durabilidad.",
    "Sin cuotas mensuales: El sistema es tuyo para siempre."
  ];

  return (
    <section className="relative w-full py-12 px-6 bg-[#060608] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Inline Styles for Custom Animations */}
      <style>{`
        @keyframes spin-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes heartbeat-custom {
          0% { transform: scale(1); }
          12% { transform: scale(1.02); }
          24% { transform: scale(1); }
          36% { transform: scale(1.02); }
          48% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .animate-spin-slow {
          animation: spin-border 4s linear infinite;
        }
        .animate-heartbeat {
          animation: heartbeat-custom 3s ease-in-out infinite;
        }
      `}</style>

      {/* --- CINEMATIC BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] to-[#0E0E12] z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[80vh] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_60%)] blur-3xl pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col gap-6">
        
        {/* --- TYPOGRAPHY HEADER --- */}
        <div className="text-center space-y-4">
           <h2 className="text-4xl font-semibold text-[#F0F0F0] leading-[1.1] tracking-tight">
             Control total sobre tu reputación
           </h2>
           <h3 className="text-[#E5D196] text-[13px] font-bold uppercase tracking-[4px] opacity-90">
             Un solo pago, resultados para siempre
           </h3>
           <p className="text-white/80 text-[16px] leading-[1.65] font-normal max-w-xs mx-auto">
             Implementamos el sistema completo y lo dejamos funcionando: Método, Formación y Tecnología.
           </p>
        </div>

        {/* --- TARJETA DESTACADA (HEARTBEAT + SPINNING LED) --- */}
        <div className="group relative w-full animate-heartbeat">
            
            {/* 1. ROTATING LED BORDER LAYER (Behind Card) */}
            {/* Using a larger container clipped to rounded corners to show the spinning gradient as a border */}
            <div className="absolute -inset-[2px] rounded-[30px] overflow-hidden z-0">
                <div className="absolute top-[-150%] left-[-150%] w-[400%] h-[400%] animate-spin-slow" 
                     style={{
                         background: 'conic-gradient(transparent 0deg, transparent 80deg, #D4AF37 140deg, transparent 200deg)',
                         opacity: 1
                     }}>
                </div>
            </div>

            {/* 2. CARD CONTENT (On top) */}
            <div className="relative w-full rounded-[28px] bg-[#0E0E12] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] overflow-hidden border border-white/5 z-10">
                
                {/* Internal Overlay */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                {/* Pearl Reflection (Subtle & Static/Slow) */}
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-45 pointer-events-none opacity-30 blur-xl"></div>

                <div className="relative z-10 p-8 flex flex-col gap-6">
                    
                    {/* Card Header */}
                    <div className="flex flex-col items-center text-center gap-2 border-b border-white/5 pb-6">
                        <div className="flex items-center gap-3 mb-1">
                            <i className="fa-solid fa-crown text-[#D4AF37] text-xl drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"></i>
                            <span className="text-white font-bold text-lg tracking-wide uppercase">
                                SISTEMA COMPLETO
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                             <span className="text-3xl text-[#D4AF37] font-medium tracking-tight">150 €</span>
                             <span className="text-white/50 text-xs font-medium uppercase tracking-wider">(Pago único)</span>
                        </div>
                    </div>

                    {/* Bullets List */}
                    <ul className="flex flex-col gap-4">
                        {benefits.map((text, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 text-[#D4AF37] text-xs">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <span className="text-white/90 text-[15px] font-light leading-relaxed">
                                    <strong className="font-medium text-white">{text.split(":")[0]}:</strong> 
                                    <span className="text-white/70">{text.split(":")[1]}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="w-full flex justify-center pt-2">
            <a 
                href="https://wa.me/34641066377?text=Hola%2C%20estoy%20interesado%20en%20el%20sistema%20para%20conseguir%20rese%C3%B1as%20constantes%20en%20Google%20Maps.%20%C2%BFPodr%C3%ADas%20contarme%20c%C3%B3mo%20funciona%20y%20qu%C3%A9%20incluye%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative h-[56px] w-full max-w-xs rounded-full 
                  bg-[#060608] border border-[#D4AF37]/50 
                  text-[#D4AF37] text-[15px] font-bold uppercase tracking-widest
                  hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]
                  transition-all duration-300 ease-out
                  flex items-center justify-center gap-3
                  cursor-pointer no-underline
                "
            >
                <span className="relative z-10">
                   Quiero más reseñas
                </span>
            </a>
        </div>

      </div>
    </section>
  );
};