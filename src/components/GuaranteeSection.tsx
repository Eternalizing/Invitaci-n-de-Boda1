import { Award, Star } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-br from-rosa-claro/30 to-rosa-medio/20 rounded-3xl p-12 shadow-2xl border border-rosa-claro/50">
          <div className="flex flex-col items-center space-y-8">
            {/* Selo de garantia com design mais sofisticado */}
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-rosa-medio to-rosa-escuro rounded-full flex items-center justify-center shadow-2xl">
                <Award className="w-20 h-20 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 bg-vinho text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xs shadow-lg">
                <div className="text-center">
                  <div>100%</div>
                  <div className="text-[10px]">GARANTIA</div>
                </div>
              </div>
              {/* Estrelas decorativas */}
              <Star className="absolute -top-2 -left-4 w-6 h-6 text-rosa-medio/60 fill-current" />
              <Star className="absolute -bottom-4 -right-2 w-4 h-4 text-rosa-escuro/60 fill-current" />
              <Star className="absolute top-8 -left-6 w-3 h-3 text-rosa-claro fill-current" />
            </div>
            
            <div className="space-y-6 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-bold text-rosa-escuro">
                Garantia de Resultado
              </h3>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-rosa-claro/30">
                <p className="text-xl md:text-2xl text-rosa-escuro font-semibold leading-relaxed mb-4">
                  "Se você <strong className="text-vinho">não sair com a sua primeira tatuagem pronta</strong>, devolvemos seu dinheiro!"
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong className="text-rosa-escuro">Sem perguntas, nosso propósito é você sair daqui com a primeira tatuagem profissional pronta!</strong>
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  Sabemos que a prática leva à perfeição, mas queremos que você saia daqui <strong className="text-rosa-escuro">pronta para começar a faturar com fineline!</strong>
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-rosa-escuro font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                  <span>Primeira tatuagem garantida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                  <span>Acompanhamento individual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                  <span>Técnica fineline profissional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}