import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

interface ExitIntentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAcceptOffer: () => void;
}

export function ExitIntentModal({ open, onOpenChange, onAcceptOffer }: ExitIntentModalProps) {
  const handleAcceptOffer = () => {
    onAcceptOffer();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm mx-auto p-6 rounded-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="text-red-500 h-8 w-8" />
          </div>
          <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
            ⏰ Espere! Oferta Especial!
          </h3>
          <p className="text-sm text-text-medium mb-4">
            Que tal levar os 35 livros com <strong>50% de desconto?</strong>
          </p>
          <div className="bg-secondary-blue rounded-xl p-3 mb-4">
            <p className="text-primary-blue font-bold text-lg">
              De R$ 10,00 por apenas R$ 5,00
            </p>
            <p className="text-sm text-primary-blue font-semibold">Cupom: VOLTA50</p>
          </div>
          <div className="space-y-3">
            <Button 
              onClick={handleAcceptOffer}
              className="w-full bg-accent-yellow hover:bg-yellow-500 text-text-dark font-bold py-3 px-4 rounded-xl h-auto"
            >
              Sim! Quero o Desconto
            </Button>
            <Button 
              onClick={() => onOpenChange(false)}
              variant="secondary"
              className="w-full bg-gray-200 hover:bg-gray-300 text-text-medium font-semibold py-3 px-4 rounded-xl h-auto"
            >
              Não, Obrigado
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
