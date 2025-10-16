import { Award, Target, Users } from "lucide-react";

export function InstructorSection() {
  const stats = [
    {
      number: "+1.000",
      label: "Tatuagens Fineline",
      icon: Target
    },
    {
      number: "5+",
      label: "Anos Especializados",
      icon: Award
    },
    {
      number: "100%",
      label: "Foco em Fineline",
      icon: Users
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-rosa-claro/5 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Informações da instrutora */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro">
                Aprenda com a <span className="text-rosa-medio">Especialista</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong className="text-rosa-escuro">[Nome da Instrutora]</strong> é especialista em tatuagem fineline 
                com mais de <strong className="text-rosa-escuro">1.000 trabalhos realizados</strong> e 5 anos dedicados 
                exclusivamente a esta técnica refinada.
              </p>
            </div>
            
            {/* Stats do portfólio */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-rosa-claro/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-rosa-claro to-rosa-medio rounded-full mx-auto mb-3 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-rosa-escuro" />
                  </div>
                  <div className="text-2xl font-bold text-rosa-escuro mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Especialização */}
            <div className="bg-gradient-to-r from-rosa-claro/30 to-rosa-medio/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-rosa-escuro mb-3">
                Especialização Comprovada
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Certificação em micropigmentação e tatuagem artística</li>
                <li>• Especialista em traços minimalistas e delicados</li>
                <li>• Portfólio extenso com mais de 1.000 fineline realizadas</li>
                <li>• Técnicas avançadas de precisão e durabilidade</li>
              </ul>
            </div>
          </div>
          
          {/* Foto da instrutora */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center border border-rosa-claro/30">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-rosa-claro rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-rosa-escuro" />
                  </div>
                  <p className="text-rosa-escuro font-semibold text-lg">Sua foto aqui</p>
                  <p className="text-rosa-medio text-sm">(instrutora especialista)</p>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 bg-rosa-escuro text-white rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-xs font-bold">⭐ Especialista Fineline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}