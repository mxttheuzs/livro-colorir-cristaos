import { Button } from "@/components/ui/button";
import { Gift, Download, Smartphone } from "lucide-react";

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export function HeroSection({ onScrollToOffer }: HeroSectionProps) {
  return (
    <section className="bg-hero-gradient px-4 py-8 text-center">
      <div className="max-w-sm mx-auto">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="font-fredoka text-2xl text-primary-blue mb-2">✨ Luz do Céu Kids ✨</h1>
          <p className="text-sm text-text-medium">Livros de Colorir Cristão</p>
        </div>
        
        {/* Main Headline */}
        <h2 className="font-fredoka text-3xl text-text-dark mb-4 leading-tight">
          35 Livros de Colorir<br/>
          <span className="text-primary-pink">Cristão para Crianças</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-lg text-text-medium mb-6 leading-relaxed">
          Ensine valores cristãos de forma divertida! <br/>
          <strong>Histórias bíblicas + atividades educativas</strong>
        </p>
        
        {/* Hero CTA */}
        <Button 
          onClick={onScrollToOffer}
          className="w-full bg-primary-pink hover:bg-pink-600 text-white font-semibold py-4 px-6 rounded-2xl text-lg shadow-lg transition-colors mb-4 h-auto"
        >
          <Gift className="mr-2 h-5 w-5" />
          Quero os 35 Livros Agora!
        </Button>
        
        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-4 text-sm text-text-medium">
          <span className="flex items-center">
            <Download className="mr-1 h-4 w-4 text-accent-green" />
            Download Imediato
          </span>
          <span className="flex items-center">
            <Smartphone className="mr-1 h-4 w-4 text-primary-blue" />
            PDF Pronto
          </span>
        </div>
      </div>
    </section>
  );
}
