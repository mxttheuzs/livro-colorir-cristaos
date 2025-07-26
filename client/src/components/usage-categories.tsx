import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Church, Home, BookOpen, Heart, Sparkles } from "lucide-react";

export function UsageCategories() {
  const categories = [
    {
      icon: Users,
      title: "Células e Grupos",
      description: "Transforme suas células em momentos especiais! Engaje crianças e fortaleça vínculos familiares com atividades que ensinam enquanto divertem.",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-400",
      iconBg: "bg-gradient-to-r from-yellow-500 to-orange-500",
      benefits: ["Engajamento garantido", "Atividades prontas", "Fácil aplicação"]
    },
    {
      icon: Church,
      title: "Escola Dominical", 
      description: "Revolucione suas aulas! Recursos visuais profissionais que tornam o aprendizado bíblico interativo, memorável e cheio de significado.",
      bgColor: "bg-gradient-to-r from-blue-400 to-purple-400",
      iconBg: "bg-gradient-to-r from-blue-500 to-purple-500",
      benefits: ["Material didático", "Visual atrativo", "Fácil ensino"]
    },
    {
      icon: Home,
      title: "Devocional Familiar",
      description: "Crie tradições duradouras! Fortaleça a fé em família com momentos especiais que ensinam valores cristãos de forma natural e divertida.",
      bgColor: "bg-gradient-to-r from-pink-400 to-rose-400", 
      iconBg: "bg-gradient-to-r from-pink-500 to-rose-500",
      benefits: ["Vínculos familiares", "Tradições cristãs", "Tempo de qualidade"]
    },
    {
      icon: BookOpen,
      title: "Ministério Infantil",
      description: "Potencialize seu ministério! Material profissional que facilita o ensino bíblico e mantém as crianças atentas e participativas.",
      bgColor: "bg-gradient-to-r from-green-400 to-teal-400",
      iconBg: "bg-gradient-to-r from-green-500 to-teal-500",
      benefits: ["Recurso pastoral", "Atenção garantida", "Ensino eficaz"]
    },
    {
      icon: Heart,
      title: "Aconselhamento",
      description: "Ferramenta terapêutica! Ajude crianças a expressarem sentimentos e aprender valores através da arte e reflexão bíblica.",
      bgColor: "bg-gradient-to-r from-red-400 to-pink-400",
      iconBg: "bg-gradient-to-r from-red-500 to-pink-500",
      benefits: ["Expressão emocional", "Valores bíblicos", "Desenvolvimento saudável"]
    },
    {
      icon: Sparkles,
      title: "Eventos Especiais",
      description: "Momentos únicos! Ideal para retiros, acampamentos, festivais e eventos especiais da igreja com atividades que marcam vidas.",
      bgColor: "bg-gradient-to-r from-indigo-400 to-blue-400",
      iconBg: "bg-gradient-to-r from-indigo-500 to-blue-500",
      benefits: ["Eventos marcantes", "Atividades especiais", "Memórias duradouras"]
    }
  ];

  return (
    <section className="px-3 py-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-4">
          <h3 className="font-heading text-lg font-bold text-gray-800 mb-2">
            Onde Usar Nossos Livros
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed px-2">
            Versatilidade comprovada em diversos contextos cristãos
          </p>
        </div>
        
        <div className="grid gap-2">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white rounded-lg p-3 border-0 shadow-md group">
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 ${category.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="text-white h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-xs mb-1">{category.title}</h4>
                    <p className="text-gray-600 text-xs leading-tight">{category.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quero ver as ofertas section */}
        <div className="mt-4 text-center">
          <Button 
            onClick={() => {
              const offerElement = document.getElementById('offer');
              if (offerElement) {
                offerElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            QUERO VER AS OFERTAS
          </Button>
        </div>
        
      </div>
    </section>
  );
}