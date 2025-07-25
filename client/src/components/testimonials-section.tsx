import { Star } from "lucide-react";

export function TestimonialsSection() {

  return (
    <section className="px-3 py-12 bg-gray-100">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center">
          <h3 className="font-bold text-gray-800 text-xl mb-4">
            O que nossos clientes dizem
          </h3>
          
          {/* 5 Star Rating */}
          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          
          {/* Rating Text */}
          <p className="text-gray-600 text-base font-medium">
            4,9/5 - 347 avaliações
          </p>
        </div>
      </div>
    </section>
  );
}
