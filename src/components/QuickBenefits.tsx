import { Users, MapPin, Target, Clock } from "lucide-react";

export function QuickBenefits() {
  const benefits = [
    {
      icon: Users,
      title: "Para esteticistas e iniciantes",
      description: "Método exclusivo para todos os níveis",
      color: "from-rosa-claro to-rosa-medio"
    },
    {
      icon: MapPin,
      title: "Curso 100% presencial",
      description: "Aprendizado com acompanhamento direto",
      color: "from-rosa-medio to-rosa-escuro"
    },
    {
      icon: Target,
      title: "Prática supervisionada",
      description: "Sua primeira tattoo real garantida",
      color: "from-rosa-escuro to-vinho"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-rosa-claro/10 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rosa-claro/50 rounded-full px-6 py-2 mb-6">
            <Clock className="w-5 h-5 text-rosa-escuro" />
            <span className="text-rosa-escuro font-medium">Por que escolher nosso curso?</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center space-y-6 p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rosa-claro/20">
              <div className={`mx-auto w-24 h-24 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 group-hover:scale-110`}>
                <benefit.icon className="w-12 h-12 text-white" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-bold text-rosa-escuro text-xl">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className={`w-16 h-1 bg-gradient-to-r ${benefit.color} rounded-full mx-auto opacity-60`}></div>
            </div>
          ))}
        </div>
        
        {/* Trust bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
              <span>✨ Método exclusivo</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
              <span>🏆 +300 alunas formadas</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
              <span>⭐ 4.9/5 de satisfação</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}