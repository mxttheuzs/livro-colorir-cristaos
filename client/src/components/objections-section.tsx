import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

interface ObjectionsSectionProps {
  onPurchase: () => void;
}

export function ObjectionsSection({ onPurchase }: ObjectionsSectionProps) {
  const objections = [
    {
      icon: CheckCircle,
      objection: "Meu filho não tem muito interesse em colorir...",
      answer: "Entendemos! Nossos livros são diferentes - contam histórias bíblicas envolventes que naturalmente despertam curiosidade. As ilustrações são projetadas para capturar a atenção das crianças.",
      proof: "A maioria das crianças se engaja rapidamente com as histórias"
    },
    {
      icon: CheckCircle,
      objection: "Acho que R$ 10,00 é um pouco caro para livros digitais...",
      answer: "Compreendemos sua preocupação com o orçamento. Por R$ 10,00 você recebe 35 livros profissionais, o que sai a menos de R$ 0,30 por livro - muito menos que qualquer material físico similar.",
      proof: "Excelente custo-benefício comparado a livros individuais"
    },
    {
      icon: Clock,
      objection: "Preciso pensar um pouco mais antes de decidir...",
      answer: "É natural querer refletir sobre uma compra. Esta é uma oferta especial por tempo limitado, mas entendemos que cada família tem seu ritmo para decidir.",
      proof: "Oferta promocional disponível por tempo limitado"
    },
    {
      icon: CheckCircle,
      objection: "Não tenho certeza se vai funcionar para minha família...",
      answer: "Sua preocupação é válida! Por isso oferecemos garantia de 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas.",
      proof: "Garantia de satisfação de 7 dias ou dinheiro de volta"
    },
    {
      icon: Clock,
      objection: "Como funciona o bônus mensal?",
      answer: "O bônus mensal não existe mais. Agora você recebe todo o conteúdo de uma só vez no pacote premium: 5 vídeos de histórias bíblicas, 18 versículos ilustrados e calendário bíblico semanal.",
      proof: "Acesso completo e imediato a todos os bônus"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-xs mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
            Perguntas Frequentes
          </h3>
          <p className="text-gray-600 text-base">
            Esclarecemos as principais dúvidas das famílias
          </p>
        </div>

        {/* Objections List */}
        <div className="space-y-6 mb-8">
          {objections.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg">
                
                {/* Question */}
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <IconComponent className="text-white h-4 w-4" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-relaxed">
                    {item.objection}
                  </p>
                </div>

                {/* Answer */}
                <div className="bg-green-50 border-l-4 border-green-400 p-3 mb-3">
                  <p className="text-green-800 font-bold text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>

                {/* Proof */}
                <div className="flex items-center bg-blue-50 rounded-lg p-2">
                  <CheckCircle className="text-blue-500 h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-blue-700 text-xs font-medium">
                    {item.proof}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        

        
      </div>
    </section>
  );
}