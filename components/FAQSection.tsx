import React, { useState } from 'react';

const faqs = [
  {
    id: "01",
    question: "“Ya tengo reseñas, ¿para qué necesito esto?”",
    answer: "No vendemos reseñas, vendemos un sistema de captación. Sin un método, tu crecimiento depende del azar. Con esto, aseguras que cada buen servicio se convierta en un activo digital."
  },
  {
    id: "02",
    question: "“Mi negocio ya funciona sin Google Maps”",
    answer: "Funciona hoy por ubicación, pero el cliente nuevo compara en el móvil antes de entrar. Si tu competencia tiene mejor puntuación, estás perdiendo dinero que ni siquiera llegas a ver."
  },
  {
    id: "03",
    question: "“He probado a pedir reseñas y no funcionó”",
    answer: "Pedir por compromiso incomoda al equipo y al cliente. El secreto no es pedir más, sino pedir mejor: en el momento exacto y de forma natural."
  },
  {
    id: "04",
    question: "“En mi zona la gente no deja reseñas”",
    answer: "El cliente no deja reseñas porque le da pereza pensar qué escribir. Nuestro sistema le da ideas clave y facilita el proceso para que se publique en 10 segundos."
  },
  {
    id: "05",
    question: "“Ahora no es buen momento, lo veré más adelante”",
    answer: "Cada semana que pospones el sistema es una semana que tu competencia te saca ventaja. Mientras lo piensas, otros están blindando su reputación."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 px-4 bg-[#060608] overflow-hidden flex flex-col items-center">
      
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Base Gradient: Very deep dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060608] to-[#0A0A0C] z-0"></div>

      {/* 2. Static Glow Center */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[#D4AF37] opacity-[0.03] blur-[100px] pointer-events-none z-0"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-10">
        
        {/* H2 Title - Compact */}
        <div className="text-left md:text-center px-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F0F0F0] leading-tight tracking-tight">
            Dudas habituales antes de decidir
          </h2>
        </div>

        {/* List Container - Compact Gap */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.id} 
                className={`
                  relative group w-full rounded-2xl transition-all duration-500 cursor-pointer border
                  ${isOpen 
                    ? 'bg-[#0E0E12] border-[#D4AF37]/30 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]' 
                  }
                `}
                onClick={() => toggleFAQ(index)}
              >
                {/* Active Glow Effect (Behind Number) */}
                {isOpen && (
                   <div className="absolute top-0 left-0 w-[60px] h-full bg-[#D4AF37]/10 blur-xl rounded-l-2xl pointer-events-none"></div>
                )}

                <div className="relative z-10 p-5 md:p-6 flex items-start gap-0">
                  
                  {/* --- NUMBER REMOVED AS REQUESTED --- */}

                  {/* --- CONTENT --- */}
                  <div className="flex-1">
                     <div className="flex justify-between items-start gap-4">
                       
                       {/* The Pill Highlight - Slightly smaller text for compactness */}
                       <div className={`
                          transition-all duration-300 rounded-[999px] px-[12px] py-[4px] border
                          ${isOpen 
                             ? 'bg-[rgba(201,162,74,0.14)] border-[rgba(201,162,74,0.35)]' 
                             : 'bg-transparent border-transparent pl-0'
                          }
                       `}>
                         <h3 className={`
                            text-[15px] md:text-[16px] font-semibold leading-snug tracking-wide transition-colors duration-300
                            ${isOpen ? 'text-[#E5D196]' : 'text-white/90'}
                         `}>
                           {item.question}
                         </h3>
                       </div>

                       {/* Toggle Icon (Chevron) */}
                       <div className={`shrink-0 mt-1 transition-all duration-500 ${isOpen ? 'rotate-180 text-[#D4AF37]' : 'rotate-0 text-white/30'}`}>
                         <i className="fa-solid fa-chevron-down text-xs"></i>
                       </div>
                     </div>

                     {/* Answer Body */}
                     <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0 pt-0'}`}>
                       <div className="overflow-hidden">
                         <p className="text-white/70 text-[15px] leading-[1.6] font-medium pl-1 md:pl-3 border-l-2 border-[#D4AF37]/20">
                           {item.answer}
                         </p>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BUTTON - Compact */}
        <div className="w-full flex justify-center mt-4">
            <a 
                href="https://wa.me/34641066377?text=Hola%2C%20estoy%20interesado%20en%20el%20sistema%20para%20conseguir%20rese%C3%B1as%20constantes%20en%20Google%20Maps.%20%C2%BFPodr%C3%ADas%20contarme%20c%C3%B3mo%20funciona%20y%20qu%C3%A9%20incluye%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  h-[50px] px-8 rounded-full 
                  bg-gradient-to-r from-[#D4AF37] to-[#B48F26]
                  text-black text-[14px] font-extrabold uppercase tracking-widest
                  hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]
                  transition-all duration-300 ease-out
                  shadow-lg
                  flex items-center justify-center
                  cursor-pointer no-underline
                "
            >
               Quiero mejorar mis reseñas
            </a>
        </div>

      </div>
    </section>
  );
};