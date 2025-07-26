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
    <section className="px-3 py-6 bg-gray-100">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-4">
          <h3 className="font-bold text-gray-800 text-lg mb-2">
            O que nossos clientes dizem
          </h3>
          
          {/* 5 Star Rating */}
          <div className="flex justify-center mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          
          {/* Rating Text */}
          <p className="text-gray-600 text-xs font-medium mb-3">
            4,9/5 - 347 avaliações
          </p>
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
                  <Card className="bg-white rounded-lg p-3 border-0 shadow-md">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-xs">{testimonial.name}</h4>
                        <p className="text-gray-600 text-xs mb-1">{testimonial.role}</p>
                        <div className="flex text-yellow-400">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-xs leading-tight italic">
                      "{testimonial.text}"
                    </blockquote>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white rounded-full p-1 shadow-md z-10"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>
          
          <button
            onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white rounded-full p-1 shadow-md z-10"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
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
