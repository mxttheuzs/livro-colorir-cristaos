#!/bin/bash

echo "=== PUSH SIMPLES PARA GITHUB ==="
echo "Token: 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"
echo ""

# Método 1: Push direto se já tem repositório configurado
echo "Tentando push direto..."
git add .
git commit -m "Deploy projeto livros colorir cristãos - $(date '+%Y-%m-%d %H:%M:%S')"

# Extrair URL do repositório se existir
REPO_URL=$(git remote get-url origin 2>/dev/null | sed 's|https://github.com/||' | sed 's|.git||')

if [ ! -z "$REPO_URL" ]; then
    echo "Repositório encontrado: $REPO_URL"
    git push https://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@github.com/$REPO_URL.git
    echo "Push realizado com sucesso!"
else
    echo ""
    echo "=========================================="
    echo "REPOSITÓRIO NÃO CONFIGURADO"
    echo "=========================================="
    echo ""
    echo "Para configurar, execute um destes comandos:"
    echo ""
    echo "1. Se você JÁ TEM um repositório no GitHub:"
    echo "   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git"
    echo ""
    echo "2. Para criar um NOVO repositório, acesse:"
    echo "   https://github.com/new"
    echo "   E depois execute o comando acima com o nome do seu repositório."
    echo ""
    echo "3. Depois execute novamente este script:"
    echo "   bash push-github-simple.sh"
    echo ""
    echo "Exemplo completo:"
    echo "git remote add origin https://github.com/meuusuario/livros-colorir-cristaos.git"
    echo "bash push-github-simple.sh"
fi