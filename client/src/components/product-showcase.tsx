import { Card } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import new carousel images
import arcaDeNoe from "@assets/image_1753360687579.png";
import pascoa from "@assets/image1_1753360687579.png";
import daviEGolias from "@assets/image2_1753360687580.png";
import jonas from "@assets/image3_1753360687580.png";
import adaoEEva from "@assets/image4_1753360687580.png";
import moises from "@assets/image5_1753360687580.png";
import pedroDiscipulo from "@assets/image6_1753360687581.png";
import criacaoDoMundo from "@assets/image7_1753360687581.png";


export function ProductShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    containScroll: 'trimSnaps' 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const carouselBooks = [
    {
      title: "A Arca de Noé",
      image: arcaDeNoe,
      description: "História bíblica de Noé e os animais"
    },
    {
      title: "Páscoa Cristã",
      image: pascoa,
      description: "Celebrando a ressurreição de Jesus"
    },
    {
      title: "Davi e Golias",
      image: daviEGolias,
      description: "A coragem do pequeno Davi"
    },
    {
      title: "Jonas e a Baleia",
      image: jonas,
      description: "A história de Jonas e a baleia"
    },
    {
      title: "Adão e Eva",
      image: adaoEEva,
      description: "O primeiro casal criado por Deus"
    },
    {
      title: "Moisés",
      image: moises,
      description: "O libertador do povo de Deus"
    },
    {
      title: "Pedro Discípulo",
      image: pedroDiscipulo,
      description: "O pescador que seguiu Jesus"
    },
    {
      title: "A Criação do Mundo",
      image: criacaoDoMundo,
      description: "Como Deus criou todas as coisas"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-xl sm:text-2xl">📖</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Conheça Nossos Livros Cristãos
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
            Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa
          </p>
        </div>
        
        {/* Carousel container - mobile optimized */}
        <div className="relative mb-6">
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white/50 backdrop-blur-sm p-2 sm:p-3" ref={emblaRef}>
            <div className="flex">
              {carouselBooks.map((book, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-1">
                  <div className="relative w-full h-60 sm:h-72 bg-white rounded-xl shadow-lg overflow-hidden group">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 cursor-pointer rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons - mobile optimized */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/90 hover:bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/90 hover:bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </Button>
        </div>
        
        {/* Professional collection showcase */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 text-center shadow-xl border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl mb-3 shadow-md">
              <span className="text-lg">🎨</span>
            </div>
            <h4 className="font-heading text-xl font-bold mb-2">35 Livros de Colorir Cristãos</h4>
            <p className="text-sm opacity-90 mb-4">Transforme momentos especiais com sua família, célula e escola dominical</p>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <div className="text-yellow-300 text-lg mb-1">⭐</div>
                <div className="text-xs">Células</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <div className="text-orange-300 text-lg mb-1">🏠</div>
                <div className="text-xs">Escola Dominical</div>
              </div>
              <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                <div className="text-pink-300 text-lg mb-1">❤️</div>
                <div className="text-xs">Devocional Familiar</div>
              </div>
            </div>
            
            <div className="flex justify-center items-center space-x-4 text-xs opacity-75">
              <span>📥 Download Imediato</span>
              <span>🖨️ PDF Pronto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
