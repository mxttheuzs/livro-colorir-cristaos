import { Button } from "@/components/ui/button";
import { Gift, Download, Smartphone } from "lucide-react";
import arcaDeNoe from "@assets/CAPA_1753356882910.png";
import vidaDeJesus from "@assets/image_1753356866387.png";

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export function HeroSection({ onScrollToOffer }: HeroSectionProps) {
  return (
    <section className="bg-main-gradient px-4 py-12 text-center text-white min-h-screen flex items-center">
      <div className="max-w-sm mx-auto">
        {/* Book illustration */}
        <div className="mb-8 relative">
          <div className="w-48 h-40 mx-auto bg-white/20 rounded-2xl p-3 backdrop-blur-sm border border-white/30 flex items-center justify-center overflow-hidden">
            <div className="flex space-x-2">
              <img 
                src={arcaDeNoe} 
                alt="Livro A Arca de Noé"
                className="w-16 h-20 object-cover rounded-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-transform"
              />
              <img 
                src={vidaDeJesus} 
                alt="Livro A Vida de Jesus"
                className="w-16 h-20 object-cover rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform"
              />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-accent-yellow text-text-dark px-3 py-1 rounded-full text-sm font-bold">
            @gulemcnoel
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-fredoka text-4xl text-white mb-4 leading-tight">
          35 Livros de Colorir<br/>
          <span className="text-accent-yellow font-bold">Cristãos</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg text-text-light mb-8 leading-relaxed">
          Transforme momentos especiais com sua família,<br/>
          célula e escola dominical
        </p>
        
        {/* Features list */}
        <div className="mb-8 space-y-4 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-yellow rounded-full flex items-center justify-center">
              <span className="text-lg">⭐</span>
            </div>
            <span className="text-text-light">Células</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center">
              <span className="text-lg">🏠</span>
            </div>
            <span className="text-text-light">Escola Dominical</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-pink rounded-full flex items-center justify-center">
              <span className="text-lg">❤️</span>
            </div>
            <span className="text-text-light">Devocional Familiar</span>
          </div>
        </div>
        
        {/* Hero CTA */}
        <Button 
          onClick={onScrollToOffer}
          className="w-full bg-accent-yellow hover:bg-yellow-500 text-text-dark font-bold py-4 px-6 rounded-2xl text-lg shadow-xl transition-all transform hover:scale-105 mb-4 h-auto"
        >
          <Gift className="mr-2 h-5 w-5" />
          QUERO AGORA - R$ 10,00
        </Button>
        
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-4 text-sm text-text-light">
          <span className="flex items-center">
            <Download className="mr-1 h-4 w-4" />
            Download Imediato
          </span>
          <span className="flex items-center">
            <Smartphone className="mr-1 h-4 w-4" />
            PDF Pronto
          </span>
        </div>
      </div>
    </section>
  );
}
