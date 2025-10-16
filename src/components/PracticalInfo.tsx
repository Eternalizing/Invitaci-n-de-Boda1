import { Shirt, Gift, Hotel, Camera } from 'lucide-react';

export function PracticalInfo() {
  const infoCards = [
    {
      icon: Shirt,
      title: 'Dress Code',
      description: 'Formal / Etiqueta',
      detail: 'Sugerimos colores pasteles y elegantes para las damas, traje para los caballeros. Por favor evitar el color blanco, reservado para la novia ♥'
    },
    {
      icon: Gift,
      title: 'Mesa de Regalos',
      description: 'Tu presencia es nuestro mejor regalo',
      detail: 'Si deseas obsequiarnos algo, tenemos mesa de regalos en Liverpool y Amazon'
    },
    {
      icon: Hotel,
      title: 'Hospedaje',
      description: 'Hoteles cercanos',
      detail: 'Hotel Marriott, Hotel Fiesta Inn y Hotel City Express ofrecen tarifa especial'
    },
    {
      icon: Camera,
      title: 'Hashtag',
      description: '#MariaYCarlos2025',
      detail: 'Comparte tus fotos y videos usando nuestro hashtag oficial'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#880E4F] mb-4">
              Información Práctica
            </h2>
            <p className="text-[#880E4F]/70 max-w-2xl mx-auto">
              Todo lo que necesitas saber para disfrutar de nuestro día especial
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#FCE4EC] to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-[#880E4F] rounded-full mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-[#880E4F] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#880E4F] mb-2">
                    {card.description}
                  </p>
                  <p className="text-[#880E4F]/60 text-sm">
                    {card.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Important Note */}
          <div className="mt-12 bg-gradient-to-r from-[#FCE4EC] to-[#F8BBD0] rounded-2xl p-8 text-center">
            <p className="text-[#880E4F] text-lg">
              ⚠️ <strong>Importante:</strong> La ceremonia comenzará puntualmente a las 18:00 hrs. 
              Te recomendamos llegar con 15 minutos de anticipación.
            </p>
          </div>

          {/* Gift Registry Links */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.liverpool.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#880E4F] text-[#880E4F] px-8 py-4 rounded-full hover:bg-[#FCE4EC] transition-colors"
            >
              <Gift className="w-5 h-5" />
              Mesa Liverpool
            </a>
            <a
              href="https://www.amazon.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#880E4F] text-[#880E4F] px-8 py-4 rounded-full hover:bg-[#FCE4EC] transition-colors"
            >
              <Gift className="w-5 h-5" />
              Mesa Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
