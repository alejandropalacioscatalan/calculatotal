// function multiplicar() {
//   // Obtenemos los valores de los campos de entrada
//   const num1 = document.getElementById("num1").value;
//   const num2 = document.getElementById("num2").value;

//   // Realizamos la multiplicación
//   const resultado = num1 * num2;

//   // Mostramos el resultado
//   document.getElementById("resultado").innerHTML = resultado;
// }

function multiplicar_mas() {
  var cantidad = parseInt(document.querySelector(".cantidad").innerText) + 1;
  document.querySelector(".cantidad").innerHTML = cantidad;
  multiplicar();
}

function multiplicar_menos() {
  if (parseInt(document.querySelector(".cantidad").innerText) >= 1) {
    var cantidad = parseInt(document.querySelector(".cantidad").innerText) - 1;
  } else {
    var cantidad = 0;
  }
  document.querySelector(".cantidad").innerHTML = cantidad;
  multiplicar();
}

function multiplicar() {
  var cantidad = parseInt(document.querySelector(".cantidad").innerText);
  var precioBase = parseInt(document.querySelector(".precio-base").innerText);
  var resultado = cantidad * precioBase;
  document.querySelector(".resultado").innerHTML = resultado;
}
