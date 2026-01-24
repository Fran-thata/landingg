import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90svh] w-full flex items-center justify-start px-5 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image - Static, no animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-premium-dark/95 via-premium-dark/80 to-premium-dark/40" />
      {/* Radial overlay for center focus - reduced opacity for left align */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-premium-dark via-transparent to-transparent opacity-60" />

      {/* Content - LEFT ALIGNED LAYOUT */}
      <div className="relative z-20 w-full max-w-4xl flex flex-col items-start text-left pt-16 md:pt-24">
        
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-premium-gold text-[10px] md:text-sm font-bold uppercase tracking-[0.15em] bg-premium-gold/10 px-4 py-2 rounded border border-premium-gold/30 backdrop-blur-sm whitespace-normal shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <i className="fa-solid fa-star shrink-0"></i>
            <span>Método probado para hostelería</span>
          </div>
        </div>
        
        {/* H1 Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-[1.1] text-white mb-8 hyphens-none break-normal">
          Convierte clientes <br className="block md:hidden" />
          satisfechos en <br className="block md:hidden" />
          <span className="text-premium-gold drop-shadow-lg">Reseñas de 5★</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl leading-relaxed text-white mb-12 max-w-2xl font-light">
          Sistema completo para conseguir reseñas constantes y más visibilidad en Google Maps.
        </p>

        {/* Features List - LEFT ALIGNED & LARGE TEXT */}
        <div className="flex flex-col items-start gap-5 mb-12 w-full text-left">
          {[
            { 
              icon: "fa-square-check", 
              text: "Reseñas constantes." 
            },
            { 
              icon: "fa-shield-halved", 
              text: "Previene reseñas negativas." 
            },
            { 
              icon: "fa-map-location-dot", 
              text: "Ficha fuerte en Google Maps." 
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <i className={`fa-solid ${item.icon} text-premium-gold text-2xl md:text-3xl shrink-0 filter drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]`}></i>
              <span className="text-white text-lg md:text-2xl font-semibold tracking-tight leading-relaxed">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* --- CINTA GOOGLE (MARQUEE) --- */}
        <div className="w-full max-w-2xl mb-12">
            <div className="relative w-full overflow-hidden bg-white/5 border border-white/10 rounded-xl py-4 backdrop-blur-md shadow-2xl">
              <div className="flex animate-marquee-hero whitespace-nowrap items-center">
                {/* Items duplicados para loop infinito */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex items-center gap-4 mx-6 md:gap-8 md:mx-8">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-3.5 h-3.5" />
                       </div>
                       <span className="font-bold text-white text-base">Google</span>
                    </div>
                    <div className="flex items-center gap-1">
                       <div className="text-[#F4B400] text-sm flex gap-0.5 shrink-0 filter drop-shadow-sm">
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                         <i className="fa-solid fa-star"></i>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-premium-dark/50 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-premium-dark/50 to-transparent z-10"></div>
            </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center md:items-start gap-4 pb-12 w-full">
          <Button 
            href="https://wa.me/34643871290?text=Hola%2C%20estoy%20interesado%20en%20el%20sistema%20para%20conseguir%20rese%C3%B1as%20constantes%20en%20Google%20Maps.%20%C2%BFPodr%C3%ADas%20contarme%20c%C3%B3mo%20funciona%20y%20qu%C3%A9%20incluye%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-5 text-base md:text-lg shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            QUIERO MÁS RESEÑAS
          </Button>
          <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase text-center md:text-left">
            Conversación breve. Sin presión.
          </span>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee-hero {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-hero {
          animation: marquee-hero 20s linear infinite;
        }
      `}</style>
    </section>
  );
};