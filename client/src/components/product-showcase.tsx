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
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-sm mx-auto">
        <h3 className="font-heading text-3xl font-bold text-center text-text-dark mb-8">
          📚 Conheça Nossos Livros Cristãos
        </h3>
        
        {/* Carousel container */}
        <div className="relative mb-6">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {carouselBooks.map((book, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-1">
                  <div className="relative w-full h-96">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-102 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white border-0 shadow-md"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4 text-text-dark" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white border-0 shadow-md"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4 text-text-dark" />
          </Button>
        </div>
        
        {/* Total count */}
        <div className="bg-main-gradient text-white rounded-2xl p-6 text-center shadow-xl">
          <p className="font-heading text-2xl font-bold mb-2">+ 28 Livros Adicionais!</p>
          <p className="text-lg font-semibold">Total: 35 Livros Completos</p>
        </div>
      </div>
    </section>
  );
}
