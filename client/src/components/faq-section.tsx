import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como faço o download dos livros após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um email com o link para download imediato. Todos os 35 livros estarão disponíveis em formato PDF de alta qualidade."
    },
    {
      question: "Os livros são adequados para que idade?",
      answer: "Nossos livros são perfeitos para crianças de 3 a 12 anos. Cada história é cuidadosamente ilustrada com traços simples e grandes espaços para colorir, facilitando o manuseio pelos pequenos."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Com a compra você tem acesso vitalício aos arquivos e pode imprimir quantas cópias precisar para uso pessoal, familiar, células e escola dominical."
    },
    {
      question: "Qual é a garantia oferecida?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Nosso suporte é feito via WhatsApp para atendimento rápido e personalizado. Nossa equipe está pronta para ajudar com qualquer dúvida sobre download, impressão ou uso dos materiais."
    },
    {
      question: "Preciso ter internet para usar os livros?",
      answer: "Não! Após o download, todos os arquivos ficam salvos no seu dispositivo. Você pode acessar, visualizar e imprimir offline, sem precisar de conexão com a internet."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-xl sm:text-2xl">❓</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Perguntas Frequentes
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
            Esclareça suas dúvidas sobre nossos livros cristãos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white rounded-xl border-0 shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base pr-2">
                    {faq.question}
                  </h4>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 rounded-full">
            <span className="text-white text-lg">💬</span>
          </div>
        </div>
      </div>
    </section>
  );
}