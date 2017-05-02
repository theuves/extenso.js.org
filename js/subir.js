function Subir(percentage, milliseconds) {
  'use strict';

  // Subir.js | (c) 2016-2017
  // Por Matheus Alves (@theuves)

  function $(selector) {
    return document.querySelector(selector);
  }

  this.start = function (selector) {
    addEventListener('scroll', function () {
      // Eu poderia usar "window.scrollX" e "window.scrollY"
      // mas eles parecem não funcionar no IE, portanto
      // optei por ".scrollLeft" e ".scrollTop". Porém no
      // Chrome eles só funcionam com o elemento "body"
      // e no Firefox e IE apenas com o "html".
      var scroll = {
        x: $('html').scrollLeft || $('body').scrollLeft,
        y: $('html').scrollTop || $('body').scrollTop
      };

      var height = $('body').scrollHeight - window.innerHeight;

      if (height / (100 / percentage) <= scroll.y) {
        this.onshow(selector);

        $(selector).onclick = function () {
          var interval = setInterval(function () {
            window.scrollTo(scroll.x, scroll.y);

            if (scroll.y <= 0) {
              clearInterval(interval);
            }

            scroll.y -= 20;
          }, milliseconds);
        };
      } else {
        this.onhide(selector);
      }
    }.bind(this));
  };
}
