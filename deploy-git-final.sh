#!/bin/bash
set -e

echo "Deploy Git Automatico - Iniciando..."

# Teste do token
echo "Testando token..."
curl -s -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/user | grep -q "login" && echo "Token OK" || (echo "Token inválido" && exit 1)

# Limpar processo git anterior
pkill -f git || true
sleep 2

# Remover locks
find .git -name "*.lock" -delete 2>/dev/null || true

# Configurar git
export GIT_TERMINAL_PROMPT=0
git config --global user.name "mxttheuzs"
git config --global user.email "mxttheuzs@users.noreply.github.com"
git config --global credential.helper store

# Criar novo repositório temporário
rm -rf temp-deploy
mkdir temp-deploy
cd temp-deploy

# Inicializar repo
git init
git remote add origin "https://$GITHUB_TOKEN@github.com/mxttheuzs/livro-colorir-cristaos.git"

# Copiar arquivos
cp -r ../client ../server ../shared ../dist ../package.json ../package-lock.json ../netlify.toml ../vite.config.ts ../tsconfig.json ../tailwind.config.ts ../postcss.config.js ../.github . 2>/dev/null || true

# Deploy
git add .
git commit -m "Deploy: Site Luz do Ceu Kids completo - $(date)"
git push origin main --force

cd ..
rm -rf temp-deploy

echo "SUCESSO! Deploy realizado com sucesso!"
echo "Verifique no Netlify em alguns minutos."