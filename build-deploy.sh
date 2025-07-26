#!/bin/bash

echo "🏗️  Iniciando build para produção"
echo "=================================="

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

echo "🧹 Limpando builds anteriores..."
rm -rf dist/

echo "🔨 Fazendo build do projeto..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos gerados em: dist/"
    echo ""
    echo "🚀 Próximos passos:"
    echo "1. Execute: ./upload-github.sh para enviar ao GitHub"
    echo "2. Configure GitHub Pages ou Netlify para deploy automático"
    echo "3. Para Netlify: arraste a pasta dist/ no dashboard"
else
    echo "❌ Erro no build!"
    exit 1
fi