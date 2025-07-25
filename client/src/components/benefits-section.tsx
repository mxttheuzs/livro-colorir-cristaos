import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Download, Shield, Star } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "💔 Evite que Seus Filhos Cresçam Sem Fé",
      description: "Enquanto outras crianças perdem valores cristãos, seus filhos aprenderão amor, perdão e bondade através de 35 histórias bíblicas transformadoras",
      bgColor: "bg-gradient-to-r from-red-400 to-pink-500",
      statistic: "35 histórias bíblicas",
      emotional: "MEDO DA PERDA"
    },
    {
      icon: Brain,
      title: "🧠 Desenvolvimento SUPERIOR às Outras Crianças", 
      description: "Coordenação motora, concentração e criatividade MUITO acima da média. Seus filhos se destacarão na escola e na vida",
      bgColor: "bg-gradient-to-r from-purple-400 to-indigo-500",
      statistic: "100% educativo",
      emotional: "DESEJO DE SUPERIORIDADE"
    },
    {
      icon: Clock,
      title: "⏰ Pare de Perder Momentos Preciosos",
      description: "Cada dia sem conexão familiar é PERDIDO para sempre. Crie memórias eternas longe das telas viciantes",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
      statistic: "Horas de conexão",
      emotional: "URGÊNCIA TEMPORAL"
    },
    {
      icon: Download,
      title: "🚀 Transformação INSTANTÂNEA",
      description: "Em 5 minutos você já estará imprimindo e transformando sua casa. Sem espera, sem correios, sem problemas",
      bgColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
      statistic: "Acesso imediato",
      emotional: "GRATIFICAÇÃO INSTANTÂNEA"
    },
    {
      icon: Shield,
      title: "⚠️ Proteja Seus Filhos do Mundo Secular",
      description: "Enquanto o mundo corrompe valores cristãos, seus filhos estarão PROTEGIDOS com conteúdo 100% aprovado por educadores cristãos",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      statistic: "100% cristão",
      emotional: "PROTEÇÃO FAMILIAR"
    },
    {
      icon: Star,
      title: "👑 Seus Filhos Merecem o MELHOR",
      description: "Qualidade profissional que outras famílias pagam R$ 200+. Ilustrações de alta resolução que encantam e ensinam",
      bgColor: "bg-gradient-to-r from-amber-400 to-yellow-500",
      statistic: "Qualidade premium",
      emotional: "VALOR SUPERIOR"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-red-600 mb-4">
            ⚠️ O QUE VOCÊ ESTÁ PERDENDO<br/>
            <span className="text-gray-800">Enquanto Não Age HOJE</span>
          </h2>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-gray-700 text-sm font-medium">
              <strong>AVISO:</strong> Cada dia que passa sem estes livros é um dia perdido no desenvolvimento espiritual dos seus filhos
            </p>
          </div>
        </div>
        
        <div className="grid gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white rounded-xl p-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${benefit.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent className="text-white h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-200">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 rounded-full mb-3">
            <span className="text-white text-lg">✓</span>
          </div>
          <h4 className="font-bold text-gray-800 text-base mb-2">
            Garantia de Satisfação
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Mais de 1.500 famílias satisfeitas. Garantia de 7 dias ou seu dinheiro de volta.
          </p>
        </div>
      </div>
    </section>
  );
}
