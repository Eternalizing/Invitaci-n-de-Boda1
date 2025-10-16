import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function SimpleFAQ() {
  const faqs = [
    {
      question: "Preciso ter experiência para fazer o curso?",
      answer: "Não! O curso é desenvolvido para iniciantes. Ensinamos desde o básico até você conseguir fazer sua primeira tatuagem fineline."
    },
    {
      question: "O curso é realmente presencial?",
      answer: "Sim, 100% presencial em nosso estúdio equipado. A localização será enviada após a confirmação da matrícula."
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim! Oferecemos parcelamento em até 12x sem juros no cartão de crédito."
    },
    {
      question: "Vou conseguir trabalhar depois do curso?",
      answer: "Sim! Você sairá do curso fazendo tatuagens fineline e com todas as informações para precificar e captar clientes."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rosa-claro/10 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rosa-escuro mb-6">
            Perguntas <span className="text-rosa-medio">Frequentes</span>
          </h2>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-rosa-claro/30 rounded-2xl px-6 py-2"
              >
                <AccordionTrigger className="text-left text-rosa-escuro font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}