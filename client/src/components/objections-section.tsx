import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";

interface ObjectionsSectionProps {
  onPurchase: () => void;
}

export function ObjectionsSection({ onPurchase }: ObjectionsSectionProps) {
  const objections = [
    {
      icon: XCircle,
      objection: "💭 'Meu filho não gosta de colorir...'",
      answer: "🔥 ERRADO! Estes não são livros de colorir comuns. São HISTÓRIAS VIVAS que prendem atenção por horas. Mesmo crianças 'difíceis' ficam fascinadas!",
      proof: "✅ 94% das crianças 'agitadas' se acalmam em 15 minutos",
      emotion: "MEDO DO DESPERDÍCIO"
    },
    {
      icon: XCircle,
      objection: "💰 'R$ 10,00 é caro para livros digitais...'",
      answer: "⚠️ PARE! Você gastaria R$ 50+ em um brinquedo que quebra em 1 semana. Estes livros educam PARA SEMPRE e custam menos que 2 refrigerantes!",
      proof: "💡 Valor real: R$ 272,00 - Você economiza R$ 262,00",
      emotion: "VALOR PERCEBIDO"
    },
    {
      icon: XCircle,
      objection: "⏰ 'Vou decidir depois...'",
      answer: "🚨 CUIDADO! Amanhã custará R$ 97,00. Em 1 ano você pagará R$ 300+. Cada minuto que passa é dinheiro perdido!",
      proof: "⚡ Apenas 47 exemplares restantes - Oferta expira à meia-noite",
      emotion: "URGÊNCIA TEMPORAL"
    },
    {
      icon: XCircle,
      objection: "🤔 'Não sei se funciona mesmo...'",
      answer: "✅ GARANTIDO! 7 dias para testar. Se não funcionar, devolvemos 100% do valor. VOCÊ NÃO CORRE RISCO ALGUM!",
      proof: "🛡️ Garantia incondicional de 7 dias + 2.847 famílias satisfeitas",
      emotion: "REDUÇÃO DE RISCO"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="w-full max-w-xs mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-red-600 mb-4">
            🛑 PARE DE INVENTAR DESCULPAS!
          </h3>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-800 text-sm font-bold">
              ⚠️ Vou destruir TODAS as suas objeções agora mesmo...
            </p>
          </div>
        </div>

        {/* Objections List */}
        <div className="space-y-6 mb-8">
          {objections.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="bg-white border-2 border-red-200 rounded-xl p-4 shadow-lg">
                
                {/* Objection */}
                <div className="flex items-start mb-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
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