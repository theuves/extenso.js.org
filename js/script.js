"use strict";

function run() {
  var x = extenso(123);
  var y = extenso(-123);
  var z = extenso("1,23");

  alert([x, y, z].join("\n"));
}

function menu() {
  var nav = document.querySelector("nav").classList;

  if (nav.contains("show")) {
    nav.remove("show");
  } else {
    nav.add("show");
  }
}

function download() {
  window.location.href = "https://github.com/theuves/extenso.js/archive/master.zip";
}