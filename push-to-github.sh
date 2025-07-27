#!/bin/bash

# Script para fazer push do projeto para GitHub
# Token fornecido: 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

echo "=== CONFIGURANDO GIT PARA PUSH ==="

# Configurar usuário Git (você pode personalizar)
git config user.name "User"
git config user.email "user@example.com"

# Verificar status atual
echo "Status atual do Git:"
git status

# Adicionar todos os arquivos
echo "Adicionando arquivos..."
git add .

# Fazer commit
echo "Fazendo commit..."
git commit -m "Deploy do projeto livros de colorir cristãos - $(date)"

# Verificar se tem origem remota configurada
if git remote get-url origin 2>/dev/null; then
    echo "Origem remota já configurada:"
    git remote get-url origin
else
    echo "ATENÇÃO: Você precisa configurar a origem remota primeiro."
    echo "Execute: git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git"
    echo "Substitua SEU_USUARIO e SEU_REPOSITORIO pelos valores corretos."
    exit 1
fi

# Fazer push usando o token
echo "Fazendo push para GitHub..."
git push https://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@github.com/$(git remote get-url origin | sed 's|https://github.com/||' | sed 's|.git||').git

echo "=== PUSH CONCLUÍDO ==="