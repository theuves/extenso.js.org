$(document).ready(function () {
  $(".command").click(function (event) {
    select($(event.currentTarget).find("i")[0]);
  });

  $(".run").click(function () {
    var inteiro = extenso(123);
    var negativo = extenso(-123);
    var decimal = extenso("1,23");

    alert(inteiro);
    alert(negativo);
    alert(decimal);
  });
});
