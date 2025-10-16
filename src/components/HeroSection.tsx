import { Button } from "./ui/button";
import { Play, Star, Award } from "lucide-react";
import modelImage from "figma:asset/a00e39811b01fd3112431e3fc2fff4ebadca4f40.png";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-rosa-claro via-rosa-medio/30 to-rosa-escuro/20 py-12 md:py-24 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-rosa-escuro rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-rosa-medio rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Award className="w-5 h-5 text-rosa-escuro" />
              <span className="text-rosa-escuro font-semibold">+1.000 Fineline Realizadas</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-rosa-escuro">Curso</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-rosa-medio to-vinho bg-clip-text">
                  Tatuagem Fineline
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-xl">
                Aprenda a técnica mais procurada do momento e <strong className="text-rosa-escuro">fature alto</strong> com tatuagens delicadas e sofisticadas
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="font-bold text-2xl text-rosa-escuro">2</div>
                <div className="text-sm text-gray-600">Dias Intensivos</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="font-bold text-2xl text-rosa-escuro">100%</div>
                <div className="text-sm text-gray-600">Presencial</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="font-bold text-2xl text-rosa-escuro">R$150+</div>
                <div className="text-sm text-gray-600">Por Tattoo</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rosa-escuro to-vinho hover:from-vinho hover:to-rosa-escuro text-white px-8 py-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg"
              >
                🎯 Quero Aprender Fineline
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-rosa-escuro text-rosa-escuro hover:bg-rosa-escuro hover:text-white px-8 py-6 rounded-2xl font-semibold text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Portfólio
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-rosa-escuro font-medium">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                <span>Técnica profissional comprovada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-rosa-medio rounded-full"></div>
                <span>Certificado incluso</span>
              </div>
            </div>
          </div>
          
          {/* Foto da modelo com efeitos */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Container principal com gradiente e efeitos */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                {/* Gradiente de fundo para remover visualmente o fundo cinza */}
                <div className="absolute inset-0 bg-gradient-to-br from-rosa-claro via-rosa-medio/20 to-rosa-escuro/10"></div>
                
                {/* Efeitos decorativos de fundo */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-rosa-claro/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 right-8 w-12 h-12 bg-rosa-medio/50 rounded-full blur-lg"></div>
                
                {/* Foto da modelo */}
                <div className="relative z-10 w-full h-full">
                  <img 
                    src={modelImage} 
                    alt="Instrutora especialista em tatuagem fineline"
                    className="w-full h-full object-cover object-center mix-blend-multiply"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                      maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
                    }}
                  />
                  
                  {/* Overlay gradiente sutil para integração */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rosa-claro/20 via-transparent to-rosa-medio/10 mix-blend-overlay"></div>
                </div>
                
                {/* Badge de destaque */}
                <div className="absolute top-4 right-4 bg-rosa-escuro text-white rounded-2xl px-4 py-2 shadow-xl z-20">
                  <div className="text-xs font-bold">⭐ Especialista Fineline</div>
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute top-1/4 -left-2 w-6 h-6 bg-rosa-medio rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-1/3 -right-2 w-4 h-4 bg-rosa-escuro rounded-full shadow-lg animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Efeitos de brilho externos */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-rosa-claro/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-rosa-escuro/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              
              {/* Elementos decorativos extras */}
              <div className="absolute top-1/2 -left-8 w-24 h-24 border-4 border-rosa-medio/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute bottom-1/4 -right-6 w-16 h-16 border-2 border-rosa-escuro/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}