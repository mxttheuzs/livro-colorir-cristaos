# 🚀 Guia Rápido para Publicar o Site

## ✅ Status do Projeto
Seu projeto está pronto para ser publicado! Todos os arquivos necessários já estão configurados.

## 🔗 3 Formas de Publicar (Escolha uma)

### 1️⃣ GITHUB PAGES (Mais Fácil)
```bash
# No terminal do Replit, execute:
git add .
git commit -m "Site pronto para deploy"
git remote add origin https://SEU_TOKEN@github.com/mxttheuzs/livros-colorir-cristaos.git
git push -u origin main
```
**Token GitHub**: https://github.com/settings/tokens (marque "repo")  
**Depois**: Settings > Pages > Source: "Deploy from branch" > main  
**URL final**: `https://mxttheuzs.github.io/livros-colorir-cristaos`

### 2️⃣ NETLIFY (Automático)
1. Faça o push para GitHub (passos acima)
2. Vá em https://netlify.com
3. "New site from Git" > Conecte GitHub > Selecione o repositório
4. As configurações são automáticas (já estão no netlify.toml)
5. Deploy automático a cada push!

### 3️⃣ VERCEL (Rápido)
1. Faça o push para GitHub (passos acima)  
2. Vá em https://vercel.com
3. "Import Project" > GitHub > Selecione repositório
4. Deploy automático!

## 🔧 Se Der Problema

### Erro: "repository not found"
- Crie o repositório primeiro: https://github.com/new
- Nome: `livros-colorir-cristaos`
- **NÃO** marque "Initialize with README"

### Erro: "authentication failed"  
- Gere novo token: https://github.com/settings/tokens
- Marque **apenas** "repo"
- Use o token no lugar de SEU_TOKEN

### Erro: "upstream branch"
```bash
git push --set-upstream origin main
```

## 📱 Testando o Site
Depois do deploy, teste:
- ✅ Site carrega no celular
- ✅ Botões de compra funcionam
- ✅ Formulários funcionam
- ✅ Imagens carregam rápido

## 🔄 Atualizações Futuras
```bash
git add .
git commit -m "Atualização do site"
git push
```
O site atualiza automaticamente em 1-2 minutos!