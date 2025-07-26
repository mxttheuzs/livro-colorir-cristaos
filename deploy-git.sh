#!/bin/bash

echo "🚀 Iniciando deploy para GitHub..."

# Limpar locks do git se existirem
rm -f .git/index.lock
rm -f .git/config.lock
rm -f .git/refs/heads/main.lock

# Configurar git
git config user.name "mxttheuzs"
git config user.email "mxttheuzs@users.noreply.github.com"

# Verificar status
echo "📋 Status do repositório:"
git status

# Adicionar arquivos
echo "📦 Adicionando arquivos..."
git add .

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "Deploy: Site Luz do Céu Kids completo e otimizado para mobile"

# Push para GitHub
echo "🌐 Enviando para GitHub..."
git push https://mxttheuzs:${GITHUB_TOKEN}@github.com/mxttheuzs/livro-colorir-cristaos.git main --force

echo "✅ Deploy concluído! O Netlify deve detectar as mudanças automaticamente."
echo "🔗 Verifique em: https://app.netlify.com/sites/seu-site/deploys"