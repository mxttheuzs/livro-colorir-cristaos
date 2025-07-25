import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

export function SocialProofCounter() {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    show: boolean;
  }>({ name: "", show: false });

  const customerNames = [
    "Maria Silva",
    "João Santos", 
    "Ana Costa",
    "Pedro Oliveira",
    "Lucia Ferreira",
    "Carlos Mendes",
    "Fernanda Lima",
    "Ricardo Alves",
    "Juliana Rocha",
    "Marcos Pereira",
    "Camila Souza",
    "Rafael Castro",
    "Beatriz Ramos",
    "Gabriel Nunes",
    "Patricia Dias",
    "Thiago Barbosa",
    "Mariana Cardoso",
    "Bruno Martins",
    "Larissa Gomes",
    "Diego Ribeiro"
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomName = customerNames[Math.floor(Math.random() * customerNames.length)];
      
      setCurrentNotification({ name: randomName, show: true });
      
      // Esconder após 4 segundos
      setTimeout(() => {
        setCurrentNotification(prev => ({ ...prev, show: false }));
      }, 4000);
    };

    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Notificações subsequentes a cada 8-15 segundos
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000; // 8-15 segundos
      setTimeout(showNotification, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification.show) return null;

  return (
    <div className="fixed top-4 left-4 z-50 animate-slide-down">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
            <ShoppingCart className="h-4 w-4 text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {currentNotification.name}
            </p>
            <p className="text-xs text-gray-600">
              comprou agora
            </p>
          </div>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse" 
                style={{animationDelay: `${i * 0.3}s`}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}