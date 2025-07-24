import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppSection() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "5511999999999";
    const message = "Olá! Tenho interesse nos livros de colorir cristão. Podem me ajudar?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="px-4 py-8 bg-green-500 text-white">
      <div className="max-w-sm mx-auto">
        <Card className="bg-white/20 rounded-xl p-4 text-center border-0">
          <h3 className="font-fredoka text-lg mb-3">
            💬 Dúvidas? Fale conosco!
          </h3>
          <p className="text-sm mb-4 opacity-90">
            Nossa equipe está pronta para ajudar você
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-green-500 hover:bg-gray-50 font-semibold py-3 px-6 rounded-2xl text-sm shadow-lg transition-colors h-auto"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </Card>
      </div>
    </section>
  );
}
