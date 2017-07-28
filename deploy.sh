#!/usr/bin/env bash

git clone -b gh-pages https://github.com/theuves/extenso.js.org dist

npm run build

cd dist

git add .

git commit -m atualiza

git push origin gh-pages
