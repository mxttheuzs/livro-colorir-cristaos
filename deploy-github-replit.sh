#!/bin/bash

echo "🚀 Deploy Automático para GitHub - Versão Replit"
echo "=============================================="

# Verificar se já existe um remote origin
if git remote | grep -q origin; then
    echo "✅ Remote origin já existe"
    git remote -v
else
    echo "❌ Nenhum remote origin encontrado"
    echo "Por favor, adicione o remote origin primeiro:"
    echo "git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git"
    exit 1
fi

# Mostrar status atual
echo "📋 Status atual do Git:"
git status

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos..."
git add .

# Fazer commit se houver mudanças
if git diff --staged --quiet; then
    echo "ℹ️  Nenhuma mudança para commit"
else
    echo "💾 Fazendo commit das mudanças..."
    git commit -m "Deploy: Atualizações do projeto Luz do Céu Kids - $(date)"
fi

# Tentar fazer push
echo "🔄 Fazendo push para GitHub..."
echo "Nota: Você precisará inserir suas credenciais GitHub quando solicitado"

# Fazer push com upstream
git push -u origin main

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Seu projeto foi enviado para o GitHub!"