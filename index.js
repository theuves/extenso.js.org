main();

function getString(length) {
  return Array(length).fill(0).map(randomChar).join("");
}

function randomChar() {
  return Math.random().toString().charAt(2);
}

function main() {
  var id = "title";
  var el = document.getElementById(id);
  var innerHTML = el.innerHTML;
  var length = innerHTML.length;
  var index = 0;
  var times = 25;
  var ms = 50;
  var interval = setInterval(function () {
    el.innerHTML = getString(length);

    if (index >= times) {
      el.innerHTML = innerHTML;
      clearInterval(interval);

      return;
    }

    index++;
  }, ms);
}