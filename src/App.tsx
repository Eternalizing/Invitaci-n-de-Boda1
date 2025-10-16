import { WeddingHero } from './components/WeddingHero';
import { PersonalInvitation } from './components/PersonalInvitation';
import { OurStory } from './components/OurStory';
import { EventDetails } from './components/EventDetails';
import { PracticalInfo } from './components/PracticalInfo';
import { RSVPSection } from './components/RSVPSection';
import { WeddingWhatsApp } from './components/WeddingWhatsApp';

export default function App() {
  // Personaliza estos datos para cada invitado
  const guestInfo = {
    names: "Juan Carlos y María",
    relationship: "nuestros queridos amigos desde la universidad",
    message: "Desde que nos conocimos hace 10 años en la universidad, han sido parte fundamental de nuestras vidas. Hemos compartido tantos momentos especiales juntos: desde largas noches de estudio hasta viajes inolvidables. Su amistad ha sido un regalo precioso y no podemos imaginar este día tan importante sin ustedes a nuestro lado. Queremos que sean testigos de nuestro amor y celebren con nosotros el inicio de esta nueva etapa."
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Countdown */}
      <WeddingHero />
      
      {/* Personal Invitation */}
      <PersonalInvitation
        guestNames={guestInfo.names}
        relationship={guestInfo.relationship}
        personalMessage={guestInfo.message}
      />
      
      {/* Our Story */}
      <OurStory />
      
      {/* Event Details */}
      <EventDetails />
      
      {/* Practical Information */}
      <PracticalInfo />
      
      {/* RSVP Section */}
      <RSVPSection />
      
      {/* WhatsApp Float Button */}
      <WeddingWhatsApp />
      
      {/* Simple Footer */}
      <footer className="bg-[#880E4F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">María & Carlos</p>
          <p className="text-white/70">20 de Diciembre, 2025</p>
          <p className="text-white/50 text-sm mt-4">
            Con amor, nos casamos ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
