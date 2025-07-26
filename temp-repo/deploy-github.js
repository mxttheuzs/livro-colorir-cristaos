const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparando projeto para upload no GitHub...\n');

// Função para executar comandos
function runCommand(cmd) {
  try {
    const output = execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' });
    return output;
  } catch (error) {
    console.error(`Erro ao executar: ${cmd}`);
    console.error(error.message);
    return null;
  }
}

// Lista de arquivos importantes do projeto
const projectFiles = [
  'client/',
  'server/',
  'shared/',
  'public/',
  'dist/public/',
  'package.json',
  'package-lock.json',
  'README.md',
  '.gitignore',
  'tsconfig.json',
  'tailwind.config.ts',
  'vite.config.ts',
  'postcss.config.js',
  'components.json',
  'drizzle.config.ts',
  'netlify.toml',
  'replit.md'
];

console.log('📦 Verificando arquivos do projeto...');
projectFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} (não encontrado)`);
  }
});

console.log('\n📋 Para fazer upload no GitHub:');
console.log('1. Crie um novo token em: https://github.com/settings/tokens');
console.log('2. Marque apenas a opção "repo"');
console.log('3. Execute no terminal:');
console.log('   git add .');
console.log('   git commit -m "Projeto completo - livros de colorir cristãos"');
console.log('   git remote add origin https://SEU_TOKEN@github.com/mxttheuzs/livros-colorir-cristaos.git');
console.log('   git push -u origin main');
console.log('\n🌐 Seu repositório ficará em: https://github.com/mxttheuzs/livros-colorir-cristaos');