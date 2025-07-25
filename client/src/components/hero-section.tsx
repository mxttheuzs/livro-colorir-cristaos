import { Button } from "@/components/ui/button";
import { Gift, Download, Smartphone } from "lucide-react";
import heroImage from "@assets/Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7_1753359381913.png";
import logo from "@assets/515496816_122165020232481708_4631810946756284690_n_1753357778839.jpg";

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export function HeroSection({ onScrollToOffer }: HeroSectionProps) {
  return (
    <section className="bg-main-gradient px-3 py-8 text-center text-white min-h-screen flex items-center">
      <div className="w-full max-w-xs mx-auto">
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
        
        {/* Main Headline - Emotional Hook */}
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
          🚨 <span className="text-red-300">ÚLTIMA CHANCE!</span><br/>
          35 Livros que Transformam<br/>
          <span className="text-accent-yellow font-extrabold">Corações Infantis</span>
        </h1>
        
        {/* Emotional Subheadline */}
        <p className="text-sm sm:text-base lg:text-lg font-medium text-text-light mb-4 leading-relaxed px-2">
          <span className="text-accent-yellow font-bold">HOJE APENAS R$ 10,00</span><br/>
          💔 <em>Não deixe seus filhos crescerem sem valores cristãos sólidos</em>
        </p>

        {/* Urgency Badge */}
        <div className="bg-red-500 text-white px-4 py-2 rounded-full mb-6 shadow-xl animate-pulse">
          <span className="text-xs font-bold">⏰ OFERTA EXPIRA EM POUCAS HORAS!</span>
        </div>
        
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
        
        {/* Emotional CTA */}
        <Button 
          onClick={onScrollToOffer}
          className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 sm:py-5 px-4 sm:px-6 rounded-full text-base sm:text-lg lg:text-xl shadow-2xl transition-all transform hover:scale-110 hover:shadow-3xl mb-4 h-auto uppercase tracking-wide animate-pulse"
        >
          🔥 GARANTO MEU DESCONTO AGORA!
        </Button>
        
        {/* Social Proof Micro */}
        <p className="text-xs text-text-light/80 mb-4">
          ⭐ Mais de 2.847 famílias já transformaram seus lares
        </p>
        
        {/* Trust indicators - mobile responsive */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-text-light">
        </div>
      </div>
    </section>
  );
}
