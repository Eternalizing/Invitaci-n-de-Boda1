import { Heart, Users } from 'lucide-react';

interface PersonalInvitationProps {
  guestNames: string; // e.g., "Juan Carlos y María"
  relationship: string; // e.g., "nuestros queridos amigos de la universidad"
  personalMessage: string; // e.g., "Desde que nos conocimos hace 10 años, han sido parte fundamental de nuestras vidas..."
}

export function PersonalInvitation({ 
  guestNames, 
  relationship, 
  personalMessage 
}: PersonalInvitationProps) {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-[#FCE4EC]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-[#FCE4EC]">
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#880E4F] to-[#C2185B] rounded-full mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>

            {/* Greeting */}
            <div className="text-center mb-8">
              <p className="text-[#880E4F]/70 text-lg mb-2">
                Con todo nuestro cariño, invitamos a
              </p>
              <h2 className="text-3xl md:text-4xl text-[#880E4F] mb-4">
                {guestNames}
              </h2>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#880E4F]/30"></div>
                <Heart className="w-6 h-6 text-[#880E4F] fill-[#880E4F]" />
                <div className="h-px w-12 bg-[#880E4F]/30"></div>
              </div>
            </div>

            {/* Relationship */}
            <div className="text-center mb-6">
              <p className="text-[#880E4F] text-lg italic">
                {relationship}
              </p>
            </div>

            {/* Personal Message */}
            <div className="bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]/30 rounded-2xl p-6 md:p-8">
              <p className="text-[#880E4F]/80 leading-relaxed text-center">
                {personalMessage}
              </p>
            </div>

            {/* Closing */}
            <div className="text-center mt-8">
              <p className="text-[#880E4F]/70">
                Sería un honor contar con su presencia en este momento tan importante para nosotros
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Heart className="w-5 h-5 text-[#880E4F] fill-[#880E4F]" />
                <p className="text-[#880E4F]">María & Carlos</p>
                <Heart className="w-5 h-5 text-[#880E4F] fill-[#880E4F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
