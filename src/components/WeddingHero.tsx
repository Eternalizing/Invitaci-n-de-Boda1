import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function WeddingHero() {
  const weddingDate = new Date('2025-12-20T18:00:00'); // Ajuste a data do casamento aqui
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FCE4EC] to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #880E4F 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Save the Date */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
            <Heart className="w-4 h-4 text-[#880E4F] fill-[#880E4F]" />
            <span className="text-[#880E4F] uppercase tracking-wider text-sm">Guarda la fecha</span>
            <Heart className="w-4 h-4 text-[#880E4F] fill-[#880E4F]" />
          </div>

          {/* Names */}
          <h1 className="text-5xl md:text-7xl text-[#880E4F] mb-4">
            María & Carlos
          </h1>
          
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-20 bg-[#880E4F]/30"></div>
            <Heart className="w-8 h-8 text-[#880E4F] fill-[#880E4F]" />
            <div className="h-px w-20 bg-[#880E4F]/30"></div>
          </div>

          {/* Date */}
          <p className="text-2xl md:text-3xl text-[#880E4F]/80 mb-12">
            20 de Diciembre, 2025
          </p>

          {/* Countdown */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <p className="text-[#880E4F]/70 mb-6 uppercase tracking-wider">
              Faltan
            </p>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {[
                { value: timeLeft.days, label: 'Días' },
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Minutos' },
                { value: timeLeft.seconds, label: 'Segundos' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col">
                  <div className="bg-gradient-to-br from-[#880E4F] to-[#C2185B] text-white rounded-2xl p-4 md:p-6 shadow-lg">
                    <span className="text-3xl md:text-5xl block tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[#880E4F]/70 mt-3 text-sm md:text-base uppercase tracking-wide">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="#confirmar"
            className="inline-block bg-[#880E4F] hover:bg-[#6A0B3E] text-white px-8 md:px-12 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Confirmar Asistencia
          </a>
        </div>
      </div>

      {/* Decorative Hearts */}
      <div className="absolute top-20 left-10 text-[#FCE4EC] opacity-20">
        <Heart className="w-16 h-16 fill-current" />
      </div>
      <div className="absolute bottom-20 right-10 text-[#FCE4EC] opacity-20">
        <Heart className="w-20 h-20 fill-current" />
      </div>
      <div className="absolute top-1/3 right-20 text-[#FCE4EC] opacity-20">
        <Heart className="w-12 h-12 fill-current" />
      </div>
    </div>
  );
}
