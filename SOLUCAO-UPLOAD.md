# 🚀 Solução Rápida para Atualizar o Site

O Git está com problemas no ambiente Replit. Aqui estão 2 soluções eficazes:

## 📁 Solução 1: Upload Manual via GitHub (MAIS RÁPIDA)

1. **Baixar arquivos do Replit**:
   - Clique no ícone de pastas na barra lateral esquerda
   - Selecione os arquivos principais (client/, server/, shared/, package.json, etc.)
   - Clique com botão direito → "Download"

2. **Upload no GitHub**:
   - Vá em: https://github.com/mxttheuzs/livros-colorir-cristaos
   - Clique em "Add file" → "Upload files"
   - Arraste todos os arquivos baixados
   - Commit message: "Atualizações da landing page com melhorias"
   - Clique em "Commit changes"

3. **Resultado**: Netlify atualiza automaticamente em 1-2 minutos

## 🔄 Solução 2: Novo Repositório (SE NECESSÁRIO)

Se o upload manual não funcionar:

1. **Criar novo repositório**: https://github.com/new
   - Nome: `livros-colorir-cristaos-v2`
   - Público ou privado

2. **Upload todos os arquivos** do Replit

3. **Reconectar Netlify**:
   - Site settings → Build & deploy → Repository
   - "Link to a different repository"
   - Selecionar o novo repositório

## ✅ Arquivos Importantes para Upload

Certifique-se de incluir:
- 📁 `client/` (toda a pasta)
- 📁 `server/` (toda a pasta) 
- 📁 `shared/` (toda a pasta)
- 📁 `public/` (toda a pasta)
- 📄 `package.json`
- 📄 `package-lock.json`
- 📄 `vite.config.ts`
- 📄 `tailwind.config.ts`
- 📄 `tsconfig.json`
- 📄 `netlify.toml`
- 📄 `.gitignore`

## 🎯 O Que Vai Ser Atualizado

- Animações nos botões de compra (pulsar)
- Textos corrigidos dos bônus premium
- Carrossel de prévia com bloqueios
- Design mais limpo e profissional
- Scripts de deploy configurados

**Recomendo a Solução 1** - é mais rápida e mantém o mesmo endereço do site!