import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Clock } from "lucide-react";
import { useCountdown } from "@/hooks/use-countdown";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiPix } from "react-icons/si";

interface OfferSectionProps {
  onPurchase: () => void;
}

export function OfferSection({ onPurchase }: OfferSectionProps) {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section id="offer" className="px-4 py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-red-600/90 backdrop-blur-sm"></div>
      <div className="max-w-sm mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 shadow-lg">
            <span className="text-2xl">🎉</span>
          </div>
          <h3 className="font-heading text-3xl font-bold mb-3">
            Oferta Especial Limitada!
          </h3>
          <p className="text-orange-100 text-base leading-relaxed">
            Aproveite o preço promocional por tempo limitado
          </p>
        </div>
        
        {/* Price comparison */}
        <Card className="glass-card rounded-3xl p-8 mb-8 border-0 text-gray-800">
          <p className="text-gray-600 mb-3 line-through text-lg">De R$ 35,00</p>
          <div className="mb-4">
            <span className="text-5xl font-bold gradient-text">R$ 10</span>
            <span className="text-2xl text-gray-600">,00</span>
          </div>
          <p className="text-gray-700 font-semibold">35 livros completos</p>
          <div className="mt-4 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-2xl text-sm font-bold">
            70% DE DESCONTO
          </div>
        </Card>
        
        {/* Urgency timer */}
        <Card className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-8 border border-white/30">
          <p className="text-white font-semibold mb-4 flex items-center justify-center text-lg">
            <Clock className="mr-2 h-5 w-5" />
            Oferta termina em:
          </p>
          <div className="flex justify-center space-x-6 text-center">
            <div className="bg-white/20 rounded-2xl p-3 min-w-[60px]">
              <span className="font-heading text-2xl font-bold block text-white">{hours.toString().padStart(2, '0')}</span>
              <span className="text-xs text-orange-100 font-medium">HORAS</span>
            </div>
            <div className="bg-white/20 rounded-2xl p-3 min-w-[60px]">
              <span className="font-heading text-2xl font-bold block text-white">{minutes.toString().padStart(2, '0')}</span>
              <span className="text-xs text-orange-100 font-medium">MIN</span>
            </div>
            <div className="bg-white/20 rounded-2xl p-3 min-w-[60px]">
              <span className="font-heading text-2xl font-bold block text-white">{seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs text-orange-100 font-medium">SEG</span>
            </div>
          </div>
        </Card>
        
        {/* Main CTA */}
        <Button 
          onClick={onPurchase}
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800 font-bold py-6 px-8 rounded-3xl text-xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-3xl mb-6 h-auto"
        >
          <ShoppingCart className="mr-3 h-6 w-6" />
          COMPRAR AGORA - R$ 10,00
        </Button>
        
        {/* Payment methods */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="text-white/80 text-sm mb-3 font-medium">Pagamento 100% seguro:</p>
          <div className="flex justify-center items-center space-x-4 text-white/90">
            <FaCcVisa className="h-6 w-6" />
            <FaCcMastercard className="h-6 w-6" />
            <FaCcPaypal className="h-6 w-6" />
            <SiPix className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
