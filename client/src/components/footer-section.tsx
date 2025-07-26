export function FooterSection() {
  return (
    <footer className="px-4 py-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-sm mx-auto">
        {/* Logo and Brand */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg">
            <span className="text-2xl">✨</span>
          </div>
          <h4 className="font-heading text-xl font-bold text-white mb-2">
            Luz do Céu Kids
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Educação cristã com amor e diversão para suas crianças
          </p>
        </div>

        {/* Social Proof */}
        <div className="bg-white/10 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/20">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">⭐</span>
              ))}
            </div>
            <p className="text-sm font-medium text-white mb-1">Mais de 2.000 famílias satisfeitas</p>
            <p className="text-xs text-gray-300">35 livros cristãos de alta qualidade</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <h5 className="font-semibold text-white mb-2">Produto</h5>
            <ul className="space-y-1 text-gray-300">
              <li>35 Livros de Colorir</li>
              <li>Download Imediato</li>
              <li>Garantia de 7 dias</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-2">Suporte</h5>
            <ul className="space-y-1 text-gray-300">
              <li>WhatsApp</li>
              <li>Email</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-400 mb-2">Formas de Pagamento</p>
          <div className="flex justify-center items-center space-x-3 opacity-60">
            <div className="bg-white/20 rounded px-2 py-1">
              <span className="text-xs font-medium">VISA</span>
            </div>
            <div className="bg-white/20 rounded px-2 py-1">
              <span className="text-xs font-medium">MASTER</span>
            </div>
            <div className="bg-white/20 rounded px-2 py-1">
              <span className="text-xs font-medium">PIX</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-4">
          {/* Legal Links */}
          <div className="flex justify-center space-x-4 text-xs text-gray-400 mb-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-gray-400">
              © 2025 Luz do Céu Kids. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              CNPJ: 00.000.000/0001-00 • Desenvolvido com ❤️ para famílias cristãs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
