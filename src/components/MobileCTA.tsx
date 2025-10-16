import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function MobileCTA() {
  return (
    <>
      {/* CTA fixo mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t-2 border-rosa-claro shadow-2xl">
        <div className="p-4">
          <div className="flex space-x-3">
            <Button 
              className="flex-1 bg-gradient-to-r from-rosa-escuro to-vinho hover:from-vinho hover:to-rosa-escuro text-white py-4 rounded-2xl font-semibold shadow-lg text-lg"
            >
              Garantir Minha Vaga
            </Button>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-2xl w-16 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Spacer para evitar sobreposição */}
      <div className="h-20 md:hidden"></div>
    </>
  );
}