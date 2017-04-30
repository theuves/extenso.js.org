"use strict";

function run() {
  var x = extenso(123);
  var y = extenso(-123);
  var z = extenso("1,23");

  alert([x, y, z].join("\n"));
}