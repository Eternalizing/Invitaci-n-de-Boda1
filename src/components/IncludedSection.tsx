import { CheckCircle, Gift, Users, Award, BookOpen, MessageSquare, Sparkles } from "lucide-react";

export function IncludedSection() {
  const includedItems = [
    {
      icon: BookOpen,
      title: "Curso Presencial Completo",
      description: "2 dias intensivos com toda a base teórica e prática",
      highlight: "16 horas de conteúdo"
    },
    {
      icon: Award,
      title: "Certificado Impresso",
      description: "Documento oficial para comprovar sua qualificação",
      highlight: "Reconhecimento profissional"
    },
    {
      icon: MessageSquare,
      title: "Grupo VIP WhatsApp",
      description: "Suporte contínuo e networking com outras alunas",
      highlight: "Suporte vitalício"
    },
    {
      icon: Gift,
      title: "Material PDF Exclusivo",
      description: "Apostila completa com técnicas e referências",
      highlight: "Conteúdo para consulta"
    },
    {
      icon: Users,
      title: "Acompanhamento Individual",
      description: "Atenção personalizada da instrutora durante a prática",
      highlight: "Turmas reduzidas"
    },
    {
      icon: CheckCircle,
      title: "Garantia de Resultado",
      description: "Você sai com sua primeira tatuagem fineline pronta",
      highlight: "Resultado garantido"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-rosa-claro/10 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-10 w-40 h-40 bg-rosa-escuro rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-rosa-medio rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-rosa-claro/50 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-rosa-escuro" />
            <span className="text-rosa-escuro font-medium">O que está incluso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            Tudo que você <span className="text-rosa-medio">Precisa</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Um pacote completo para você dominar a técnica e começar a faturar imediatamente
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lista de itens inclusos */}
          <div className="space-y-6">
            {includedItems.map((item, index) => (
              <div key={index} className="group flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-rosa-claro/20">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-rosa-claro to-rosa-medio rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110">
                    <item.icon className="w-7 h-7 text-rosa-escuro" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-bold text-rosa-escuro">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-rosa-claro/50 text-rosa-escuro px-2 py-1 rounded-full font-medium">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Mockup/Imagem placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[480px] bg-gradient-to-br from-white/95 to-white/80 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-rosa-claro/30 relative overflow-hidden">
                {/* Elementos decorativos dentro */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-rosa-claro/40 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-12 h-12 bg-rosa-medio/40 rounded-full"></div>
                <div className="absolute top-1/3 right-8 w-8 h-8 bg-rosa-escuro/40 rounded-full"></div>
                <div className="absolute bottom-1/3 left-12 w-6 h-6 bg-vinho/40 rounded-full"></div>
                
                {/* Conteúdo central */}
                <div className="text-center p-8 z-10 space-y-6">
                  <div className="w-24 h-24 bg-rosa-claro rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <Gift className="w-12 h-12 text-rosa-escuro" />
                  </div>
                  <div>
                    <p className="text-rosa-escuro font-semibold text-lg mb-2">Sua foto aqui</p>
                    <p className="text-rosa-medio text-sm">(kit completo do curso)</p>
                  </div>
                  
                  {/* Lista de itens do kit */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                      <span>Máquina fineline profissional</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                      <span>Agulhas especializadas</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                      <span>Tintas premium</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                      <span>Kit de esterilização</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badges flutuantes */}
              <div className="absolute -top-4 -left-4 bg-green-500 text-white rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-xs font-bold">✓ Tudo Incluso</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-rosa-escuro text-white rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-xs font-bold">💝 Kit Profissional</div>
              </div>
              
              {/* Elementos flutuantes */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-rosa-claro/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-rosa-escuro/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* CTA adicional */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-rosa-claro/30 to-rosa-medio/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-rosa-escuro mb-4">
              💎 Valor Total do Pacote: R$3.500
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Mas você investe apenas <strong className="text-rosa-escuro text-2xl">R$1.999</strong> e ainda pode parcelar em até 12x
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-rosa-escuro font-medium">
              <span>🎯 Economia de R$1.501</span>
              <span>📦 Kit profissional incluso</span>
              <span>✨ Suporte vitalício</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}