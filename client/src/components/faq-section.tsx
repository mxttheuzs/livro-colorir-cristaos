import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como recebo os livros?",
      answer: "Após a confirmação do pagamento, você recebe imediatamente todos os 35 livros de colorir cristãos em formato PDF em seu email. Os arquivos estão em alta qualidade e prontos para impressão."
    },
    {
      question: "Posso imprimir quantas vezes quiser?",
      answer: "Sim! Uma vez que você adquire os livros, pode imprimir quantas vezes desejar. Não há limite de impressões. Você pode usar em casa, na igreja, escola dominical ou compartilhar com sua família."
    },
    {
      question: "Qual a faixa etária recomendada?",
      answer: "Os livros são recomendados para crianças de 3 a 12 anos de idade. Os desenhos têm diferentes níveis de complexidade, desde traços mais simples para os pequenos até desenhos mais detalhados para as crianças maiores."
    },
    {
      question: "Como funciona o bônus mensal?",
      answer: "A cada mês, enviamos novos livros de colorir cristãos exclusivos para sua coleção, totalmente gratuitos. Você receberá por email sem custo adicional, expandindo continuamente sua biblioteca de atividades."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-800 text-sm pr-3">
                  {faq.question}
                </span>
                {openQuestion === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openQuestion === index && (
                <div className="px-5 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('offer-section');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            TIREI MINHAS DÚVIDAS, QUERO COMPRAR
          </button>
        </div>
      </div>
    </section>
  );
}