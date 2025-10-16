import { MapPin, Clock, Church, Utensils } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EventDetails() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#880E4F] mb-4">
              Detalles del Evento
            </h2>
            <p className="text-[#880E4F]/70 max-w-2xl mx-auto">
              Nos encantaría que nos acompañes en este día tan especial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Ceremony */}
            <div className="bg-gradient-to-br from-[#FCE4EC] to-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-[#880E4F] rounded-full mb-6">
                <Church className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#880E4F] mb-4">Ceremonia</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#880E4F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#880E4F]/90">18:00 hrs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#880E4F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#880E4F]/90">Iglesia Santa María</p>
                    <p className="text-[#880E4F]/60 text-sm mt-1">
                      Av. Principal 123, Ciudad
                    </p>
                  </div>
                </div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 text-[#880E4F] hover:text-[#6A0B3E] transition-colors"
              >
                Ver en mapa →
              </a>
            </div>

            {/* Reception */}
            <div className="bg-gradient-to-br from-[#FCE4EC] to-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 bg-[#880E4F] rounded-full mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#880E4F] mb-4">Recepción</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#880E4F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#880E4F]/90">20:00 hrs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#880E4F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#880E4F]/90">Salón de Eventos El Jardín</p>
                    <p className="text-[#880E4F]/60 text-sm mt-1">
                      Calle de las Flores 456, Ciudad
                    </p>
                  </div>
                </div>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 text-[#880E4F] hover:text-[#6A0B3E] transition-colors"
              >
                Ver en mapa →
              </a>
            </div>
          </div>

          {/* Venue Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1675048524538-9d0c531eaed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc2MDUwNTc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Venue"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
