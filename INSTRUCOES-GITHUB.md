# 🚀 Como fazer Push para GitHub e Deploy

## Passo 1: Preparar o repositório no GitHub

1. Vá para https://github.com/mxttheuzs/livros-colorir-cristaos
2. Se o repositório não existir, crie um novo repositório com esse nome
3. **Importante**: Não inicialize com README, .gitignore ou licença (vamos usar os nossos arquivos)

## Passo 2: Obter o Token do GitHub

1. Vá para https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome como "Replit Upload"
4. Marque apenas a opção **"repo"** (acesso completo aos repositórios)
5. Clique em "Generate token"
6. **COPIE O TOKEN** - você só verá ele uma vez!

## Passo 3: Fazer o Push (Via Terminal do Replit)

Abra o Shell do Replit e execute estes comandos um por um:

```bash
# 1. Configurar usuário git (se necessário)
git config --global user.name "mxttheuzs"
git config --global user.email "mxttheuzs@gmail.com"

# 2. Verificar se já está inicializado
git status

# 3. Se não estiver inicializado, inicializar
git init

# 4. Adicionar todos os arquivos
git add .

# 5. Fazer o primeiro commit
git commit -m "Primeira versão da landing page - livros de colorir cristãos"

# 6. Adicionar o remote (SUBSTITUA SEU_TOKEN pelo token copiado)
git remote add origin https://SEU_TOKEN@github.com/mxttheuzs/livros-colorir-cristaos.git

# 7. Fazer o push
git push -u origin main
```

## Passo 4: Publicar o Site

### Opção A: GitHub Pages (Grátis)
1. No seu repositório GitHub, vá em **Settings** > **Pages**
2. Em **Source**, selecione "Deploy from a branch"
3. Escolha **Branch: main** e **Folder: / (root)**
4. Clique em **Save**
5. Seu site ficará em: `https://mxttheuzs.github.io/livros-colorir-cristaos`

### Opção B: Netlify (Grátis)
1. Vá para https://netlify.com
2. Clique em "Add new site" > "Import an existing project"
3. Conecte com GitHub e selecione seu repositório
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
5. Clique em **Deploy site**

### Opção C: Vercel (Grátis)
1. Vá para https://vercel.com
2. Conecte com GitHub
3. Importe seu repositório
4. As configurações serão detectadas automaticamente
5. Clique em **Deploy**

## Troubleshooting

### Se der erro de "upstream branch"
```bash
git push --set-upstream origin main
```

### Se der erro de "repository not found"
- Verifique se o repositório existe no GitHub
- Verifique se o token tem permissão "repo"
- Verifique se o nome do repositório está correto

### Se der erro de "authentication failed"
- Gere um novo token no GitHub
- Certifique-se de marcar a opção "repo"
- Use o token novo no comando remote

## 📞 Próximos Passos

Depois que o site estiver no ar:
1. Teste todas as funcionalidades
2. Configure Google Analytics (se necessário)
3. Configure domínio personalizado (opcional)
4. Configure SSL (automático na maioria das plataformas)

## 🔄 Para Atualizações Futuras

```bash
git add .
git commit -m "Descrição da atualização"
git push
```

O site será atualizado automaticamente em poucos minutos!