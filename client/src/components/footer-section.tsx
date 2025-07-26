import logo from "@assets/515496816_122165020232481708_4631810946756284690_n_1753548414055.jpg";

export function FooterSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5513996116102";
    const message = "Olá! Vi os 35 Livros de Colorir Cristãos e gostaria de falar com o suporte.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer');
    if (offerElement) {
      offerElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="px-4 py-8 bg-white border-t border-gray-200">
      <div className="max-w-sm mx-auto">
        {/* Logo and Brand */}
        <div className="text-center mb-6">
          <img 
            src={logo} 
            alt="Luz do Céu Kids"
            className="w-20 h-20 mx-auto mb-4 rounded-xl shadow-lg"
          />
          <h4 className="font-heading text-xl font-bold text-gray-800 mb-2">
            Luz do Céu Kids
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Educação cristã com amor e diversão para suas crianças
          </p>
        </div>



        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button 
            onClick={scrollToOffer}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all transform hover:scale-105 shadow-lg ml-[0px] mr-[0px]"
          >
            Ver Ofertas
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all transform hover:scale-105 shadow-lg ml-[0px] mr-[0px]"
          >
            WhatsApp
          </button>
        </div>





        {/* Divider */}
        <div className="border-t border-gray-200 pt-4">
          {/* Legal Links */}
          <div className="flex justify-center space-x-4 text-xs text-gray-500 mb-4">
            <button className="hover:text-blue-600 transition-colors">Política de Privacidade</button>
            <span>•</span>
            <button className="hover:text-blue-600 transition-colors">Termos de Uso</button>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-gray-500">
              © 2025 Luz do Céu Kids. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Desenvolvido com ❤️ para famílias cristãs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
