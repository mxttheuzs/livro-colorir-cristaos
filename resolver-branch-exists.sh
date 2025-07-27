#!/bin/bash

echo "🎯 Resolvendo erro BRANCH_ALREADY_EXISTS"
echo "======================================="

# Verificar branch atual
echo "📋 Branch atual:"
git branch

# Verificar se estamos na main
echo "🔍 Verificando posição atual..."
git status --porcelain

# Fazer push direto para a branch existente
echo "🚀 Fazendo push para branch existente..."
echo "Nota: Pode pedir credenciais GitHub"

# Tentar push simples primeiro
git push origin main

echo "✅ Tentativa de push concluída!"