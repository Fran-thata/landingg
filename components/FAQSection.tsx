import React, { useState } from 'react';

const faqs = [
  {
    id: "01",
    question: "“Ya tengo reseñas, ¿qué diferencia va a marcar este sistema?”",
    answer: "Tener reseñas no es suficiente; necesitas frescura y frecuencia. Google prioriza los negocios con actividad reciente. Este sistema no solo suma cantidad, sino que construye una autoridad imparable que te mantiene siempre por encima de tu competencia."
  },
  {
    id: "02",
    question: "“Mi negocio ya funciona, ¿por qué debería priorizar Google Maps?”",
    answer: "Funcionar no es lo mismo que dominar. Estar fuera de los tres primeros resultados de Maps es regalarle clientes diarios a tu competencia. No es solo visibilidad, es asegurar tu cuota de mercado frente a los que ya están buscando lo que tú ofreces."
  },
  {
    id: "03",
    question: "“He probado a pedir reseñas y no funcionó”",
    answer: "Pedir reseñas manualmente es incómodo y poco efectivo porque genera fricción. Este sistema elimina el esfuerzo: el cliente solo tiene que acercar su móvil. Convertimos una intención olvidada en un activo real para tu negocio en segundos."
  },
  {
    id: "04",
    question: "“¿Realmente mis clientes se van a tomar la molestia de escribir?”",
    answer: "El cliente no escribe porque sea difícil, sino por falta de inmediatez. Al eliminar los pasos intermedios (buscar el negocio, abrir la ficha, etc.), facilitas que la satisfacción del momento se transforme en una reseña de 5 estrellas al instante."
  },
  {
    id: "05",
    question: "“¿Qué pasa si decido posponerlo para más adelante?”",
    answer: "Cada día que esperas, tu competencia acumula una ventaja reputacional que luego será mucho más cara y difícil de remontar. Posponerlo es permitir que otros se queden con los clics que hoy deberían ser tuyos. La reputación digital no se compra, se construye con tiempo."
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
            Preguntas frecuentes de profesionales decididos
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
                href="https://wa.me/34643871290?text=Hola%2C%20estoy%20interesado%20en%20un%20sistema%20para%20conseguir%20rese%C3%B1as%20constantes%20en%20Google%20Maps.%20%C2%BFC%C3%B3mo%20funciona%20y%20qu%C3%A9%20incluye%3F"
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
                  animate-sway
                "
            >
               Quiero mejorar mis reseñas
            </a>
        </div>

      </div>
    </section>
  );
};