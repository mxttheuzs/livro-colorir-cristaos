#!/bin/bash

echo "🚀 Script para upload automático para GitHub"
echo "================================================"

# Configurar Git
git config --global user.name "mxttheuzs"
git config --global user.email "mxttheuzs@gmail.com"

echo "📋 Preparando arquivos..."

# Remover arquivos desnecessários
rm -rf node_modules
rm -rf .config
rm -rf dist

# Verificar status
echo "📊 Status atual do Git:"
git status

echo "📦 Adicionando arquivos..."
git add .

echo "💾 Fazendo commit..."
git commit -m "Primeira versão da landing page - livros de colorir cristãos"

echo "🔄 Configurando remote..."
read -p "Cole seu novo token do GitHub aqui: " TOKEN
git remote set-url origin https://$TOKEN@github.com/mxttheuzs/livros-colorir-cristaos.git

echo "🚀 Fazendo upload..."
git push -u origin main

echo "✅ Upload concluído!"
echo "🌐 Veja seu repositório em: https://github.com/mxttheuzs/livros-colorir-cristaos"