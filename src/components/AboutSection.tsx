import { Award, Target, Clock } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Target,
      title: "Técnica Especializada",
      description: "Domine a arte dos traços ultra-finos e precisos"
    },
    {
      icon: Clock,
      title: "Aprendizado Rápido", 
      description: "2 dias intensivos para dominar a técnica"
    },
    {
      icon: Award,
      title: "Mercado Valorizado",
      description: "Fineline é a tendência mais bem paga do momento"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            Por que <span className="text-rosa-medio">Fineline?</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            A técnica de tatuagem mais procurada e valorizada pelos clientes que pagam bem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center space-y-6 p-8 bg-gradient-to-br from-rosa-claro/10 to-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-rosa-claro to-rosa-medio rounded-full flex items-center justify-center shadow-lg">
                <item.icon className="w-10 h-10 text-rosa-escuro" />
              </div>
              
              <div className="space-y-3">
                <h3 className="font-bold text-rosa-escuro text-xl">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}