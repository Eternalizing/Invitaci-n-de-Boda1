import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
}