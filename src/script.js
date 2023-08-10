
const converter = () => {
  let bit = document.getElementById('real').value;
  decimalForBit(bit);
}

function decimalForBit(valor) {

  let arrayBit = [];
  let isdivisible = true;

  if (valor == 1 || valor == 0) {
    document.getElementById("bit").value = 1;
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
  document.getElementById("bit").value = '' + arrayBit.reverse().join('')
}

function bitForDecimal(valor) {
  let arrayBit = [];
  for (let i = valor.length; i > 0; i--) {
    arrayBit.push(valor[i - 1]);

  }

  let resultado = 0;
  for (let i = 0; i < arrayBit.length; i++) {
    resultado += arrayBit[i] * Math.pow(2, i)
  }

  document.getElementById("resultado").innerHTML = resultado;
}