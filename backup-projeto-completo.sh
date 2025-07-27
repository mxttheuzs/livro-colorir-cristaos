#!/bin/bash

echo "📦 Criando backup completo do projeto"
echo "====================================="

# Criar diretório de backup
mkdir -p projeto-backup 2>/dev/null

# Copiar arquivos principais
echo "📁 Copiando arquivos do projeto..."

# Frontend
cp -r client projeto-backup/ 2>/dev/null
cp -r server projeto-backup/ 2>/dev/null
cp -r shared projeto-backup/ 2>/dev/null

# Arquivos de configuração
cp package.json projeto-backup/ 2>/dev/null
cp tsconfig.json projeto-backup/ 2>/dev/null
cp tailwind.config.ts projeto-backup/ 2>/dev/null
cp vite.config.ts projeto-backup/ 2>/dev/null
cp components.json projeto-backup/ 2>/dev/null
cp replit.md projeto-backup/ 2>/dev/null

# Criar README para o backup
cat > projeto-backup/README.md << 'EOF'
# Luz do Céu Kids - Livros de Colorir Cristãos

Projeto de landing page para venda de livros de colorir cristãos.

## Tecnologias
- React + TypeScript
- Tailwind CSS
- Express.js
- Vite

## Como usar
1. npm install
2. npm run dev

Site otimizado para mobile e conversão de vendas.
EOF

echo "✅ Backup criado na pasta 'projeto-backup'"
echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo "1. Comprima a pasta 'projeto-backup' em ZIP"
echo "2. Faça upload no GitHub manualmente"
echo "3. Ou use o botão Deploy do Replit"
echo ""
echo "💡 Seu site continua funcionando perfeitamente!"

ls -la projeto-backup/