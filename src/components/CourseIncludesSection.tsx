import { CheckCircle, Award, MessageSquare, Gift } from "lucide-react";

export function CourseIncludesSection() {
  const includes = [
    "Curso presencial completo (2 dias intensivos)",
    "Certificado impresso de conclusão",
    "Material teórico e prático completo", 
    "Suporte pós-curso via WhatsApp",
    "Técnicas de precificação e captação",
    "Garantia: saia fazendo sua primeira fineline"
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-rosa-claro/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            O que está <span className="text-rosa-medio">Incluso</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Tudo que você precisa para dominar a técnica e começar a trabalhar
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lista do que está incluso */}
          <div className="space-y-6">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-gradient-to-br from-rosa-medio to-rosa-escuro rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          {/* Destaque do valor */}
          <div className="bg-gradient-to-br from-rosa-claro/30 to-rosa-medio/20 rounded-3xl p-8 text-center">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-rosa-escuro rounded-full mx-auto flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-rosa-escuro mb-3">
                  Investimento Total
                </h3>
                <div className="text-sm text-gray-600 line-through mb-2">
                  De R$2.497,00
                </div>
                <div className="text-4xl font-bold text-rosa-escuro mb-2">
                  R$1.999
                </div>
                <div className="text-gray-600 mb-4">
                  ou 12x de R$166,58
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-rosa-escuro">
                <div>💳 Parcelamento sem juros</div>
                <div>🔒 Pagamento 100% seguro</div>
                <div>✅ Garantia de resultado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}