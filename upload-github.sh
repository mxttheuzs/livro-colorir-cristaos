#!/bin/bash

# Script para fazer upload do projeto para GitHub
# Execute este script para subir o projeto

echo "🚀 Iniciando upload para GitHub..."

# Verificar se git está configurado
if ! git config user.name > /dev/null; then
    echo "❌ Git não configurado. Configure primeiro:"
    echo "git config --global user.name \"Seu Nome\""
    echo "git config --global user.email \"seu@email.com\""
    exit 1
fi

# Inicializar repositório se necessário
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositório Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📁 Adicionando arquivos..."
git add .

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "Deploy: Luz do Céu Kids - Landing Page Completa

✨ Features implementadas:
- Landing page mobile-first otimizada
- Carrossel de livros cristãos
- Seção de depoimentos com fotos
- FAQ interativo
- Seção de ofertas com countdown
- Footer profissional com logo
- Otimizações de conversão

🎨 Design:
- Cores cristãs child-friendly
- Animações suaves
- Botões touch-friendly
- Responsivo para todos dispositivos

📱 Mobile Optimizado:
- Padding e espaçamento mobile-first
- Botões maiores para touch
- Carrossel otimizado
- Performance melhorada"

echo "✅ Projeto pronto para GitHub!"
echo ""
echo "🔗 Próximos passos:"
echo "1. Crie um repositório no GitHub"
echo "2. Execute: git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git"
echo "3. Execute: git branch -M main"
echo "4. Execute: git push -u origin main"
echo ""
echo "🌐 Para deploy automático no GitHub Pages:"
echo "1. Vá nas Settings do repositório"
echo "2. Clique em Pages"
echo "3. Selecione 'GitHub Actions' como source"
echo "4. O site será publicado automaticamente!"