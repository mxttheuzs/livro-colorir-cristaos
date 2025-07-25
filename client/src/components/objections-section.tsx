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

        {/* Final Emotional Push */}
        <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-xl p-6 mb-6">
          <div className="text-center">
            <AlertTriangle className="text-red-500 h-12 w-12 mx-auto mb-4" />
            <h4 className="font-bold text-red-600 text-lg mb-3">
              💔 ÚLTIMA CHANCE REAL
            </h4>
            <div className="space-y-2 mb-4">
              <p className="text-gray-800 text-sm font-bold">
                ❌ Se você sair desta página sem comprar...
              </p>
              <p className="text-red-600 text-sm">
                • Seus filhos continuarão sem valores cristãos
              </p>
              <p className="text-red-600 text-sm">
                • Você pagará R$ 97,00 amanhã (SE ainda tiver)
              </p>
              <p className="text-red-600 text-sm">
                • Outras famílias pegarão os últimos exemplares
              </p>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
              <p className="text-green-800 text-sm font-bold">
                ✅ Mas se você agir AGORA...
              </p>
              <p className="text-green-600 text-xs mt-1">
                Seus filhos começam a transformação em 5 minutos!
              </p>
            </div>
            
            {/* Countdown Timer Mock */}
            <div className="bg-red-500 text-white rounded-lg p-3 mb-4">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-bold text-sm">TEMPO RESTANTE: 2h 47min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <Button 
          onClick={onPurchase}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-6 rounded-full text-lg uppercase tracking-wide shadow-2xl transition-all hover:shadow-3xl border-2 border-red-400 h-auto"
          style={{ animation: 'pulse-scale 1.5s ease-in-out infinite' }}
        >
          🚨 SIM! QUERO TRANSFORMAR MEUS FILHOS AGORA!
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-xs text-red-600 font-bold">
            ⚠️ Clique agora ou perca para sempre esta oportunidade!
          </p>
          <p className="text-xs text-gray-500 mt-2">
            ✅ Compra 100% segura • 🔒 Dados protegidos • ⚡ Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
}