import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, RotateCcw } from "lucide-react";

interface ColorPaletteProps {
  onColorChange?: (colors: ColorPalette) => void;
}

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export function ColorPaletteSelector({ onColorChange }: ColorPaletteProps) {
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>({
    primary: "#3B82F6",
    secondary: "#EF4444", 
    accent: "#F59E0B",
    background: "#F3F4F6"
  });

  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const colorPalettes: { name: string; colors: ColorPalette }[] = [
    {
      name: "Oceano",
      colors: {
        primary: "#0EA5E9",
        secondary: "#06B6D4", 
        accent: "#14B8A6",
        background: "#F0F9FF"
      }
    },
    {
      name: "Pôr do Sol",
      colors: {
        primary: "#F97316",
        secondary: "#EF4444",
        accent: "#F59E0B", 
        background: "#FFF7ED"
      }
    },
    {
      name: "Floresta",
      colors: {
        primary: "#16A34A",
        secondary: "#059669",
        accent: "#65A30D",
        background: "#F0FDF4"
      }
    },
    {
      name: "Lavanda",
      colors: {
        primary: "#8B5CF6",
        secondary: "#A855F7",
        accent: "#EC4899",
        background: "#FAF5FF"
      }
    },
    {
      name: "Terra",
      colors: {
        primary: "#A16207",
        secondary: "#DC2626",
        accent: "#EA580C",
        background: "#FFFBEB"
      }
    },
    {
      name: "Clássico",
      colors: {
        primary: "#3B82F6",
        secondary: "#EF4444",
        accent: "#F59E0B",
        background: "#F3F4F6"
      }
    }
  ];

  const handlePaletteSelect = (palette: ColorPalette) => {
    setSelectedPalette(palette);
    onColorChange?.(palette);
  };

  const resetToDefault = () => {
    const defaultPalette = colorPalettes[5].colors; // Clássico
    setSelectedPalette(defaultPalette);
    onColorChange?.(defaultPalette);
    setIsPreviewMode(false);
  };

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-heading text-2xl font-bold text-text-dark mb-3">
            🎨 Paleta de Cores Interativa
          </h3>
          <p className="text-sm text-text-medium">
            Escolha sua paleta favorita e veja como ficaria nos livros
          </p>
        </div>

        {/* Color Preview Card */}
        <Card 
          className="mb-6 p-6 border-0 shadow-lg transition-all duration-300"
          style={{ 
            backgroundColor: selectedPalette.background,
            border: `2px solid ${selectedPalette.primary}20`
          }}
        >
          <div className="text-center">
            <h4 className="font-bold mb-4" style={{ color: selectedPalette.primary }}>
              Prévia da Coloração
            </h4>
            
            {/* Sample coloring elements */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div 
                  className="h-16 rounded-lg shadow-inner flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: selectedPalette.primary }}
                >
                  Primária
                </div>
                <div 
                  className="h-16 rounded-lg shadow-inner flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: selectedPalette.secondary }}
                >
                  Secundária
                </div>
                <div 
                  className="h-16 rounded-lg shadow-inner flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: selectedPalette.accent }}
                >
                  Destaque
                </div>
              </div>

              {/* Sample illustration preview */}
              <div className="relative h-24 rounded-xl overflow-hidden" style={{ backgroundColor: selectedPalette.background }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-2">
                    <div 
                      className="w-8 h-8 rounded-full shadow-md"
                      style={{ backgroundColor: selectedPalette.primary }}
                    ></div>
                    <div 
                      className="w-6 h-12 rounded-lg shadow-md"
                      style={{ backgroundColor: selectedPalette.secondary }}
                    ></div>
                    <div 
                      className="w-4 h-8 rounded shadow-md"
                      style={{ backgroundColor: selectedPalette.accent }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Palette Selection Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {colorPalettes.map((palette, index) => (
            <Card
              key={index}
              className={`p-4 cursor-pointer border-2 transition-all duration-200 hover:shadow-lg ${
                JSON.stringify(selectedPalette) === JSON.stringify(palette.colors)
                  ? 'border-primary-blue shadow-lg transform scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handlePaletteSelect(palette.colors)}
            >
              <div className="text-center">
                <h5 className="font-semibold text-xs text-text-dark mb-2">
                  {palette.name}
                </h5>
                <div className="flex justify-center space-x-1">
                  {Object.values(palette.colors).map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-4 h-4 rounded-full shadow-sm border border-white"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            onClick={togglePreview}
            className="flex-1 bg-primary-blue hover:bg-primary-light-blue text-white font-semibold py-3 rounded-xl transition-colors duration-200"
          >
            <Palette className="w-4 h-4 mr-2" />
            {isPreviewMode ? 'Sair da Prévia' : 'Ver Prévia'}
          </Button>
          
          <Button
            onClick={resetToDefault}
            variant="outline"
            className="px-4 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-colors duration-200"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        {/* Usage Tips */}
        <Card className="mt-6 p-4 bg-gray-50 border-0">
          <div className="text-center">
            <h5 className="font-semibold text-sm text-text-dark mb-2">
              💡 Dica de Uso
            </h5>
            <p className="text-xs text-text-medium leading-relaxed">
              Cada paleta foi criada pensando em diferentes ambientes e emoções. 
              Escolha a que mais combina com o momento da coloração!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}