#!/bin/bash

echo "=== SOLUÇÃO DEFINITIVA PARA PUSH GITHUB ==="
echo ""

# Seu token
TOKEN="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"
REPO_URL="https://github.com/mxttheuzs/livro-colorir-cristaos.git"

echo "Token: $TOKEN"
echo "Repositório: $REPO_URL"
echo ""

echo "INSTRUÇÕES PARA EXECUTAR NO SHELL DO REPLIT:"
echo "=========================================="
echo ""
echo "1. Abra o Shell (terminal) do Replit"
echo "2. Cole e execute CADA comando individualmente:"
echo ""

echo "# Passo 1: Limpar estado Git problemático"
echo "sudo rm -f .git/index.lock"
echo "sudo rm -f .git/config.lock"
echo ""

echo "# Passo 2: Reconfigurar usuário Git"
echo "git config --global user.name \"mxttheuzs\""
echo "git config --global user.email \"user@example.com\""
echo ""

echo "# Passo 3: Corrigir URL do repositório remoto"
echo "git remote remove origin"
echo "git remote add origin $REPO_URL"
echo ""

echo "# Passo 4: Verificar se está correto"
echo "git remote -v"
echo ""

echo "# Passo 5: Preparar arquivos para commit"
echo "git add ."
echo "git status"
echo ""

echo "# Passo 6: Fazer commit"
echo "git commit -m \"Push final do projeto livros colorir cristãos - $(date)\""
echo ""

echo "# Passo 7: Push usando token de autenticação"
echo "git push https://$TOKEN@github.com/mxttheuzs/livro-colorir-cristaos.git main"
echo ""

echo "=========================================="
echo "ALTERNATIVA: COMANDOS EM UMA LINHA"
echo "=========================================="
echo ""
echo "Cole este bloco inteiro no Shell:"
echo ""
cat << 'EOF'
sudo rm -f .git/index.lock .git/config.lock && \
git config --global user.name "mxttheuzs" && \
git config --global user.email "user@example.com" && \
git remote remove origin && \
git remote add origin https://github.com/mxttheuzs/livro-colorir-cristaos.git && \
git add . && \
git commit -m "Push final projeto $(date)" && \
git push https://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@github.com/mxttheuzs/livro-colorir-cristaos.git main
EOF
echo ""

echo "=========================================="
echo "Se ainda não funcionar, use o método manual:"
echo "1. Baixe o projeto: Files → ... → Download as zip"
echo "2. Vá para: https://github.com/mxttheuzs/livro-colorir-cristaos"
echo "3. Upload files → Arraste os arquivos"
echo "4. Commit changes"