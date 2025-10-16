import { Button } from "./ui/button";
import { Quote, Sparkles } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="bg-gradient-to-br from-vinho via-rosa-escuro to-vinho py-24 px-4 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-rosa-claro rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-rosa-medio rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl text-center relative">
        <div className="mb-8">
          <Quote className="w-16 h-16 text-rosa-claro mx-auto mb-6 opacity-60" />
        </div>
        
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-12">
          Marketing que funciona é aquele com <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="text-rosa-claro font-extrabold text-3xl md:text-4xl lg:text-5xl">INTENCIONALIDADE</span>
            <Sparkles className="absolute -top-2 -right-8 w-8 h-8 text-rosa-claro animate-pulse" />
          </span>
          <br />
          – com microtatuagens fineline, <br className="hidden md:block" />
          você se diferencia e <span className="text-rosa-claro font-extrabold">fatura mais.</span>
        </blockquote>
        
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
              <strong className="text-rosa-claro">Fineline é a técnica mais procurada</strong> pelos clientes que pagam bem. 
              Enquanto outras fazem tatuagens comuns, você oferecerá arte minimalista e sofisticada.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-rosa-claro font-medium">
              <span>💰 Clientes pagam 3x mais</span>
              <span>🎯 Mercado em alta</span>
              <span>✨ Diferencial competitivo</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-rosa-escuro hover:bg-rosa-claro hover:text-vinho px-12 py-6 rounded-2xl shadow-2xl font-bold text-xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 Quero Garantir Minha Vaga
          </Button>
          
          <p className="text-white/70 text-sm">
            ⚡ Últimas vagas para a próxima turma
          </p>
        </div>
      </div>
    </section>
  );
}