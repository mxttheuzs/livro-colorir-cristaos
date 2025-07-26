export function FooterSection() {
  return (
    <footer className="px-4 py-8 bg-text-dark text-white">
      <div className="max-w-sm mx-auto text-center">
        <h4 className="font-fredoka text-lg text-primary-turquoise mb-3">
          Luz do Céu Kids
        </h4>
        <p className="text-sm opacity-75 mb-4">
          Educação cristã com amor e diversão para suas crianças
        </p>
        <div className="flex justify-center space-x-6 text-sm opacity-75">
          <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Termos de Uso</a>
        </div>
        <p className="text-xs opacity-50 mt-4">
          © 2024 Luz do Céu Kids. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
