import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Clock, Gift } from "lucide-react";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos

  useEffect(() => {
    let isExiting = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !isExiting) {
        isExiting = true;
        setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 500);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        e.preventDefault();
        e.returnValue = '';
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePurchase = () => {
    // Aqui você vai colocar seu link de checkout com desconto
    window.open('https://seu-link-de-checkout-com-desconto.com', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="h-6 w-6 text-red-500" />
              <DialogTitle className="text-xl font-bold text-red-600">
                Espere! Oferta Especial
              </DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Gift className="h-10 w-10 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-red-600 mb-2">
              50% OFF Exclusivo!
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Não perca esta oportunidade única! Leve toda a coleção de 35 livros de colorir cristãos por apenas:
            </p>
            
            <div className="bg-white rounded-lg p-4 border-2 border-red-200 mb-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <p className="text-gray-500 line-through text-lg">R$ 10,00</p>
                  <p className="text-3xl font-bold text-red-600">R$ 5,00</p>
                </div>
                <div className="text-red-500 font-bold text-xl">→</div>
                <div className="text-center">
                  <p className="text-green-600 font-bold text-sm">ECONOMIA</p>
                  <p className="text-green-600 font-bold text-lg">R$ 5,00</p>
                </div>
              </div>
            </div>

            <div className="bg-red-100 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-red-600" />
                <p className="text-red-700 font-semibold">
                  Oferta expira em: {formatTime(timeLeft)}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handlePurchase}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              SIM! QUERO O DESCONTO DE 50%
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Não, obrigado. Prefiro pagar o preço cheio.
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              ⚡ Esta oferta é válida apenas para esta sessão e não se repetirá.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}