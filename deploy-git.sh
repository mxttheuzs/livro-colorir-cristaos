#!/bin/bash

echo "Iniciando deploy para GitHub..."

# Limpar locks do git se existirem
rm -f .git/index.lock
rm -f .git/config.lock
rm -f .git/refs/heads/main.lock

# Configurar git
git config user.name "mxttheuzs"
git config user.email "mxttheuzs@users.noreply.github.com"

# Adicionar arquivos
echo "Adicionando arquivos..."
git add .

# Fazer commit
echo "Fazendo commit..."
git commit -m "Deploy: Site Luz do Ceu Kids completo e otimizado para mobile"

# Configure remote com token
git remote set-url origin https://${GITHUB_TOKEN}@github.com/mxttheuzs/livro-colorir-cristaos.git

# Push para GitHub
echo "Enviando para GitHub..."
git push origin main --force

echo "Deploy concluido! Verifique o Netlify."