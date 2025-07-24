import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      initial: "M",
      rating: 5,
      text: "Meus filhos adoraram! Conseguimos passar horas colorindo e conversando sobre as histórias da Bíblia. Muito educativo!",
      bgColor: "bg-secondary-yellow"
    },
    {
      name: "Ana Santos", 
      initial: "A",
      rating: 5,
      text: "Excelente qualidade! Os desenhos são lindos e as crianças aprendem brincando. Recomendo para todas as mães!",
      bgColor: "bg-secondary-light-blue"
    }
  ];

  return (
    <section className="px-4 py-8 bg-white">
      <div className="max-w-sm mx-auto">
        <h3 className="font-fredoka text-2xl text-center text-text-dark mb-6">
          💝 O que as mamães dizem:
        </h3>
        
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`${testimonial.bgColor} rounded-xl p-4 border-0 shadow-sm`}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-text-dark text-sm">{testimonial.name}</p>
                  <div className="flex text-yellow-400 text-xs">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-medium leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
