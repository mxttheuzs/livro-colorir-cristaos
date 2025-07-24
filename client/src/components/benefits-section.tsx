import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Download } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Valores Cristãos",
      description: "Ensina amor, fé e bondade através de histórias bíblicas adaptadas para crianças",
      bgColor: "bg-accent-yellow"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Cognitivo", 
      description: "Estimula criatividade, coordenação motora e concentração das crianças",
      bgColor: "bg-accent-orange"
    },
    {
      icon: Clock,
      title: "Tempo de Qualidade",
      description: "Momentos especiais em família longe das telas e dispositivos eletrônicos",
      bgColor: "bg-accent-green"
    },
    {
      icon: Download,
      title: "Acesso Imediato",
      description: "Download instantâneo após compra, imprima quantas vezes quiser",
      bgColor: "bg-accent-pink"
    }
  ];

  return (
    <section className="px-4 py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl">⭐</span>
          </div>
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
            Por que escolher nossos livros?
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Benefícios únicos para o desenvolvimento das crianças
          </p>
        </div>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 flex items-start space-x-5 shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-105 group">
                <div className={`w-14 h-14 ${benefit.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent className="text-white h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
