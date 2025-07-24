import { Card } from "@/components/ui/card";
import { Heart, Brain, Clock, Download } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Valores Cristãos",
      description: "Ensina amor, fé e bondade através de histórias bíblicas adaptadas para crianças",
      bgColor: "bg-primary-turquoise"
    },
    {
      icon: Brain,
      title: "Desenvolvimento Cognitivo", 
      description: "Estimula criatividade, coordenação motora e concentração das crianças",
      bgColor: "bg-accent-green"
    },
    {
      icon: Clock,
      title: "Tempo de Qualidade",
      description: "Momentos especiais em família longe das telas e dispositivos eletrônicos",
      bgColor: "bg-primary-pink"
    },
    {
      icon: Download,
      title: "Acesso Imediato",
      description: "Download instantâneo após compra, imprima quantas vezes quiser",
      bgColor: "bg-accent-coral"
    }
  ];

  return (
    <section className="px-4 py-8 bg-secondary-light-blue">
      <div className="max-w-sm mx-auto">
        <h3 className="font-fredoka text-2xl text-center text-text-dark mb-6">
          ⭐ Por que escolher nossos livros?
        </h3>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white rounded-xl p-4 flex items-start space-x-3 shadow-sm border-0">
                <div className={`w-10 h-10 ${benefit.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className="text-white h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-dark text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-text-medium leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
