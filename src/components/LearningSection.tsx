import { CheckCircle, Users, Target, Award, Sparkles } from "lucide-react";

export function LearningSection() {
  const learningItems = [
    {
      icon: CheckCircle,
      title: "Técnica Fineline Profissional",
      description: "Aprenda os fundamentos da microtatuagem fineline, desde o preparo da pele até a finalização perfeita",
      highlight: "Base técnica sólida"
    },
    {
      icon: Target,
      title: "Desenhos Minimalistas e Elegantes",
      description: "Domine os traços precisos e delicados que fazem a diferença entre uma tatuagem comum e uma obra de arte",
      highlight: "Precisão artística"
    },
    {
      icon: Users,
      title: "Atendimento e Captação de Clientes",
      description: "Estratégias para atrair clientes que valorizam qualidade e pagam bem por trabalhos diferenciados",
      highlight: "Marketing eficiente"
    },
    {
      icon: Award,
      title: "Precificação e Posicionamento",
      description: "Como precificar seus serviços para faturar alto e se posicionar como referência no mercado",
      highlight: "Rentabilidade máxima"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-rosa-claro/5 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-rosa-medio rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-rosa-escuro rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-rosa-claro/50 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-rosa-escuro" />
            <span className="text-rosa-escuro font-medium">Conteúdo do Curso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            O que você vai <span className="text-rosa-medio">Aprender</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Um método completo que vai da técnica básica até o posicionamento profissional no mercado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {learningItems.map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-rosa-claro/20 relative overflow-hidden">
              {/* Background gradient sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rosa-claro/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="flex items-start space-x-6 relative">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-rosa-claro to-rosa-medio rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110">
                    <item.icon className="w-8 h-8 text-rosa-escuro" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="text-sm text-rosa-medio font-semibold mb-2">{item.highlight}</div>
                    <h3 className="text-xl font-bold text-rosa-escuro mb-3">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="flex items-center space-x-2 text-sm text-rosa-escuro">
                    <div className="w-8 h-1 bg-gradient-to-r from-rosa-medio to-rosa-escuro rounded-full"></div>
                    <span className="font-medium">Módulo {index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-rosa-claro/30 to-rosa-medio/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-rosa-escuro mb-4">
              Bonus Exclusivo
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Além de todo o conteúdo técnico, você receberá um <strong className="text-rosa-escuro">guia completo de negócios</strong> com templates, contratos, planilhas de precificação e estratégias de marketing digital para microtatuagem.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-rosa-escuro font-medium">
              <span>📋 Templates de contratos</span>
              <span>💰 Planilha de precificação</span>
              <span>📱 Kit de marketing digital</span>
              <span>🎯 Estratégias de captação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}