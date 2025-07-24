import { Button } from "@/components/ui/button";
import { Gift, Download, Smartphone } from "lucide-react";
import heroImage from "@assets/Ekudb9tLyf6p1rSpCtDzYLG20DMvZ0kVSu1DFct7_1753357726479.png";

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export function HeroSection({ onScrollToOffer }: HeroSectionProps) {
  return (
    <section className="bg-main-gradient px-4 py-12 text-center text-white min-h-screen flex items-center">
      <div className="max-w-sm mx-auto">
        {/* Hero image */}
        <div className="mb-10">
          <div className="w-52 h-44 mx-auto bg-white/25 rounded-3xl p-4 backdrop-blur-md border border-white/40 flex items-center justify-center overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="35 Livros de Colorir Cristãos"
              className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-heading text-4xl font-bold text-white mb-4 leading-tight">
          35 Livros de Colorir<br/>
          <span className="text-accent-yellow font-extrabold">Cristãos</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg font-medium text-text-light mb-8 leading-relaxed">
          Transforme momentos especiais com sua família,<br/>
          célula e escola dominical
        </p>
        
        {/* Features list */}
        <div className="mb-10 space-y-5 text-left">
          <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center shadow-md">
              <span className="text-lg">⭐</span>
            </div>
            <span className="text-text-light font-medium text-lg">Células</span>
          </div>
          <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <div className="w-10 h-10 bg-accent-orange rounded-full flex items-center justify-center shadow-md">
              <span className="text-lg">🏠</span>
            </div>
            <span className="text-text-light font-medium text-lg">Escola Dominical</span>
          </div>
          <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <div className="w-10 h-10 bg-accent-pink rounded-full flex items-center justify-center shadow-md">
              <span className="text-lg">❤️</span>
            </div>
            <span className="text-text-light font-medium text-lg">Devocional Familiar</span>
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
