import { useState } from 'react';
import { Heart, Check } from 'lucide-react';
import { Button } from './ui/button';

export function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí podrías integrar con un backend o Google Forms
  };

  if (submitted) {
    return (
      <div id="confirmar" className="py-20 bg-gradient-to-b from-white to-[#FCE4EC]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl text-[#880E4F] mb-4">
                ¡Confirmación Recibida!
              </h3>
              <p className="text-[#880E4F]/70 mb-6">
                Gracias por confirmar tu asistencia. ¡Nos vemos pronto!
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="border-[#880E4F] text-[#880E4F] hover:bg-[#FCE4EC]"
              >
                Enviar otra confirmación
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="confirmar" className="py-20 bg-gradient-to-b from-white to-[#FCE4EC]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-[#880E4F] fill-[#880E4F] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl text-[#880E4F] mb-4">
              Confirma tu Asistencia
            </h2>
            <p className="text-[#880E4F]/70">
              Por favor completa el siguiente formulario antes del 30 de noviembre
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[#880E4F] mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCE4EC] focus:border-[#880E4F] focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[#880E4F] mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCE4EC] focus:border-[#880E4F] focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-[#880E4F] mb-3">
                  ¿Asistirás? *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-[#FCE4EC] rounded-xl cursor-pointer hover:border-[#880E4F] transition-colors">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      required
                      className="w-5 h-5 text-[#880E4F]"
                    />
                    <span className="text-[#880E4F]">Sí, asistiré con mucho gusto</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-[#FCE4EC] rounded-xl cursor-pointer hover:border-[#880E4F] transition-colors">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      className="w-5 h-5 text-[#880E4F]"
                    />
                    <span className="text-[#880E4F]">Lo siento, no podré asistir</span>
                  </label>
                </div>
              </div>

              {/* Number of guests */}
              <div>
                <label htmlFor="guests" className="block text-[#880E4F] mb-2">
                  Número de acompañantes
                </label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCE4EC] focus:border-[#880E4F] focus:outline-none transition-colors"
                >
                  <option value="0">Solo yo</option>
                  <option value="1">1 acompañante</option>
                  <option value="2">2 acompañantes</option>
                  <option value="3">3 acompañantes</option>
                </select>
              </div>

              {/* Dietary restrictions */}
              <div>
                <label htmlFor="dietary" className="block text-[#880E4F] mb-2">
                  Restricciones alimentarias o alergias
                </label>
                <textarea
                  id="dietary"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCE4EC] focus:border-[#880E4F] focus:outline-none transition-colors resize-none"
                  placeholder="Déjanos saber si tienes alguna restricción alimentaria..."
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#880E4F] mb-2">
                  Mensaje para los novios
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#FCE4EC] focus:border-[#880E4F] focus:outline-none transition-colors resize-none"
                  placeholder="Escribe un mensaje especial..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#880E4F] hover:bg-[#6A0B3E] text-white py-6 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Confirmar Asistencia
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
