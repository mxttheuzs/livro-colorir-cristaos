#!/bin/bash

echo "🔧 Limpando estado Git para Interface Replit"
echo "============================================"

# Aguardar processos Git terminarem
echo "⏳ Aguardando processos Git finalizarem..."
sleep 5

# Verificar se existem locks
echo "🔍 Verificando locks Git..."
ls -la .git/*.lock 2>/dev/null || echo "Nenhum lock encontrado"

# Tentar limpar cache Git
echo "🧹 Limpando cache Git..."
git reset --mixed HEAD 2>/dev/null || echo "Reset não necessário"

# Verificar status
echo "📋 Status Git atual:"
git status --porcelain

echo ""
echo "✅ Limpeza concluída!"
echo ""
echo "💡 PRÓXIMOS PASSOS:"
echo "1. Feche a interface Git atual (clique X no erro)"
echo "2. Aguarde 10 segundos"
echo "3. Abra a interface Git novamente"
echo "4. Tente fazer commit pela interface"
echo ""
echo "Se o erro persistir, use uma dessas alternativas:"
echo "• Botão Deploy do Replit (topo da tela)"
echo "• Criar novo repositório GitHub"
echo "• Download manual do código"