
const converter = () => {
  let bit = +document.getElementById('real').value;
  decimalForBit(bit);
}

function decimalForBit(valor) {

  document.getElementById("bit").value = '' + parteInteiraParaBit(valor) + '.' + parteDecimalParaBit(valor)

}

function parteInteiraParaBit(valor){
  let numeroAbsoluto = Math.abs(valor);

  let parteInteira = Math.floor(numeroAbsoluto);
  let parteBitInteira = [];


  let isdivisible = true;

  if (parteInteira == 1 || parteInteira == 0) {
    document.getElementById("bit").value = 1;
    return
  }


  do {
    parteBitInteira.push(parteInteira % 2);
    parteInteira = Math.trunc(parteInteira / 2);
    if (parteInteira  === 0 || parteInteira / 2 === 0.5) {
      parteBitInteira.push(parteInteira)
      isdivisible = false
    }
  } while (isdivisible === true)

  return parteBitInteira.reverse().join('')
}

function parteDecimalParaBit(valor){
  let numeroAbsoluto = Math.abs(valor);

  let parteInteira = Math.floor(numeroAbsoluto);
  let parteDecimal = numeroAbsoluto - parteInteira;
  let parteBitDecimal = [];


  let maxBits = 32;

  while (parteDecimal !== 0 && parteBitDecimal.length < maxBits) {
    parteDecimal *= 2;
    if (parteDecimal >= 1) {
      parteBitDecimal.push(1);
      parteDecimal -= 1;
    } else {
      parteBitDecimal.push(0);
    }
  }

  return parteBitDecimal.reverse().join('')

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