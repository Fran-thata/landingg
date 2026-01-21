import React, { useRef, useState, useEffect } from 'react';

const services = [
  {
    title: "Auditoría 360°",
    desc: "Análisis de tu reputación, competencia y potencial.",
    image: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768574403/WhatsApp_Image_2026-01-16_at_15.27.38_flwdxx.jpg"
  },
  {
    title: "El Método",
    desc: "Cuándo pedir la reseña y cómo frenar la negativa.",
    image: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768579053/WhatsApp_Image_2026-01-16_at_16.23.51_1_gbg30e.jpg"
  },
  {
    title: "Formación Pro",
    desc: "Capacitación rápida para el dueño y el equipo.",
    image: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768579052/WhatsApp_Image_2026-01-16_at_16.23.51_u1s84z.jpg"
  },
  {
    title: "Implementación",
    desc: "Adaptación total a tu operativa de barra o mesa.",
    image: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768574403/WhatsApp_Image_2026-01-16_at_15.29.57_ygpfxv.jpg"
  },
  {
    title: "Kit Tecnológico",
    desc: "Soportes físicos con tecnología NFC y QR.",
    image: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768579052/WhatsApp_Image_2026-01-16_at_16.23.50_2_ym841k.jpg"
  },
  {
    title: "Soporte Directo",
    desc: "Acompañamiento total en la puesta en marcha.",
    image: "https://res.cloudinary.com/ddpujsrsg/image/upload/v1768579052/WhatsApp_Image_2026-01-16_at_16.23.50_1_qqtxlc.jpg"
  }
];

export const ServicesCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll Loop: Every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        // If at the end, go back to 0 (move left), else go next (move right)
        return current === services.length - 1 ? 0 : current + 1;
      });
    }, 3000); // Changed to 3000ms (3 seconds)

    return () => clearInterval(interval);
  }, []);

  // Trigger scroll whenever activeIndex changes (either by auto-scroll or dot click)
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  // Handle manual scroll to update dots (optional, keeping for robustness if user swipes)
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const center = scrollLeft + (width / 2);
      const totalWidth = scrollRef.current.scrollWidth;
      const progress = center / totalWidth;
      const newIndex = Math.floor(progress * services.length);
      const safeIndex = Math.min(Math.max(newIndex, 0), services.length - 1);
      
      // Only update if significantly different to avoid jitter during auto-scroll
      if (Math.abs(safeIndex - activeIndex) > 1) {
         // setActiveIndex(safeIndex); // Optional: Uncomment to sync manual scroll state
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardNodes = scrollRef.current.children;
      // Index + 1 because of the first spacer div
      const actualIndex = index + 1;
      
      if (cardNodes[actualIndex]) {
        const card = cardNodes[actualIndex] as HTMLElement;
        const containerWidth = scrollRef.current.offsetWidth;
        const cardWidth = card.offsetWidth;
        
        const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
        
        scrollRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="bg-black py-20 relative overflow-hidden border-t border-white/5">
      {/* Subtle Golden Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none z-0"></div>

      {/* --- HEADER SECTION --- */}
      <div className="relative z-20 text-center mb-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Todo listo desde el primer día
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-premium-gold mb-6">
          Solución llave en mano, no piezas sueltas
        </h3>
        <p className="text-white text-lg font-medium max-w-2xl mx-auto leading-relaxed">
          No solo entregamos accesorios. Instalamos un sistema que funciona y se integra en tu operativa.
        </p>
      </div>

      {/* --- SWIPER CONTAINER --- */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar relative z-10 items-center"
        style={{ scrollPaddingLeft: '2rem', scrollPaddingRight: '2rem' }}
      >
        {/* Spacer for centering first item visually */}
        <div className="shrink-0 w-2 md:w-[calc(50%-150px)]"></div>
        
        {services.map((service, index) => (
          <div 
            key={index}
            className={`
              relative shrink-0 snap-center 
              w-[75vw] md:w-[300px] h-[420px] 
              rounded-2xl overflow-hidden 
              border border-premium-gold/30 
              transition-all duration-500 ease-out
              group cursor-pointer
              ${index === activeIndex ? 'scale-100 opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'scale-95 opacity-60'}
            `}
            onClick={() => setActiveIndex(index)}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${service.image}')` }}
            ></div>

            {/* Dark Overlay has been REMOVED as requested to keep images "normal" */}
            
            {/* Content Content - Added text shadow to ensure readability on light images */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start text-left">
              <div className="transform translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {service.title}
                </h3>
                <p className="text-white text-sm font-medium leading-relaxed opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Spacer for centering last item */}
        <div className="shrink-0 w-2 md:w-[calc(50%-150px)]"></div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-2 relative z-20">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              rounded-full transition-all duration-300 
              ${index === activeIndex 
                ? 'w-8 h-1.5 bg-premium-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};