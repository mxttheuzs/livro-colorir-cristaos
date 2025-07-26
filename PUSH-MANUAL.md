# 🚀 Push Manual - Passo a Passo

Execute estes comandos **um por vez** no Shell do Replit:

## 1. Primeiro, obtenha um novo token do GitHub:
- Vá em: https://github.com/settings/tokens
- Clique em "Generate new token (classic)"
- Marque apenas a opção **"repo"**
- Copie o token que será gerado

## 2. Limpar configuração anterior
```bash
git remote rm origin
```

## 3. Configurar novo remote (SUBSTITUA SEU_TOKEN_AQUI pelo token copiado)
```bash
git remote add origin https://SEU_TOKEN_AQUI@github.com/mxttheuzs/livros-colorir-cristaos.git
```

## 4. Adicionar mudanças
```bash
git add .
```

## 5. Fazer commit
```bash
git commit -m "Removido popup de oferta e melhorias no site"
```

## 6. Push para GitHub
```bash
git push -u origin main
```

Se der erro de "force push needed":
```bash
git push -f origin main
```

## ✅ Resultado Esperado
- Push bem-sucedido para GitHub
- Netlify detecta mudanças automaticamente
- Site atualiza em 1-2 minutos em: `35livrosdecolorcristaos.netlify.app`

Execute um comando por vez e me avise se algum der erro!