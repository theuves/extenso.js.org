"use strict";

import highlight from "highlight-es";
import select from "select";
import extenso from "extenso";

const span = className => {
  return string => `<span class="${className}">${string}</span>`;
};

Array.prototype.slice.call(document.querySelectorAll("pre code")).forEach(code => {
  code.innerHTML = highlight(code.textContent, {
    comment: span("comment"),
    keyword: span("keyword"),
    number: span("number"),
    string: span("string")
  });
});

document.querySelector(".menu").addEventListener("click", () => {
  const nav = document.querySelector("nav").classList;

  if (nav.contains("show")) {
    nav.remove("show");
  } else {
    nav.add("show");
  }
});

window.addEventListener("resize", () => {
  const nav = document.querySelector("nav").classList;

  if (window.innerWidth > 600) {
    if (nav.contains("show")) {
      nav.remove("show");
    }
  }
});

document.querySelector("#run").addEventListener("click", () => {
  const int = extenso(123);
  const neg = extenso(-123);
  const dec = extenso("1,23");

  alert(`${int}\n${neg}\n${dec}`);
});

document.querySelector("#install").addEventListener("click", () => {
  select(document.querySelector("#install"));
});


