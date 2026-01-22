import React from 'react';

export const VideoSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050505] py-12 md:py-24 px-5 md:px-6 flex justify-center overflow-hidden border-b border-white/5">
      
      {/* Background Ambience - Vertical Glow behind the "phone" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-premium-gold/10 blur-[90px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 w-full flex justify-center">
        {/* Phone-like Container (TikTok Format) - Width constrained to phone size */}
        <div className="relative w-full max-w-[340px] rounded-[32px] p-[1px] bg-gradient-to-b from-white/20 via-premium-gold/30 to-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
            
            {/* Inner Content - Full Bleed Vertical Video */}
            <div className="relative rounded-[31px] overflow-hidden bg-black shadow-2xl aspect-[9/16]">
                <video 
                    className="w-full h-full object-contain block"
                    autoPlay
                    loop
                    playsInline
                    controls
                    preload="auto"
                >
                    <source src="https://res.cloudinary.com/ddpujsrsg/video/upload/v1769117514/WhatsApp_Video_2026-01-22_at_21.24.32_gaplop.mp4" type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
                
                {/* Subtle inner ring for glass effect */}
                <div className="absolute inset-0 rounded-[31px] border border-white/5 pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};