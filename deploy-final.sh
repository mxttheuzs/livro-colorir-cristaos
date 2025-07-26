#!/bin/bash
set -e

echo "Removendo locks..."
rm -rf .git/index.lock .git/config.lock .git/refs/heads/main.lock 2>/dev/null || true

echo "Configurando git..."
git config --global user.name "mxttheuzs" 2>/dev/null || true
git config --global user.email "mxttheuzs@users.noreply.github.com" 2>/dev/null || true

echo "Adicionando arquivos..."
git add . 2>/dev/null || true

echo "Fazendo commit..."
git commit -m "Deploy automatico do site" 2>/dev/null || echo "Nada para commitar"

echo "Configurando remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://${GITHUB_TOKEN}@github.com/mxttheuzs/livro-colorir-cristaos.git"

echo "Fazendo push..."
git push origin main --force

echo "SUCESSO! Deploy realizado."