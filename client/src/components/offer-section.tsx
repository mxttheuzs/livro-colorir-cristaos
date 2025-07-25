import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { SiPix } from "react-icons/si";
import { useState } from "react";
import versiculo1 from "@assets/image_1753440167020.png";
import versiculo2 from "@assets/image_1753440170263.png";
import versiculo3 from "@assets/image_1753440173833.png";
import versiculo4 from "@assets/image_1753440179181.png";
import versiculo5 from "@assets/image_1753440190840.png";

interface OfferSectionProps {
  onPurchase: () => void;
}

export function OfferSection({ onPurchase }: OfferSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Versículos data
  const versiculos = [
    { image: versiculo1, locked: true },
    { image: versiculo2, locked: true },
    { image: versiculo3, locked: true },
    { image: versiculo4, locked: true },
    { image: versiculo5, locked: true }
  ];

  // Get current date and format it
  const getCurrentDate = () => {
    return '25/07/25';
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % versiculos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + versiculos.length) % versiculos.length);
  };

  return (
    <section id="offer" className="px-3 py-12 bg-gray-50">
      <div className="w-full max-w-xs mx-auto">
        {/* Urgent Scarcity Badge */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full px-4 py-2 text-center mb-6 shadow-xl animate-pulse border-2 border-red-300">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            <span className="font-bold text-xs sm:text-sm">🚨 APENAS 47 EXEMPLARES RESTANTES!</span>
          </div>
        </div>
        
        {/* Emotional Hook Title */}
        <div className="text-center mb-6">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-red-600 mb-3">
            💔 Última Chance de Transformar<br/>
            <span className="text-gray-800">Seus Filhos HOJE</span>
          </h3>
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
            <p className="text-red-700 text-sm font-bold">
              ⚠️ AVISO: Após meia-noite, o preço volta para R$ 97,00
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Não seja mais um pai que lamenta não ter agido quando teve a chance
            </p>
          </div>
        </div>
        
        {/* Basic Package - Emotional Appeal */}
        <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 mb-6 text-center relative overflow-hidden shadow-xl">
          
          {/* Fear-based headline */}
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">
            ⚠️ CHANCE ÚNICA
          </div>
          
          <h4 className="font-bold text-red-600 text-lg sm:text-xl mb-2">
            💔 Não Deixe Seus Filhos Para Trás
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            <em>Enquanto outras crianças crescem sem valores...</em>
          </p>
          
          {/* Massive contrast pricing */}
          <div className="mb-4">
            <p className="text-red-500 line-through text-lg font-bold mb-1">R$ 97,00</p>
            <p className="text-xs text-gray-500 mb-2">Preço normal que você pagaria amanhã</p>
          </div>
          
          {/* Massive discount badge */}
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg animate-pulse">
            🔥 ECONOMIZE R$ 87,00 HOJE!
          </div>
          
          {/* Emotional Pricing Display */}
          <div className="mb-4 bg-white rounded-xl p-4 border-2 border-green-300 shadow-lg">
            <p className="text-xs text-gray-500 mb-1">Apenas hoje por:</p>
            <div className="flex items-center justify-center">
              <span className="text-4xl sm:text-5xl font-bold text-green-600">R$ 10</span>
              <span className="text-xl sm:text-2xl text-green-600">,00</span>
              <div className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                HOJE
              </div>
            </div>
            <p className="text-red-600 text-xs font-bold mt-1">⚠️ Amanhã volta para R$ 97,00</p>
          </div>
          
          {/* Value Stack - Proof Element */}
          <div className="space-y-2 mb-4 text-left bg-green-50 rounded-lg p-3">
            <p className="text-green-700 flex items-center text-sm font-medium">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              35 Livros Transformadores (Valor: R$ 175)
            </p>
            <p className="text-green-700 flex items-center text-sm font-medium">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              Transformação Instantânea (Sem Espera)
            </p>
            <p className="text-green-700 flex items-center text-sm font-medium">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              Acesso Para Sempre (Valor: R$ 97)
            </p>
            <p className="text-green-700 flex items-center text-sm font-medium">
              <span className="text-green-500 mr-2 font-bold">✓</span>
              Garantia Total de 7 dias
            </p>
            <div className="border-t pt-2 mt-2">
              <p className="text-center text-green-800 font-bold text-sm">
                💰 VALOR TOTAL: R$ 272,00<br/>
                <span className="text-red-600">VOCÊ PAGA APENAS: R$ 10,00</span>
              </p>
            </div>
          </div>
          
          {/* Emotional CTA Button */}
          <Button 
            onClick={onPurchase}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-full text-base uppercase tracking-wide shadow-2xl transition-all hover:shadow-3xl h-auto border-2 border-red-300"
            style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}
          >
            🚨 GARANTO AGORA POR R$ 10!
          </Button>
          
          {/* Fear-based urgency */}
          <p className="text-xs text-red-600 mt-3 font-medium">
            ⚠️ Não perca esta chance única. Seu filho merece o melhor!
          </p>
        </Card>
        
        {/* Premium Package */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 mb-8 border-2 border-yellow-300 relative overflow-hidden">
          {/* Most Sold badge */}
          <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-bold">
            MAIS VENDIDO
          </div>
          
          <h4 className="font-bold text-gray-800 text-xl mb-4">Pacote Premium</h4>
          
          {/* Current price */}
          <div className="mb-4 text-center">
            <span className="text-5xl font-bold text-green-600">R$ 17</span>
            <span className="text-2xl text-green-600">,00</span>
          </div>
          
          {/* Savings Header */}
          <p className="text-gray-600 text-sm mb-4 text-center">Você economiza R$ 239,00</p>
          
          {/* Basic Package Section */}
          <div className="bg-green-100 rounded-2xl p-4 mb-4">
            <h5 className="font-bold text-green-800 text-center mb-3">TUDO DO PACOTE BÁSICO +</h5>
          </div>
          
          {/* Bonus Items */}
          <div className="space-y-3 mb-6">
            <div className="bg-white rounded-xl p-3 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3 text-lg">🎁</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">BÔNUS 1: 5 Vídeos de Histórias Bíblicas</p>
                  <p className="text-red-500 text-xs line-through">R$ 97,00</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-3 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-3 text-lg">🎁</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">BÔNUS 2: 18 Versículos Ilustrados</p>
                    <p className="text-red-500 text-xs line-through">R$ 39,00</p>
                  </div>
                </div>
              </div>
              
              {/* Mini Carousel dos Versículos */}
              <div className="relative ml-[-6px] mr-[-6px] pl-[-8px] pr-[-8px] pt-[0px] pb-[0px]">
                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {versiculos.map((versiculo, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <div className="w-full h-24 rounded-lg overflow-hidden relative">
                          <img 
                            src={versiculo.image} 
                            alt={`Versículo ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          {versiculo.locked && (
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm rounded-lg">
                              <Lock className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all"
                >
                  <ChevronLeft className="w-3 h-3 text-gray-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all"
                >
                  <ChevronRight className="w-3 h-3 text-gray-600" />
                </button>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-2 space-x-1">
                  {versiculos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        currentSlide === index ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-3 border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-3 text-lg">🎁</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">BÔNUS 3: Calendário Bíblico Semanal</p>
                  <p className="text-red-500 text-xs line-through">R$ 35,00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium CTA Button */}
          <Button 
            onClick={onPurchase}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-full shadow-2xl transition-all hover:shadow-3xl h-auto uppercase tracking-wide text-[15px]"
            style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}
          >
            QUERO O PACOTE PREMIUM
          </Button>
        </Card>
        
        {/* Security & Trust Section */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-2">Compra 100% Segura</h4>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Pagamento processado por plataforma segura</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Criptografia SSL de 256 bits</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Garantia de reembolso em 7 dias</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Download imediato após confirmação</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="text-green-500 mr-3">✓</span>
              <span>Suporte dedicado via WhatsApp</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-center items-center space-x-4 opacity-60">
              <FaCcVisa className="h-6 w-6 text-gray-600" />
              <FaCcMastercard className="h-6 w-6 text-gray-600" />
              <FaCcPaypal className="h-6 w-6 text-gray-600" />
              <SiPix className="h-5 w-5 text-gray-600" />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">Aceitos todos os cartões e PIX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
