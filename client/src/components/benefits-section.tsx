import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Download, Shield, Star } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Valores Cristãos Sólidos",
      description: "Histórias bíblicas cuidadosamente adaptadas que ensinam amor, fé, perdão e bondade de forma natural e memorável para toda a família",
      bgColor: "bg-gradient-to-r from-red-400 to-pink-500",
      statistic: "35 histórias bíblicas"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Completo e Natural", 
      description: "Estimula criatividade, coordenação motora fina, concentração e habilidades cognitivas essenciais para o crescimento saudável",
      bgColor: "bg-gradient-to-r from-purple-400 to-indigo-500",
      statistic: "100% educativo"
    },
    {
      icon: Clock,
      title: "Momentos Especiais em Família",
      description: "Oportunidade perfeita para criar memórias duradouras longe das telas, fortalecendo vínculos familiares de forma divertida",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
      statistic: "Horas de qualidade"
    },
    {
      icon: Download,
      title: "Acesso Imediato e Prático",
      description: "Download instantâneo após a compra, imprima quando quiser, use offline, total praticidade para sua família",
      bgColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
      statistic: "Acesso vitalício"
    },
    {
      icon: Shield,
      title: "Conteúdo Seguro e Confiável",
      description: "Material 100% cristão, livre de conteúdo inadequado, desenvolvido por educadores cristãos experientes e dedicados",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      statistic: "Aprovação total"
    },
    {
      icon: Star,
      title: "Qualidade Premium Acessível",
      description: "Ilustrações profissionais de alta resolução, formato otimizado para crianças, tudo com excelente custo-benefício",
      bgColor: "bg-gradient-to-r from-amber-400 to-yellow-500",
      statistic: "Qualidade profissional"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
            Por que Famílias Escolhem<br/>
            <span className="text-gray-800">Nossos Livros de Colorir</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
            Benefícios únicos e comprovados para o desenvolvimento das crianças
          </p>
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
