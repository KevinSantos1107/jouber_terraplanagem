import fs from 'fs';

const newDomain = process.argv[2];

if (!newDomain) {
  console.error('Por favor, informe o novo domínio. Ex: node scripts/set-domain.mjs https://jouberterraplanagem.com.br');
  process.exit(1);
}

const domainWithSlash = newDomain.endsWith('/') ? newDomain : newDomain + '/';

function replaceInFile(file, regex, replacement) {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(regex, replacement);
  fs.writeFileSync(file, content, 'utf8');
}

const urlPattern = /https:\/\/(jouberterraplanagem\.vercel\.app|jouberterraplanagem\.com\.br)\//g;

replaceInFile('index.html', urlPattern, domainWithSlash);
replaceInFile('public/robots.txt', urlPattern, domainWithSlash);
replaceInFile('public/sitemap.xml', urlPattern, domainWithSlash);

console.log('Domínio atualizado com sucesso!');
