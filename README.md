# Extenso.js.org

> Site do Extenso.js.

Apenas uma página para a apresentação do projeto Extenso.js.

Não há muito conteúdo, nem tem um design lido, mas em breve melhorá-la-ei.

Servido com gh-pages.

## Configuração

```bash
$ git clone https://github.com/theuves/extenso.js.org.git

$ cd extenso.js.org

$ npm install

$ npm start
```

Depois disso acesse [localhost:5000](http://localhost:5000) ou outro que ele lhe apresentar.

Há vários outros comandos para usar:

- `npm run start` - Roda o servidor.
- `npm run deploy` - Faz deploy do site com gh-pages.
- `npm run build` - Constrói todos os arquivos.
- `npm run build:html` - Constrói o HTML (EJS).
- `npm run build:css` - Constrói o CSS (SASS).
- `npm run build:js` - Constrói o JavaScript (move dependências para a `dist`).
- `npm run build:image` - Copia as imagens para a `dist`.
- `npm run watch:html` - Aguarda edições no HTML e adiciona-os na `dist`.
- `npm run watch:css` - Aguarda edições no CSS e adiciona-os na `dist`.

## Futuro

Ainda há muita coisa há fazer.

Eis uma lista rápida de algumas coisas que ainda falta:

- [ ] Torná-lo responsível.
- [ ] Adicionar meta tags e mais coisas para SEO.
- [ ] Melhorar acessibilidade.
- [ ] Mover completamente a documentação do projeto para cá.

Sinta-se à vontade para fazer qualquer coisa.

## Licença

MIT