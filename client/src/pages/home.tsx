import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useExitIntent } from "@/hooks/use-exit-intent";
import { apiRequest } from "@/lib/queryClient";
import { HeroSection } from "@/components/hero-section";
import { ProductShowcase } from "@/components/product-showcase";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { OfferSection } from "@/components/offer-section";

import { GuaranteeSection } from "@/components/guarantee-section";
import { WhatsAppSection } from "@/components/whatsapp-section";
import { FooterSection } from "@/components/footer-section";
import { ExitIntentModal } from "@/components/exit-intent-modal";
import { FloatingCTA } from "@/components/floating-cta";

export default function Home() {
  const [currentPrice, setCurrentPrice] = useState("R$ 10,00");
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const { toast } = useToast();
  const { showExitModal, closeExitModal } = useExitIntent();

  // Create lead mutation
  const createLeadMutation = useMutation({
    mutationFn: async (data: { email: string; name?: string; phone?: string; source?: string }) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Interesse registrado!",
        description: "Entraremos em contato em breve.",
      });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Não foi possível registrar seu interesse. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  // Create order mutation
  const createOrderMutation = useMutation({
    mutationFn: async (data: {
      email: string;
      name: string;
      phone?: string;
      totalAmount: number;
      hasOrderBump: boolean;
      orderBumpAmount: number;
      discountCode?: string;
      discountAmount: number;
    }) => {
      const response = await apiRequest("POST", "/api/orders", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Pedido criado!",
        description: "Redirecionando para o pagamento...",
      });
      // Here you would redirect to payment processor
      console.log("Order created:", data);
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Não foi possível criar o pedido. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer');
    if (offerElement) {
      offerElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };



  const handlePurchase = () => {
    // Create lead first
    createLeadMutation.mutate({
      email: "customer@example.com", // This would come from a form
      name: "Cliente Interessado",
      source: "purchase_attempt"
    });

    // Calculate pricing
    const basePrice = 1000; // R$ 10.00 in cents
    let totalAmount = basePrice;
    let discountAmount = 0;

    if (discountCode === "VOLTA50") {
      discountAmount = Math.floor(totalAmount * 0.5);
      totalAmount = Math.floor(totalAmount * 0.5);
    }

    // Create order
    createOrderMutation.mutate({
      email: "customer@example.com", // This would come from a form
      name: "Cliente",
      totalAmount,
      hasOrderBump: false,
      orderBumpAmount: 0,
      discountCode: discountCode || undefined,
      discountAmount
    });
  };

  const handleExitOffer = () => {
    setDiscountCode("VOLTA50");
    // Update current price with discount
    setCurrentPrice("R$ 5,00"); // 10 * 0.5
    
    toast({
      title: "Desconto aplicado!",
      description: "Cupom VOLTA50 ativo - 50% de desconto!",
    });
    
    handlePurchase();
  };

  return (
    <div className="min-h-screen bg-background-cream">
      <HeroSection onScrollToOffer={scrollToOffer} />
      <ProductShowcase />
      <BenefitsSection />
      <TestimonialsSection />
      <OfferSection onPurchase={handlePurchase} />

      <GuaranteeSection />
      <WhatsAppSection />
      <FooterSection />
      
      <ExitIntentModal 
        open={showExitModal}
        onOpenChange={closeExitModal}
        onAcceptOffer={handleExitOffer}
      />
      
      <FloatingCTA onPurchase={handlePurchase} price={currentPrice} />
    </div>
  );
}
