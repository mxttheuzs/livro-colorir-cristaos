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

// Import additional carousel images
import cristaoMenina from "@assets/1 (1)_1753391807468.webp";
import cristaoMenino from "@assets/2_1753391811735.webp";
import yeshua from "@assets/3_1753391813174.webp";


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
    },
    {
      title: "Cristão Menina",
      image: cristaoMenina,
      description: "Livros especiais para meninas cristãs"
    },
    {
      title: "Cristão Menino",
      image: cristaoMenino,
      description: "Aventuras cristãs para meninos"
    },
    {
      title: "Yeshua",
      image: yeshua,
      description: "Conhecendo Jesus através da arte"
    }
  ];

  return (
    <section className="px-3 py-12 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-xs mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Conheça Nossos Livros Cristãos
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
            Histórias bíblicas cuidadosamente ilustradas para ensinar valores cristãos de forma lúdica e educativa
          </p>
        </div>
        
        {/* Carousel container - 2 larger images side by side */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {carouselBooks.map((book, index) => (
                <div key={index} className="flex-[0_0_50%] min-w-0 px-2">
                  <div className="relative group">
                    {/* Book image with rounded corners - much larger size */}
                    <div className="relative w-full h-56 sm:h-64 bg-white rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons - positioned like reference */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4 text-gray-700" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4 text-gray-700" />
          </Button>
        </div>
        
        {/* CTA Button below carousel - like reference design */}
        <div className="text-center">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-sm shadow-lg transition-all duration-300 hover:scale-105"
          >
            QUERO VER AS OFERTAS
          </Button>
        </div>
        
        
      </div>
    </section>
  );
}
