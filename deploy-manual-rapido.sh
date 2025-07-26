#!/bin/bash

echo "=== DEPLOY MANUAL RAPIDO ==="
echo ""
echo "1. Acesse: https://github.com/mxttheuzs/livro-colorir-cristaos"
echo "2. Clique em 'Add file' > 'Upload files'"
echo "3. Arraste TODOS os arquivos desta pasta para o GitHub:"
echo ""

# Listar arquivos principais
echo "ARQUIVOS PARA UPLOAD:"
echo "- dist/ (pasta completa)"
echo "- client/ (pasta completa)" 
echo "- server/ (pasta completa)"
echo "- shared/ (pasta completa)"
echo "- package.json"
echo "- package-lock.json"
echo "- netlify.toml"
echo "- vite.config.ts"
echo "- tsconfig.json"
echo "- tailwind.config.ts"
echo "- postcss.config.js"
echo "- .github/ (pasta completa)"
echo ""
echo "4. Escreva: 'Deploy: Site completo'"
echo "5. Clique em 'Commit changes'"
echo ""
echo "PRONTO! O Netlify vai detectar e fazer deploy automaticamente."

# Criar zip para facilitar
echo ""
echo "=== CRIANDO ZIP PARA FACILITAR ==="
zip -r site-completo.zip client server shared dist package.json package-lock.json netlify.toml vite.config.ts tsconfig.json tailwind.config.ts postcss.config.js .github -x "node_modules/*" "*.log"

echo ""
echo "ALTERNATIVA: Upload do arquivo 'site-completo.zip' criado acima"
echo "Depois descompacte no GitHub."