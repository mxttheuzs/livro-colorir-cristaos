import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Download, Shield, Star } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Valores Cristãos Sólidos",
      description: "Histórias bíblicas cuidadosamente adaptadas que ensinam amor, fé, perdão e bondade de forma natural e memorável",
      bgColor: "bg-gradient-to-r from-red-400 to-pink-500",
      statistic: "35 histórias bíblicas"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Completo", 
      description: "Estimula criatividade, coordenação motora fina, concentração e habilidades cognitivas essenciais para o crescimento",
      bgColor: "bg-gradient-to-r from-purple-400 to-indigo-500",
      statistic: "100% educativo"
    },
    {
      icon: Clock,
      title: "Tempo de Qualidade",
      description: "Momentos especiais em família longe das telas, fortalecendo vínculos e criando memórias duradouras",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-500",
      statistic: "Horas de diversão"
    },
    {
      icon: Download,
      title: "Acesso Vitalício",
      description: "Download instantâneo após compra, imprima ilimitadamente, use offline, sem dependência de internet",
      bgColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
      statistic: "Download imediato"
    },
    {
      icon: Shield,
      title: "Conteúdo Seguro",
      description: "Material 100% cristão, livre de violência, desenvolvido por educadores cristãos experientes",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      statistic: "Aprovação familiar"
    },
    {
      icon: Star,
      title: "Qualidade Premium",
      description: "Ilustrações profissionais, alta resolução para impressão, papel e formato otimizados para crianças",
      bgColor: "bg-gradient-to-r from-amber-400 to-yellow-500",
      statistic: "Qualidade profissional"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-xl sm:text-2xl">⭐</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Por que escolher nossos livros?
          </h3>
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
