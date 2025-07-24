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
    <section className="px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl">📚</span>
          </div>
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
            Conheça Nossos Livros Cristãos
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Histórias bíblicas ilustradas com amor e cuidado
          </p>
        </div>
        
        {/* Carousel container */}
        <div className="relative mb-10">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white/50 backdrop-blur-sm p-4" ref={emblaRef}>
            <div className="flex">
              {carouselBooks.map((book, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="relative w-full h-80 bg-white rounded-2xl shadow-lg overflow-hidden group">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 cursor-pointer rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl bg-white/90 hover:bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl bg-white/90 hover:bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
        
        {/* Total count */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 text-center shadow-2xl border-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 shadow-lg">
              <span className="text-xl">✨</span>
            </div>
            <p className="font-heading text-2xl font-bold mb-2">+ 27 Livros Adicionais!</p>
            <p className="text-lg font-semibold opacity-90">Total: 35 Livros Completos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
