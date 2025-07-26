#!/bin/bash

echo "🚀 Script para upload automático para GitHub"
echo "================================================"

# Configurar Git (se necessário)
if [ -z "$(git config --global user.name)" ]; then
    git config --global user.name "mxttheuzs"
    git config --global user.email "mxttheuzs@gmail.com"
    echo "✅ Configuração do Git realizada"
fi

echo "📋 Preparando arquivos..."

# Remover arquivos desnecessários mas manter dist se já foi criado
rm -rf node_modules
rm -rf .config

# Criar .gitignore se não existir
if [ ! -f .gitignore ]; then
    echo "node_modules/
.config/
.replit
.env
.env.local
*.log
dist/
.DS_Store" > .gitignore
    echo "✅ .gitignore criado"
fi

# Verificar se git está inicializado
if [ ! -d .git ]; then
    git init
    echo "✅ Repositório Git inicializado"
fi

# Verificar status
echo "📊 Status atual do Git:"
git status

echo "📦 Adicionando arquivos..."
git add .

echo "💾 Fazendo commit..."
if git diff --staged --quiet; then
    echo "⚠️  Nenhuma mudança para commit"
else
    git commit -m "Atualização da landing page - livros de colorir cristãos $(date +%Y-%m-%d)"
fi

echo "🔄 Configurando remote..."
# Verificar se já existe remote
if git remote get-url origin 2>/dev/null; then
    echo "✅ Remote já configurado"
    read -p "Quer atualizar o token? (s/n): " UPDATE_TOKEN
    if [ "$UPDATE_TOKEN" = "s" ]; then
        read -p "Cole seu token do GitHub aqui: " TOKEN
        git remote set-url origin https://$TOKEN@github.com/mxttheuzs/livros-colorir-cristaos.git
    fi
else
    read -p "Cole seu token do GitHub aqui: " TOKEN
    git remote add origin https://$TOKEN@github.com/mxttheuzs/livros-colorir-cristaos.git
fi

echo "🚀 Fazendo upload..."
git push -u origin main

echo "✅ Upload concluído!"
echo "🌐 Veja seu repositório em: https://github.com/mxttheuzs/livros-colorir-cristaos"
echo "📱 Para publicar no GitHub Pages, vá em Settings > Pages > Source: Deploy from a branch > Branch: main"ttheuzs/livros-colorir-cristaos"