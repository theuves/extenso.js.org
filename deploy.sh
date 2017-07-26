#!/usr/bin/env bash

# Remove o diretório "dist".
rm -rf dist

# Clona o repositório.
git clone -b gh-pages https://github.com/theuves/extenso.js.org dist

# Constrói os arquivos da página.
npm run build

# Entra no repositório.
cd dist

# Commit.
git add .
git commit -m "atualiza"

# Envia as alterações.
git push origin gh-pages

# Entra no branch gh-pages.
git checkout gh-pages

# Se estiver no branch gh-pages.
if [[ $(git rev-parse --abbrev-ref HEAD) -eq "gh-pages" ]]; then

  # Ignora alterações (caso tenha).
  git checkout -- .

  # Sincroniza.
  git pull
fi
