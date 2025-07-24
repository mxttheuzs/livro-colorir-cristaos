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
    <section id="offer" className="px-4 py-8 bg-offer-gradient text-white">
      <div className="max-w-sm mx-auto text-center">
        <h3 className="font-fredoka text-2xl mb-4">
          🎉 Oferta Especial Limitada!
        </h3>
        
        {/* Price comparison */}
        <Card className="bg-white/20 rounded-xl p-4 mb-6 border-0">
          <p className="text-sm opacity-90 mb-2">De R$ 35,00 por apenas:</p>
          <p className="font-fredoka text-4xl mb-2">R$ 10,00</p>
          <p className="text-sm opacity-90">35 livros completos</p>
        </Card>
        
        {/* Urgency timer */}
        <Card className="bg-white/10 rounded-xl p-3 mb-6 border-0">
          <p className="text-sm font-semibold mb-2 flex items-center justify-center">
            <Clock className="mr-1 h-4 w-4" />
            Oferta termina em:
          </p>
          <div className="flex justify-center space-x-4 text-center">
            <div>
              <span className="font-fredoka text-xl block">{hours.toString().padStart(2, '0')}</span>
              <span className="text-xs">HORAS</span>
            </div>
            <div>
              <span className="font-fredoka text-xl block">{minutes.toString().padStart(2, '0')}</span>
              <span className="text-xs">MIN</span>
            </div>
            <div>
              <span className="font-fredoka text-xl block">{seconds.toString().padStart(2, '0')}</span>
              <span className="text-xs">SEG</span>
            </div>
          </div>
        </Card>
        
        {/* Main CTA */}
        <Button 
          onClick={onPurchase}
          className="w-full bg-white text-primary-pink hover:bg-gray-50 font-semibold py-4 px-6 rounded-2xl text-lg shadow-lg transition-colors mb-4 h-auto"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          COMPRAR AGORA - R$ 10,00
        </Button>
        
        {/* Payment methods */}
        <div className="flex justify-center items-center space-x-3 text-sm opacity-90">
          <FaCcVisa className="h-5 w-5" />
          <FaCcMastercard className="h-5 w-5" />
          <FaCcPaypal className="h-5 w-5" />
          <SiPix className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
