import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import mariaPhoto from "@assets/c_1753391313706.webp";
import pastorPhoto from "@assets/x_1753391316797.webp";
import carolinaPhoto from "@assets/z_1753391318305.webp";

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Maria Fernanda S.",
      photo: mariaPhoto,
      role: "Mãe de 2 crianças - SP",
      rating: 5,
      text: "Estava preocupada com o tempo que meus filhos passavam no celular. Estes livros trouxeram uma mudança muito positiva! Agora eles pedem para colorir e fazem perguntas sobre as histórias bíblicas. Estou muito satisfeita.",
      result: "Mudança positiva na família"
    },
    {
      name: "Pastor Roberto M.",
      photo: pastorPhoto,
      role: "25 anos de Ministério Infantil - RJ",
      rating: 5,
      text: "Em 25 anos de trabalho com crianças, estes livros são realmente especiais! As crianças ficam concentradas e engajadas. Muitos pais têm comentado sobre a diferença no comportamento dos filhos.",
      result: "Excelente ferramenta educativa"
    },
    {
      name: "Carolina Santos",
      photo: carolinaPhoto,
      role: "Líder de Célula - MG",
      rating: 5,
      text: "Usei estes livros na célula e o resultado foi maravilhoso! As crianças se envolveram completamente com as atividades. Os pais ficaram impressionados com o conteúdo de qualidade.",
      result: "Atividade de sucesso na igreja"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-bold text-blue-600 text-2xl mb-2">
            O que Nossas Famílias Dizem
          </h3>
          <p className="text-gray-600 text-base mb-4">
            Experiências reais de quem já adquiriu nossos livros
          </p>
          
          {/* Enhanced rating display */}
          <div className="bg-white rounded-lg p-4 shadow-lg mb-6">
            <div className="flex justify-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-7 w-7 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-green-600 text-lg font-bold mb-2">
              4,9/5 ⭐ Excelente Avaliação
            </p>
            <p className="text-gray-600 text-sm">
              Baseado em 2.847 famílias transformadas
            </p>
          </div>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-white to-green-50 border-2 border-green-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    
                    {/* Result Badge */}
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                      ✅ RESULTADO COMPROVADO
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-4 flex-shrink-0 shadow-md border-2 border-green-300">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-green-700 text-xs sm:text-sm mb-2 font-medium">{testimonial.role}</p>
                        <div className="flex text-yellow-400 mb-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        
                        {/* Result highlight */}
                        <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-2 py-1">
                          <p className="text-yellow-800 text-xs font-bold">
                            🎯 {testimonial.result}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 text-sm leading-relaxed font-medium border-l-4 border-green-300 pl-4 bg-green-50 p-3 rounded-r-lg">
                      {testimonial.text}
                    </blockquote>
                    
                    {/* Credibility footer */}
                    <div className="mt-4 pt-3 border-t border-green-200">
                      <p className="text-green-600 text-xs font-bold text-center">
                        ✅ Depoimento verificado e autêntico
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <button
            onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-xl p-4">
            <p className="text-red-600 font-bold text-lg mb-2">
              🚨 NÃO SEJA O ÚLTIMO!
            </p>
            <p className="text-gray-800 font-bold text-sm mb-2">
              2.847 famílias já transformaram seus lares
            </p>
            <p className="text-red-600 text-xs font-medium">
              ⚠️ Enquanto você hesita, outras famílias estão se transformando!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
