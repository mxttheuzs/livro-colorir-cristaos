import { Card } from "@/components/ui/card";
import { Book } from "lucide-react";
import direitoRevenda from "@assets/DIREITO DE REVENDA_1753356063469.png";
import plannerDevocional from "@assets/Design sem nome (2)_1753356060926.png";
import livroAtividades from "@assets/Design sem nome (3)_1753356061901.png";
import desafioBiblico from "@assets/Design sem nome_1753356062721.png";

export function ProductShowcase() {
  const products = [
    {
      title: "Cristão Menina",
      pages: "12 páginas", 
      image: direitoRevenda,
      bgColor: "from-pink-100 to-pink-200"
    },
    {
      title: "Planner Devocional",
      pages: "15 páginas",
      image: plannerDevocional,
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      title: "Livro de Atividades",
      pages: "10 páginas",
      image: livroAtividades,
      bgColor: "from-yellow-100 to-yellow-200"
    },
    {
      title: "Desafio Bíblico",
      pages: "8 páginas",
      image: desafioBiblico,
      bgColor: "from-green-100 to-green-200"
    }
  ];

  return (
    <section className="px-4 py-8 bg-white">
      <div className="max-w-sm mx-auto">
        <h3 className="font-fredoka text-2xl text-center text-text-dark mb-6">
          📚 O que você vai receber:
        </h3>
        
        {/* Product preview grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {products.map((product, index) => (
            <Card key={index} className={`bg-gradient-to-br ${product.bgColor} rounded-xl p-3 text-center border-0 shadow-sm`}>
              <div className="relative w-full h-20 mb-2 rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs font-medium text-text-dark">{product.title}</p>
              <p className="text-xs text-text-medium">{product.pages}</p>
            </Card>
          ))}
        </div>
        
        {/* Total count */}
        <div className="bg-offer-gradient text-white rounded-xl p-4 text-center">
          <p className="font-fredoka text-xl">+ 31 Livros Adicionais!</p>
          <p className="text-sm opacity-90">Total: 35 Livros Completos</p>
        </div>
      </div>
    </section>
  );
}
