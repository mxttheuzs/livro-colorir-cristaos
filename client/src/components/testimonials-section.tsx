import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import mariaPhoto from "@assets/c_1753391313706.webp";
import pastorPhoto from "@assets/x_1753391316797.webp";
import carolinaPhoto from "@assets/z_1753391318305.webp";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Fernanda",
      photo: mariaPhoto,
      role: "Mãe de 2 crianças",
      rating: 5,
      text: "Meus filhos adoraram! Conseguimos passar horas colorindo e conversando sobre as histórias da Bíblia. Muito educativo e de excelente qualidade!",
    },
    {
      name: "Pastor Roberto",
      photo: pastorPhoto,
      role: "Líder de Ministério Infantil",
      rating: 5,
      text: "Utilizamos os livros em nossa escola dominical e o resultado foi incrível. As crianças ficam mais engajadas e aprendem brincando. Material de alta qualidade!",
    },
    {
      name: "Carolina Santos",
      photo: carolinaPhoto,
      role: "Coordenadora de Célula",
      rating: 5,
      text: "Perfeito para nossas células familiares! Os desenhos são lindos e as histórias bíblicas são contadas de forma simples e educativa. Super recomendo!",
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-xl sm:text-2xl">💝</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            O que nossos clientes dizem
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
            Depoimentos reais de famílias que já transformaram seus momentos
          </p>
        </div>
        
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2">{testimonial.role}</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-green-100 rounded-xl p-4">
            <p className="text-green-800 font-semibold text-sm">
              Mais de 1.500 famílias já transformaram seus momentos de fé
            </p>
            <p className="text-green-600 text-xs mt-1">
              Junte-se a elas hoje mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
