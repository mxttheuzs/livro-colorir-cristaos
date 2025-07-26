import { Button } from "@/components/ui/button";
import { Gift, Download, Smartphone } from "lucide-react";
import heroImage from "@assets/image_1753553780767.png";
import logo from "@assets/515496816_122165020232481708_4631810946756284690_n_1753357778839.jpg";

import Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7 from "@assets/Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7.png";

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export function HeroSection({ onScrollToOffer }: HeroSectionProps) {
  return (
    <section className="bg-main-gradient px-4 py-6 text-center text-white min-h-screen flex items-center">
      <div className="w-full max-w-sm mx-auto">
        {/* Logo */}
        <div className="mb-4">
          <img 
            src={logo} 
            alt="Luz do Céu Kids"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full shadow-xl bg-white/20 p-2 backdrop-blur-sm border border-white/30"
          />
        </div>
        
        {/* Hero image - optimized for mobile */}
        <div className="mb-6 flex justify-center">
          <img 
            src={Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7} 
            alt="35 Livros de Colorir Cristãos"
            className="w-full max-w-[240px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Main Headline - mobile optimized */}
        <h1 className="font-heading text-3xl font-bold text-white mb-3 leading-tight">
          35 Livros de Colorir<br/>
          <span className="text-accent-yellow font-extrabold">Cristãos</span>
        </h1>
        
        {/* Subheadline - responsive text */}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-text-light mb-6 leading-relaxed px-2">
          Transforme momentos especiais com sua família, célula e escola dominical
        </p>
        
        {/* Features list - mobile optimized */}
        <div className="mb-6 space-y-3 text-left">
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-yellow rounded-full flex items-center justify-center shadow-md">
              <span className="text-base sm:text-lg">⭐</span>
            </div>
            <span className="text-text-light font-medium text-sm sm:text-base">Células</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-orange rounded-full flex items-center justify-center shadow-md">
              <span className="text-base sm:text-lg">🏠</span>
            </div>
            <span className="text-text-light font-medium text-sm sm:text-base">Escola Dominical</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent-pink rounded-full flex items-center justify-center shadow-md">
              <span className="text-base sm:text-lg">❤️</span>
            </div>
            <span className="text-text-light font-medium text-sm sm:text-base">Devocional Familiar</span>
          </div>
        </div>
        
        {/* Hero CTA - mobile optimized */}
        <Button 
          onClick={onScrollToOffer}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-6 rounded-full text-lg shadow-2xl transition-all transform hover:scale-105 hover:shadow-3xl mb-4 h-auto uppercase tracking-wide animate-pulse-slow"
        >
          QUERO VER AS OFERTAS
        </Button>
        
        {/* Trust indicators - mobile responsive */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-text-light">
        </div>
      </div>
    </section>
  );
}
