#!/usr/bin/env bash

# Clonar o repositório.
git clone -b gh-pages https://github.com/theuves/extenso.js.org dist

# Construir os arquivos da página.
npm run build

# Entrar no repositório.
cd dist

# "Commitar".
git add .
git commit -m "atualiza"

# Enviar as alterações.
git push origin gh-pages

# Voltar no repositório original.
cd ..

# Sincronizar com o gh-pages.
git pull origin gh-pages
