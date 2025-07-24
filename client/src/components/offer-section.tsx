import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiPix } from "react-icons/si";

interface OfferSectionProps {
  onPurchase: () => void;
}

export function OfferSection({ onPurchase }: OfferSectionProps) {
  
  // Get current date and format it
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  return (
    <section id="offer" className="px-4 py-16 bg-gray-50">
      <div className="max-w-sm mx-auto">
        {/* Limited offer badge */}
        <div className="bg-red-500 text-white rounded-full px-6 py-3 text-center mb-6 shadow-lg">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-bold text-sm">OFERTA LIMITADA - Apenas no dia {getCurrentDate()}</span>
          </div>
        </div>
        
        {/* Main title */}
        <div className="text-center mb-8">
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-3">
            Escolha Sua Oferta Especial
          </h3>
          <p className="text-gray-600 text-base leading-relaxed">
            Livros de qualidade profissional para enriquecer seus momentos de fé
          </p>
        </div>
        
        {/* Pricing card */}
        <Card className="bg-gray-100 rounded-3xl p-8 mb-8 border-0 text-center relative overflow-hidden">
          {/* Star icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-2xl mb-4 shadow-lg">
            <span className="text-xl">⭐</span>
          </div>
          
          <h4 className="font-bold text-gray-800 text-xl mb-4">Pacote Básico</h4>
          
          {/* Original price */}
          <p className="text-gray-500 line-through text-lg mb-2">R$ 47,00</p>
          
          {/* Discount badge */}
          <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
            -79%
          </div>
          
          {/* Current price */}
          <div className="mb-4">
            <span className="text-5xl font-bold text-green-600">R$ 10</span>
            <span className="text-2xl text-green-600">,00</span>
          </div>
          
          {/* Savings */}
          <p className="text-gray-600 text-sm mb-6">Você economiza R$ 37,00</p>
          
          {/* Features */}
          <div className="space-y-2 mb-6 text-left">
            <p className="text-gray-700 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              35 Livros de Colorir Completos
            </p>
            <p className="text-gray-700 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Download Imediato
            </p>
            <p className="text-gray-700 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Acesso Vitalício
            </p>
            <p className="text-gray-700 flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Garantia de 7 dias
            </p>
          </div>
        </Card>
        
        {/* Premium package */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-8 border-2 border-yellow-300 relative overflow-hidden">
          {/* Premium badge */}
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-bold">
            POPULAR
          </div>
          
          {/* Crown icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl mb-4 shadow-lg">
            <span className="text-xl">👑</span>
          </div>
          
          <h4 className="font-bold text-gray-800 text-xl mb-4">Pacote Premium</h4>
          
          {/* Current price */}
          <div className="mb-4">
            <span className="text-5xl font-bold text-green-600">R$ 17</span>
            <span className="text-2xl text-green-600">,00</span>
          </div>
          
          {/* Savings */}
          <p className="text-gray-600 text-sm mb-6">Você economiza R$ 239,00</p>
          
          {/* Main package */}
          <div className="bg-green-100 rounded-2xl p-4 mb-4">
            <p className="font-bold text-gray-800 text-center">TUDO DO PACOTE BÁSICO +</p>
          </div>
          
          {/* Bonuses */}
          <div className="space-y-3 mb-6">
            <div className="bg-yellow-100 rounded-xl p-3 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🎁</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">BÔNUS 1: 2 Novos livros/mês</p>
                <p className="text-gray-600 text-xs">R$ 59/ano</p>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded-xl p-3 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🎁</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">BÔNUS 2: Vídeos de Histórias Bíblicas</p>
                <p className="text-gray-600 text-xs">R$ 27,00</p>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded-xl p-3 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🎁</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">BÔNUS 3: 15 Versículos Ilustrados</p>
                <p className="text-gray-600 text-xs">R$ 19,00</p>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded-xl p-3 flex items-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-3">
                <span className="text-sm">🎁</span>
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">BÔNUS 4: Calendário Bíblico Semanal</p>
                <p className="text-gray-600 text-xs">R$ 35,00</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* CTA Buttons */}
        <div className="space-y-4 mb-8">
          <Button 
            onClick={onPurchase}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-3xl text-xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-3xl h-auto"
          >
            <ShoppingCart className="mr-3 h-6 w-6" />
            COMPRAR PACOTE BÁSICO - R$ 10,00
          </Button>
          
          <Button 
            onClick={onPurchase}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-6 px-8 rounded-3xl text-xl shadow-2xl transition-all transform hover:scale-105 hover:shadow-3xl h-auto"
          >
            <ShoppingCart className="mr-3 h-6 w-6" />
            COMPRAR PACOTE PREMIUM - R$ 17,00
          </Button>
        </div>
        
        {/* Payment methods */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg">
          <p className="text-gray-600 text-sm mb-4 font-medium text-center">Pagamento 100% seguro:</p>
          <div className="flex justify-center items-center space-x-4 text-gray-600">
            <FaCcVisa className="h-8 w-8" />
            <FaCcMastercard className="h-8 w-8" />
            <FaCcPaypal className="h-8 w-8" />
            <SiPix className="h-7 w-7" />
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">SSL 256-bit • Dados protegidos</p>
        </div>
      </div>
    </section>
  );
}
