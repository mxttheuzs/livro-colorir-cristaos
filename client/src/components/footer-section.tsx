import logo from "@assets/515496816_122165020232481708_4631810946756284690_n_1753357778839.jpg";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-8 bg-white border-t border-gray-200">
      <div className="max-w-sm mx-auto">
        {/* Main content */}
        <div className="text-center mb-6">
          <div className="mb-4">
            <img 
              src={logo} 
              alt="Luz do Céu Kids" 
              className="w-16 h-16 mx-auto rounded-full shadow-lg object-cover"
            />
          </div>
          <h4 className="font-heading text-xl text-blue-600 mb-3 font-bold">
            Luz do Céu Kids
          </h4>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Educação cristã com amor e diversão para suas crianças.<br />
            Fortalecendo a fé através da arte e criatividade.
          </p>
        </div>

        {/* Links section */}
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex flex-col space-y-2 text-center text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
              Suporte ao Cliente
            </a>
          </div>
        </div>

        {/* Copyright section */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-500 mb-2">
            © {currentYear} Luz do Céu Kids. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Desenvolvido com ❤️ para famílias cristãs
          </p>
        </div>
      </div>
    </footer>
  );
}
