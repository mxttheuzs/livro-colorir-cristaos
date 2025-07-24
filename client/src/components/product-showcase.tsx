import { Card } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import carousel images
import arcaDeNoe from "@assets/image_1753356866387.png";
import vidaDeJesus from "@assets/CAPA_1753356882910.png";
import colorindoComJesus from "@assets/01-CAPA SEM BORDA_1753356895706.png";
import daviEGolias from "@assets/CAPA (2)_1753356935185.jpg";
import jonas from "@assets/CAPA (17)_1753356949274.jpg";
import mariaMae from "@assets/2_1753356962176.png";
import moises from "@assets/1 - CAPA_1753356980711.png";
import newColoringBook from "@assets/image_1753358252594.png";

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
      title: "A Vida de Jesus",
      image: vidaDeJesus,
      description: "Conhecendo a vida de nosso Salvador"
    },
    {
      title: "Colorindo com Jesus",
      image: colorindoComJesus,
      description: "Momentos especiais com Jesus"
    },
    {
      title: "Davi e Golias",
      image: daviEGolias,
      description: "A coragem do pequeno Davi"
    },
    {
      title: "Jonas",
      image: jonas,
      description: "A história de Jonas e a baleia"
    },
    {
      title: "Maria Mãe de Jesus",
      image: mariaMae,
      description: "A história da mãe de Jesus"
    },
    {
      title: "Moisés",
      image: moises,
      description: "O libertador do povo de Deus"
    },
    {
      title: "Colorir com Devocional Infantil",
      image: newColoringBook,
      description: "Páginas para colorir com ensinamentos bíblicos"
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
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {carouselBooks.map((book, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="bg-white text-center">
                    <div className="relative w-full h-80 mb-3 overflow-hidden">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-bold text-text-dark mb-1">{book.title}</h4>
                    <p className="text-xs text-text-medium">{book.description}</p>
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
