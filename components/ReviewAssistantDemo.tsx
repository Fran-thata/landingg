import React, { useState } from 'react';
import { generateReviewResponse } from '../services/geminiService';
import { Button } from './Button';

export const ReviewAssistantDemo: React.FC = () => {
  const [review, setReview] = useState("La comida estuvo deliciosa, pero el servicio fue un poco lento al principio. Sin embargo, el ambiente lo compensa.");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState<'professional' | 'grateful' | 'apologetic'>('grateful');

  const handleGenerate = async () => {
    if (!review) return;
    setLoading(true);
    try {
      const result = await generateReviewResponse(review, tone);
      setResponse(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-neutral-900 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-block text-premium-gold text-sm font-bold uppercase tracking-widest mb-4">
              Inteligencia Artificial Integrada
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Responde en segundos,<br />
              <span className="text-white">no en horas.</span>
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Nuestro asistente "AI Maître" analiza el sentimiento de tus clientes y redacta la respuesta perfecta para Google Maps o TripAdvisor. Mantén tu reputación impecable sin perder tiempo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-premium-gold/10 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-bolt text-premium-gold"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Rapidez Absoluta</h4>
                  <p className="text-sm text-white mt-1">Genera respuestas contextuales al instante.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-premium-gold/10 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-sliders text-premium-gold"></i>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Tono Personalizable</h4>
                  <p className="text-sm text-white mt-1">Profesional, agradecido o disculpándose según la situación.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive UI Card */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 md:p-8 shadow-2xl relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              {/* Input Area */}
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Reseña del Cliente (Simulación)
                </label>
                <textarea 
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded p-4 text-white focus:border-premium-gold focus:outline-none transition-colors h-32 resize-none text-sm leading-relaxed placeholder-white/50"
                  placeholder="Pega aquí una reseña de ejemplo..."
                />
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-3">
                {(['professional', 'grateful', 'apologetic'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wide border transition-all ${
                      tone === t 
                        ? 'bg-premium-gold text-premium-dark border-premium-gold' 
                        : 'bg-transparent text-white border-neutral-700 hover:border-white'
                    }`}
                  >
                    {t === 'professional' ? 'Profesional' : t === 'grateful' ? 'Agradecido' : 'Disculpa'}
                  </button>
                ))}
              </div>

              {/* Action */}
              <Button onClick={handleGenerate} disabled={loading} fullWidth className="disabled:opacity-50">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-notch fa-spin"></i> Generando con Gemini...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Generar Respuesta
                  </span>
                )}
              </Button>

              {/* Output Area */}
              {response && (
                <div className="mt-6 pt-6 border-t border-neutral-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-premium-gold uppercase tracking-wider">
                      Respuesta Sugerida
                    </label>
                    <button 
                      onClick={() => navigator.clipboard.writeText(response)}
                      className="text-xs text-white hover:text-premium-gold transition-colors"
                    >
                      <i className="fa-regular fa-copy mr-1"></i> Copiar
                    </button>
                  </div>
                  <div className="bg-neutral-900/50 p-4 rounded border-l-2 border-premium-gold text-white text-sm leading-relaxed italic">
                    "{response}"
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};