import { Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OurStory() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#FCE4EC] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Heart className="w-12 h-12 text-[#880E4F] fill-[#880E4F] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl text-[#880E4F] mb-4">
              Nuestra Historia
            </h2>
            <p className="text-[#880E4F]/70">
              Un amor que comenzó hace 5 años
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* First Meeting */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649228167407-602c5437da82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBmbG93ZXJzfGVufDF8fHx8MTc2MDQ5MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Primer encuentro"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block bg-[#880E4F] text-white px-4 py-2 rounded-full text-sm mb-4">
                  2020
                </div>
                <h3 className="text-2xl text-[#880E4F] mb-3">
                  Nuestro Primer Encuentro
                </h3>
                <p className="text-[#880E4F]/70">
                  Nos conocimos en una cafetería un domingo por la tarde. Desde el primer momento supimos que había algo especial entre nosotros. La conversación fluyó naturalmente y las horas pasaron volando.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="h-px w-20 bg-[#880E4F]/30"></div>
              <Heart className="w-6 h-6 text-[#880E4F] fill-[#880E4F] mx-4" />
              <div className="h-px w-20 bg-[#880E4F]/30"></div>
            </div>

            {/* First Date */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649228167407-602c5437da82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBmbG93ZXJzfGVufDF8fHx8MTc2MDQ5MjUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Primera cita"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="inline-block bg-[#880E4F] text-white px-4 py-2 rounded-full text-sm mb-4">
                  2022
                </div>
                <h3 className="text-2xl text-[#880E4F] mb-3">
                  La Propuesta
                </h3>
                <p className="text-[#880E4F]/70">
                  En un viaje a la playa, durante una hermosa puesta de sol, Carlos se arrodilló y le pidió a María que se casara con él. Por supuesto, ella dijo que sí entre lágrimas de felicidad.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center">
              <div className="h-px w-20 bg-[#880E4F]/30"></div>
              <Heart className="w-6 h-6 text-[#880E4F] fill-[#880E4F] mx-4" />
              <div className="h-px w-20 bg-[#880E4F]/30"></div>
            </div>

            {/* Wedding */}
            <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
              <div className="inline-block bg-[#880E4F] text-white px-4 py-2 rounded-full text-sm mb-4">
                2025
              </div>
              <h3 className="text-2xl text-[#880E4F] mb-3">
                ¡Nos Casamos!
              </h3>
              <p className="text-[#880E4F]/70 max-w-2xl mx-auto">
                Y ahora, después de 5 años juntos, estamos listos para dar el siguiente paso en nuestra historia de amor. Queremos compartir este momento mágico contigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
