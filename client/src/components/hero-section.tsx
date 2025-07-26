import { Button } from "@/components/ui/button";
import { Gift, Download, Smartphone } from "lucide-react";
import heroImage from "@assets/Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7_1753359381913.png";
import logo from "@assets/515496816_122165020232481708_4631810946756284690_n_1753357778839.jpg";

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export function HeroSection({ onScrollToOffer }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-8 text-center text-white min-h-screen flex items-center">
      <div className="w-full max-w-sm mx-auto">
        {/* Logo */}
        <div className="mb-4">
          <img 
            src={logo} 
            alt="Luz do Céu Kids"
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full shadow-xl bg-white/20 p-2 backdrop-blur-sm border border-white/30"
          />
        </div>
        
        {/* Hero image - constrained for mobile */}
        <div className="mb-6">
          <img 
            src={heroImage} 
            alt="35 Livros de Colorir Cristãos"
            className="w-full max-w-[280px] sm:max-w-sm mx-auto object-contain rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Main Headline - mobile optimized */}
        <h1 className="text-2xl font-bold text-white mb-3 leading-tight">
          35 Livros de Colorir<br/>
          <span className="text-yellow-300 font-extrabold">Cristãos</span>
        </h1>
        
        {/* Subheadline - mobile optimized */}
        <p className="text-sm font-medium text-blue-100 mb-6 leading-relaxed px-2">
          Transforme momentos especiais com sua família, célula e escola dominical
        </p>
        
        {/* Features list - simplified for mobile */}
        <div className="mb-6 space-y-2 text-left">
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">⭐</span>
            </div>
            <span className="text-blue-100 font-medium text-sm">Células</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">🏠</span>
            </div>
            <span className="text-blue-100 font-medium text-sm">Escola Dominical</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">❤️</span>
            </div>
            <span className="text-blue-100 font-medium text-sm">Devocional Familiar</span>
          </div>
        </div>
        
        {/* Hero CTA - mobile only */}
        <Button 
          onClick={onScrollToOffer}
          className="w-full bg-green-500 active:bg-green-600 text-white font-bold py-4 px-4 rounded-full text-base shadow-2xl mb-4 h-auto uppercase tracking-wide touch-manipulation"
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
