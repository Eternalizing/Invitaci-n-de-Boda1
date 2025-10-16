import { MessageCircle } from 'lucide-react';

export function WeddingWhatsApp() {
  const whatsappNumber = '5512345678'; // Ajusta el número aquí
  const message = encodeURIComponent('Hola! Tengo una pregunta sobre la boda de María y Carlos');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Tienes dudas? Escríbenos
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
    </a>
  );
}
