import { Card } from "@/components/ui/card";
import { Users, Church, Home } from "lucide-react";

export function UsageCategories() {
  const categories = [
    {
      icon: Users,
      title: "Células",
      description: "Perfeito para atividades em grupos pequenos e células da igreja. Engaja crianças durante os estudos bíblicos com atividades lúdicas e educativas.",
      bgColor: "bg-gradient-to-r from-yellow-400 to-orange-400",
      iconBg: "bg-yellow-500"
    },
    {
      icon: Church,
      title: "Escola Dominical", 
      description: "Ideal para professores da escola dominical. Oferece recursos visuais e práticos para ensinar histórias bíblicas de forma interativa e memorável.",
      bgColor: "bg-gradient-to-r from-orange-400 to-red-400",
      iconBg: "bg-orange-500"
    },
    {
      icon: Home,
      title: "Devocional Familiar",
      description: "Fortalece a fé em família com momentos de qualidade. Crie tradições cristãs duradouras e ensine valores bíblicos de forma natural e divertida.",
      bgColor: "bg-gradient-to-r from-pink-400 to-rose-400", 
      iconBg: "bg-pink-500"
    }
  ];

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <h3 className="font-heading text-2xl font-bold text-center text-text-dark mb-3">
          🎯 Onde Usar Nossos Livros
        </h3>
        <p className="text-center text-text-medium text-sm mb-8">
          Desenvolvido para diferentes contextos cristãos
        </p>
        
        <div className="space-y-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white rounded-2xl p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${category.iconBg} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-text-dark text-lg mb-2">{category.title}</h4>
                    <p className="text-sm text-text-medium leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <div className={`h-1 ${category.bgColor} rounded-full mt-4`}></div>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 text-center shadow-lg border-0">
          <h4 className="font-bold text-text-dark text-lg mb-2">
            ✨ Material Completo e Versátil
          </h4>
          <p className="text-sm text-text-medium">
            35 livros adaptáveis para qualquer contexto cristão. 
            <br />
            <strong>Pronto para imprimir e usar imediatamente!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}