import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "Preciso ter experiência prévia para fazer o curso?",
      answer: "Não! O curso foi desenvolvido para iniciantes e profissionais que querem se aperfeiçoar. Começamos do básico e evoluímos gradualmente, com acompanhamento individual para garantir que todos saiam com a primeira tatuagem fineline pronta."
    },
    {
      question: "O curso é presencial mesmo? Onde acontece?",
      answer: "Sim, é 100% presencial! O curso acontece em nosso estúdio completamente equipado, onde você terá acesso a todos os materiais e equipamentos profissionais necessários. Localização será enviada após a confirmação da matrícula."
    },
    {
      question: "Vou receber certificado?",
      answer: "Sim! Você receberá um certificado impresso que comprova sua formação em microtatuagem fineline, podendo usar como qualificação profissional para atrair mais clientes."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Claro! Oferecemos parcelamento em até 12x no cartão de crédito sem juros, para que você possa investir em sua carreira sem comprometer seu orçamento. Também aceitamos PIX à vista com desconto."
    },
    {
      question: "E se eu não conseguir acompanhar o ritmo do curso?",
      answer: "Nosso curso tem acompanhamento individual e a instrutora trabalha no seu ritmo pessoal. Nossa garantia é que você saia com a primeira tatuagem pronta! Além disso, você terá acesso ao grupo de suporte por tempo indeterminado."
    },
    {
      question: "Quando vou conseguir começar a trabalhar?",
      answer: "Imediatamente após o curso! Você sairá com sua primeira tatuagem fineline pronta e todas as técnicas necessárias para atender clientes com segurança. Muitas alunas começam a trabalhar na mesma semana."
    },
    {
      question: "Qual é a diferença entre fineline e microtatuagem tradicional?",
      answer: "Fineline é uma técnica mais delicada que usa traços ultra-finos, criando desenhos minimalistas e elegantes. É uma das tendências mais procuradas e bem remuneradas do mercado atual de tatuagem."
    },
    {
      question: "Vocês ensinam sobre precificação do serviço?",
      answer: "Sim! Ensinamos não apenas a técnica, mas também como precificar seus serviços, atrair clientes e construir uma cartela sólida. Nosso objetivo é que você fature pelo menos R$4.000 a mais por mês."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-rosa-claro/10 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rosa-claro/50 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-rosa-escuro" />
            <span className="text-rosa-escuro font-medium">Tire suas dúvidas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            Perguntas <span className="text-rosa-medio">Frequentes</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Tudo que você precisa saber sobre o curso
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-rosa-claro/20">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-rosa-claro/30 rounded-2xl px-8 py-2 hover:border-rosa-medio/50 transition-colors duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="text-left text-rosa-escuro font-semibold hover:text-rosa-medio py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed text-lg pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-rosa-claro/30 to-rosa-medio/20 rounded-2xl">
            <h3 className="text-xl font-semibold text-rosa-escuro mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para te ajudar via WhatsApp
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              💬 Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}