#!/bin/bash

echo "Deploy via GitHub API..."

# Arquivos principais para deploy
FILES=(
    "package.json"
    "package-lock.json" 
    "netlify.toml"
    "vite.config.ts"
    "tsconfig.json"
    "tailwind.config.ts"
    "postcss.config.js"
)

# Função para encode base64
encode_file() {
    local file=$1
    if [ -f "$file" ]; then
        base64 -w 0 "$file"
    fi
}

# Update cada arquivo via API
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "Atualizando $file..."
        
        content=$(encode_file "$file")
        
        curl -X PUT \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Content-Type: application/json" \
        -d "{
            \"message\": \"Deploy: Atualizar $file\",
            \"content\": \"$content\"
        }" \
        "https://api.github.com/repos/mxttheuzs/livro-colorir-cristaos/contents/$file"
        
        echo ""
    fi
done

echo "Deploy concluído via API!"