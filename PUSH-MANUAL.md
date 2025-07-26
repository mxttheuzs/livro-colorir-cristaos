# 🚀 Push Manual com Novo Token

Como o Git está travado, execute estes comandos **um por vez** no Shell do Replit:

## 1. Resetar o Git (se necessário)
```bash
git reset --hard HEAD
```

## 2. Configurar novo remote
```bash
git remote rm origin
git remote add origin https://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@github.com/mxttheuzs/livros-colorir-cristaos.git
```

## 3. Adicionar mudanças
```bash
git add .
```

## 4. Fazer commit
```bash
git commit -m "Atualizações da landing page com melhorias de conversão"
```

## 5. Push para GitHub
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