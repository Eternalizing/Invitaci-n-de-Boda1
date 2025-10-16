import { Button } from "./ui/button";
import { MessageCircle, Instagram, Facebook, Youtube, Mail, Phone, MapPin, Star } from "lucide-react";

export function Footer() {
  return (
    <>
      {/* Botão flutuante do WhatsApp - apenas desktop */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block">
        <div className="relative">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
          >
            <MessageCircle className="w-10 h-10" />
          </Button>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
            1
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-vinho via-rosa-escuro to-vinho text-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-rosa-claro rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-rosa-medio rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative">
          {/* CTA Final */}
          <div className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-rosa-claro text-lg mb-6">
                  "Transformei minha carreira! Em 1 mês já faturei R$6.000 só com fineline" 
                  <br />
                  <span className="text-sm opacity-80">- Ana Carolina, formada em Nov/2024</span>
                </p>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Pronta para <span className="text-rosa-claro">Transformar</span> sua Carreira?
              </h3>
              <p className="text-white/90 mb-8 text-xl leading-relaxed max-w-2xl mx-auto">
                Não perca essa oportunidade única de se especializar em microtatuagem fineline 
                e começar a faturar milhares de reais mensais
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-white text-rosa-escuro hover:bg-rosa-claro hover:text-vinho px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  🎯 Garantir Minha Vaga Agora
                </Button>
                <div className="text-center sm:text-left">
                  <div className="text-rosa-claro font-semibold">⚡ Últimas vagas disponíveis</div>
                  <div className="text-white/80 text-sm">Próxima turma: Janeiro 2025</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-rosa-claro">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rosa-claro rounded-full"></div>
                  <span>🔒 Pagamento 100% Seguro</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rosa-claro rounded-full"></div>
                  <span>📱 Suporte Exclusivo</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rosa-claro rounded-full"></div>
                  <span>🎯 Garantia de Resultado</span>
                </span>
              </div>
            </div>
          </div>
          
          {/* Informações do rodapé */}
          <div className="border-t border-white/20 py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {/* Sobre */}
                <div className="md:col-span-2 space-y-6">
                  <h4 className="font-bold text-2xl text-rosa-claro">Curso de Microtatuagem Fineline</h4>
                  <p className="text-white/80 leading-relaxed">
                    A formação mais completa e prática em microtatuagem fineline do Brasil. 
                    Aprenda com profissionais experientes e saia pronta para faturar alto no mercado da estética.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-white/90">
                      <MapPin className="w-5 h-5 text-rosa-claro" />
                      <span>São Paulo - SP (Endereço enviado após matrícula)</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Phone className="w-5 h-5 text-rosa-claro" />
                      <span>(11) 99999-9999</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                      <Mail className="w-5 h-5 text-rosa-claro" />
                      <span>contato@microtatuagemfineline.com.br</span>
                    </div>
                  </div>
                </div>
                
                {/* Links rápidos */}
                <div className="space-y-6">
                  <h4 className="font-bold text-lg text-rosa-claro">Links Rápidos</h4>
                  <div className="space-y-3 text-white/80">
                    <div><a href="#curso" className="hover:text-rosa-claro transition-colors">Sobre o Curso</a></div>
                    <div><a href="#planos" className="hover:text-rosa-claro transition-colors">Planos e Preços</a></div>
                    <div><a href="#garantia" className="hover:text-rosa-claro transition-colors">Garantia</a></div>
                    <div><a href="#faq" className="hover:text-rosa-claro transition-colors">Perguntas Frequentes</a></div>
                    <div><a href="#depoimentos" className="hover:text-rosa-claro transition-colors">Depoimentos</a></div>
                  </div>
                </div>
                
                {/* Redes sociais */}
                <div className="space-y-6">
                  <h4 className="font-bold text-lg text-rosa-claro">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
                      <Instagram className="w-6 h-6 group-hover:text-rosa-claro transition-colors" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
                      <Facebook className="w-6 h-6 group-hover:text-rosa-claro transition-colors" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
                      <Youtube className="w-6 h-6 group-hover:text-rosa-claro transition-colors" />
                    </a>
                  </div>
                  
                  <div className="text-white/80 text-sm">
                    <p className="mb-2">📱 <strong>WhatsApp:</strong></p>
                    <p>Tire suas dúvidas direto</p>
                    <p>com nossa equipe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Links legais */}
          <div className="border-t border-white/20 py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <div className="text-white/70 text-center lg:text-left">
                  <p>&copy; 2025 Curso de Microtatuagem Fineline. Todos os direitos reservados.</p>
                  <p className="text-sm mt-1">CNPJ: 00.000.000/0001-00 | Razão Social: [Sua Empresa Ltda]</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
                  <a href="#" className="hover:text-rosa-claro transition-colors">Política de Privacidade</a>
                  <a href="#" className="hover:text-rosa-claro transition-colors">Termos de Uso</a>
                  <a href="#" className="hover:text-rosa-claro transition-colors">Política de Reembolso</a>
                  <a href="#" className="hover:text-rosa-claro transition-colors">Contato</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}