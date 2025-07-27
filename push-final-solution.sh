#!/bin/bash

echo "🎯 Solução Final - Push para GitHub"
echo "=================================="

# Limpar qualquer configuração anterior
echo "🔧 Limpando configuração Git..."
rm -rf temp-repo 2>/dev/null || true

# Verificar status atual
echo "📋 Status atual do projeto:"
git status --short

# Configurar remote para o novo repositório
echo "🔗 Configurando remote para repositório novo..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/mxttheuzs/luz-do-ceu-kids-novo.git

# Verificar remote
echo "📡 Remote configurado:"
git remote -v

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos..."
git add .

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "Deploy inicial: Luz do Céu Kids - Site de livros de colorir cristãos"

echo ""
echo "🚀 Agora execute este comando manualmente:"
echo "git push -u origin main"
echo ""
echo "💡 Se pedir senha, use um Personal Access Token do GitHub"
echo "Crie em: github.com → Settings → Developer settings → Personal access tokens"