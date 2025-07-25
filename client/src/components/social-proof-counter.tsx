import { useState, useEffect } from "react";
import { Users, ShoppingCart, Star } from "lucide-react";

export function SocialProofCounter() {
  const [sales, setSales] = useState(1247);
  const [activeUsers, setActiveUsers] = useState(23);
  const [satisfaction, setSatisfaction] = useState(4.9);

  useEffect(() => {
    // Simular vendas em tempo real
    const salesInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance de nova venda
        setSales(prev => prev + 1);
      }
    }, 8000);

    // Simular usuários ativos
    const usersInterval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(15, Math.min(45, newValue));
      });
    }, 3000);

    return () => {
      clearInterval(salesInterval);
      clearInterval(usersInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2">
      {/* Contador de vendas */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs animate-slide-up">
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 rounded-full p-1">
            <ShoppingCart className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600">Vendas hoje</p>
            <p className="font-bold text-green-600 text-sm">{sales.toLocaleString()} livros vendidos</p>
          </div>
        </div>
      </div>

      {/* Usuários ativos */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs animate-slide-up">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 rounded-full p-1">
            <Users className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600">Agora online</p>
            <p className="font-bold text-blue-600 text-sm">{activeUsers} pessoas visualizando</p>
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.3}s`}}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Avaliação */}
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs animate-slide-up">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-100 rounded-full p-1">
            <Star className="h-4 w-4 text-yellow-600 fill-current" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-600">Avaliação média</p>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-yellow-600 text-sm">{satisfaction}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}