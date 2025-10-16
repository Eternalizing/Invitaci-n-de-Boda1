import { Button } from "./ui/button";
import { Check, Star, Crown, Sparkles } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "COM KIT COMPLETO",
      subtitle: "Mais Completo",
      price: "12x de R$166,58",
      totalPrice: "R$1.999,00",
      originalPrice: "R$2.497,00",
      popular: true,
      savings: "Economize R$498",
      features: [
        "Curso presencial completo (2 dias)",
        "Certificado impresso de conclusão",
        "Grupo VIP de suporte no WhatsApp",
        "Bônus digital com material PDF exclusivo",
        "KIT profissional completo de tatuagem",
        "Todos os materiais e equipamentos inclusos",
        "Mentoria individual da instrutora",
        "Garantia de primeira tatuagem pronta"
      ],
      icon: Crown
    },
    {
      name: "SEM MATERIAL",
      subtitle: "Essencial",
      price: "12x de R$124,92",
      totalPrice: "R$1.499,00",
      originalPrice: "R$1.897,00",
      popular: false,
      savings: "Economize R$398",
      features: [
        "Curso presencial completo (2 dias)",
        "Certificado impresso de conclusão",
        "Grupo de suporte no WhatsApp",
        "Bônus digital com material PDF",
        "Lista detalhada de materiais necessários",
        "Orientações para compra dos equipamentos",
        "Acesso ao conteúdo complementar",
        "Suporte pós-curso por 30 dias"
      ],
      icon: Star
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-rosa-claro/20 via-white to-rosa-medio/10 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rosa-medio rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rosa-escuro rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-rosa-claro/50 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-rosa-escuro" />
            <span className="text-rosa-escuro font-medium">Oferta Limitada</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            Escolha seu <span className="text-rosa-medio">Plano Ideal</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Invista no seu futuro profissional e comece a faturar com microtatuagem fineline
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-3xl p-8 shadow-2xl relative transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 ${plan.popular ? 'ring-4 ring-rosa-escuro/20 scale-105 lg:scale-110' : 'hover:scale-105'}`}>
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-rosa-escuro to-vinho text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center space-x-2">
                    <Crown className="w-5 h-5" />
                    <span>MAIS ESCOLHIDO</span>
                  </div>
                </div>
              )}
              
              {/* Savings badge */}
              <div className="absolute -top-3 -right-3 bg-rosa-medio text-white rounded-full px-4 py-2 font-bold text-sm shadow-lg">
                {plan.savings}
              </div>
              
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${plan.popular ? 'bg-gradient-to-br from-rosa-escuro to-vinho' : 'bg-gradient-to-br from-rosa-claro to-rosa-medio'}`}>
                    <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-rosa-escuro'}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-rosa-escuro mb-2">
                  {plan.name}
                </h3>
                <p className="text-rosa-medio font-medium mb-4">
                  {plan.subtitle}
                </p>
                
                <div className="space-y-2">
                  <div className="text-sm text-gray-500 line-through">
                    De {plan.originalPrice}
                  </div>
                  <div className="text-4xl font-bold text-rosa-escuro">
                    {plan.price}
                  </div>
                  <div className="text-gray-600">
                    ou <span className="font-semibold text-rosa-escuro">{plan.totalPrice}</span> à vista
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rosa-medio to-rosa-escuro rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-rosa-escuro to-vinho hover:from-vinho hover:to-rosa-escuro text-white transform hover:scale-105' 
                    : 'bg-gradient-to-r from-rosa-claro to-rosa-medio hover:from-rosa-medio hover:to-rosa-escuro text-rosa-escuro hover:text-white transform hover:scale-105'
                }`}
              >
                {plan.popular ? 'Quero o Plano Completo' : 'Escolher Este Plano'}
              </Button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                💳 Parcelamento sem juros no cartão
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ✨ <strong>Bonus:</strong> Primeiras 20 alunas ganham acesso vitalício ao grupo VIP
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-rosa-escuro">
            <span>🔒 Pagamento 100% Seguro</span>
            <span>📱 Suporte WhatsApp</span>
            <span>🎯 Método Aprovado</span>
          </div>
        </div>
      </div>
    </section>
  );
}