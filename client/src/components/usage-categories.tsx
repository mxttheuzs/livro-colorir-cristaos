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
    <section className="px-4 py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
            Onde Usar Nossos Livros
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Desenvolvido para diferentes contextos cristãos
          </p>
        </div>
        
        <div className="space-y-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                <div className="flex items-start space-x-5">
                  <div className={`w-14 h-14 ${category.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="text-white h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-xl mb-3 group-hover:text-blue-600 transition-colors">{category.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <div className={`h-1.5 ${category.bgColor} rounded-full mt-5 shadow-sm`}></div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 bg-gradient-to-r from-white to-blue-50 rounded-3xl p-8 text-center shadow-xl border-0 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mb-4 shadow-lg">
            <span className="text-xl">✨</span>
          </div>
          <h4 className="font-bold text-gray-800 text-xl mb-3">
            Material Completo e Versátil
          </h4>
          <p className="text-gray-600 leading-relaxed">
            35 livros adaptáveis para qualquer contexto cristão. 
            <br />
            <strong className="text-blue-600">Pronto para imprimir e usar imediatamente!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}