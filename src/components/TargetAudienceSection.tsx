import { User, Briefcase, Heart, Sparkles } from "lucide-react";

export function TargetAudienceSection() {
  const targetProfiles = [
    {
      icon: Heart,
      title: "Esteticistas",
      description: "Profissionais da beleza que querem agregar um serviço de alto valor e diferencial competitivo",
      benefits: ["Aumento da receita", "Fidelização de clientes", "Diferencial no mercado"],
      color: "from-rosa-claro to-rosa-medio"
    },
    {
      icon: User,
      title: "Iniciantes Completas",
      description: "Pessoas sem experiência que querem ingressar no mercado da estética com uma especialização valorizada",
      benefits: ["Carreira do zero", "Mercado aquecido", "Renda extra garantida"],
      color: "from-rosa-medio to-rosa-escuro"
    },
    {
      icon: Briefcase,
      title: "Empreendedoras",
      description: "Mulheres que buscam uma nova fonte de renda ou querem abrir seu próprio negócio na área da beleza",
      benefits: ["Negócio próprio", "Flexibilidade de horários", "Alto retorno financeiro"],
      color: "from-rosa-escuro to-vinho"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-rosa-claro/10 via-white to-rosa-medio/5 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-rosa-escuro rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-rosa-medio rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-rosa-claro/50 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-rosa-escuro" />
            <span className="text-rosa-escuro font-medium">Público-alvo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            Para quem é o <span className="text-rosa-medio">Curso</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Desenvolvido especialmente para mulheres que querem transformar suas carreiras e conquistar independência financeira
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {targetProfiles.map((profile, index) => (
            <div key={index} className="group text-center space-y-6 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rosa-claro/20 relative overflow-hidden">
              {/* Background gradient sutil */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${profile.color} opacity-10 rounded-full blur-2xl`}></div>
              
              <div className="relative">
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${profile.color} rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110`}>
                  <profile.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-rosa-escuro">
                  {profile.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {profile.description}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-rosa-escuro text-lg">Benefícios:</h4>
                <div className="space-y-2">
                  {profile.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center justify-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative bottom line */}
              <div className={`h-1 bg-gradient-to-r ${profile.color} rounded-full mx-8 opacity-60`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-rosa-claro/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-rosa-escuro mb-6">
              ✨ Não importa seu nível de experiência
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-rosa-claro rounded-full mx-auto flex items-center justify-center">
                  <span className="text-rosa-escuro font-bold">0</span>
                </div>
                <div className="text-sm font-medium text-rosa-escuro">Experiência Necessária</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-rosa-medio rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="text-sm font-medium text-rosa-escuro">Dias de Curso</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-rosa-escuro rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold">∞</span>
                </div>
                <div className="text-sm font-medium text-rosa-escuro">Potencial de Faturamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}