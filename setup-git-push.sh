#!/bin/bash

echo "🔧 Configurando Git push via terminal"
echo "===================================="

# Aguardar processos Git finalizarem
sleep 3

# Configurar Git user (necessário para commits)
echo "👤 Configurando usuário Git..."
git config --global user.name "mxttheuzs"
git config --global user.email "seu-email@exemplo.com"

# Limpar remote anterior e configurar novo
echo "🔗 Configurando remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/mxttheuzs/luz-do-ceu-kids-novo.git

# Verificar configuração
echo "📋 Verificando configuração:"
git remote -v

# Verificar branch atual
echo "🌿 Branch atual:"
git branch

echo ""
echo "🚀 COMANDOS PARA EXECUTAR:"
echo "========================"
echo ""
echo "1. git add ."
echo "2. git commit -m \"Deploy inicial Luz do Ceu Kids\""  
echo "3. git push -u origin main"
echo ""
echo "💡 DICAS IMPORTANTES:"
echo "• Se pedir senha, use Personal Access Token do GitHub"
echo "• Token: github.com → Settings → Developer settings → Personal access tokens"
echo "• Marque permissão 'repo' ao criar o token"
echo "• Use o token como senha quando solicitado"