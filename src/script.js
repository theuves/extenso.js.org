"use strict";

var highlight = require("highlight-es");
var select = require("select");
var extenso = require("extenso");

function span(className) {
  return function (string) {
    return "<span class=\"" + className + "\">" + string + "</span>";
  }
}

Array.from(document.querySelectorAll('pre code')).forEach(function (code) {
  code.innerHTML = highlight(code.textContent, {
    comment: span("comment"),
    keyword: span("keyword"),
    number: span("number"),
    string: span("string")
  });
});

document.querySelector(".menu").addEventListener("click", function () {
  var nav = document.querySelector("nav").classList;

  if (nav.contains("show")) {
    nav.remove("show");
  } else {
    nav.add("show");
  }
});

window.addEventListener("resize", function () {
  var nav = document.querySelector("nav").classList;

  if (window.innerWidth > 600) {
    if (nav.contains("show")) {
      nav.remove("show");
    }
  }
});

document.querySelector("#run").addEventListener("click", function () {
  var x = extenso(123);
  var y = extenso(-123);
  var z = extenso("1,23");

  alert([x, y, z].join("\n"));
});

document.querySelector("#install").addEventListener("click", function () {
  select(document.querySelector("#install"));
});


