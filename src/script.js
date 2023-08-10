document
  .getElementById("form-conversor")
  .addEventListener("submit", function (event) {
    event.preventDefault();


    let bit = document.getElementById('bit').value;
    decimalForBit(bit);


  });




function decimalForBit(valor) {

  let arrayBit = [];
  let isdivisible = true;

  if (valor == 1) {
    document.getElementById("resultado").innerHTML = valor;
    return
  }


  do {
    arrayBit.push(valor % 2);
    valor = Math.trunc(valor / 2);
    if (valor / 2 === undefined || valor / 2 === 0.5) {
      arrayBit.push(valor)
      isdivisible = false
    }
  } while (isdivisible === true)
  document.getElementById("resultado").innerHTML = '' + arrayBit.reverse().join('')
}