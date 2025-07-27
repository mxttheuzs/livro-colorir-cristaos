#!/bin/bash

echo "🔧 Resolvendo problema do Git Lock no Replit..."

# Aguarda um pouco para qualquer processo Git terminar
sleep 2

# Verifica se ainda existe o lock
if [ -f ".git/index.lock" ]; then
    echo "⚠️  Arquivo index.lock ainda existe. Aguardando processos Git terminarem..."
    # Espera um pouco mais
    sleep 5
fi

# Tenta fazer o status primeiro para verificar se o Git está funcionando
echo "📋 Verificando status do Git..."
git status

# Se funcionou, tenta fazer o push
echo "🚀 Tentando fazer push para o GitHub..."
git push --set-upstream origin main

echo "✅ Processo concluído!"