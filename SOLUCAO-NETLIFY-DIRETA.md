# SOLUÇÃO DIRETA - NETLIFY SEM GITHUB

Já que o GitHub está bloqueando por causa das permissões, vamos fazer deploy direto no Netlify:

## OPÇÃO 1: Deploy Manual no Netlify

1. Faça build do projeto:
```
npm run build
```

2. Compacte a pasta dist:
```
tar -czf site.tar.gz dist/
```

3. Vá em https://app.netlify.com/
4. Arraste o arquivo site.tar.gz para fazer deploy manual
5. Configure domínio personalizado se quiser

## OPÇÃO 2: Usar Netlify CLI

1. Instale Netlify CLI:
```
npm install -g netlify-cli
```

2. Login no Netlify:
```
netlify login
```

3. Deploy:
```
npm run build
netlify deploy --prod --dir=dist
```

## OPÇÃO 3: Novo repositório GitHub

1. Crie um novo repositório no GitHub
2. Clone apenas os arquivos importantes:
```
mkdir novo-repo
cp -r client server shared package.json tsconfig.json vite.config.ts novo-repo/
cd novo-repo
git init
git add .
git commit -m "Initial commit - landing page without popup"
git remote add origin https://github.com/SEU-USUARIO/NOVO-REPO.git
git push -u origin main
```

Qual opção prefere tentar?