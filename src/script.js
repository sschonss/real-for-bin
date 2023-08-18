
const converter = () => {
  let bit = +document.getElementById('real').value;
  decimalForBit(bit);
}

function decimalForBit(valor) {
  if (valor < 0) {
    document.getElementById("bit").innerHTML = '' + parteInteiraParaBit(valor) + parteDecimalParaBit(valor)
  }
  else {
    document.getElementById("bit").innerHTML = '' + parteNaturalParaBit(valor) + parteDecimalParaBit(valor)
  }


}

function parteNaturalParaBit(valor) {
  let numeroAbsoluto = Math.abs(valor);

  let parteInteira = Math.floor(numeroAbsoluto);
  let parteBitInteira = [];


  let isdivisible = true;

  if (parteInteira == 1 || parteInteira == 0) {
    parteBitInteira.push(parteInteira)
    while (parteBitInteira.length < 32) {
      parteBitInteira.push(0);

    }
    return parteBitInteira.reverse().join('')
  }


  do {
    parteBitInteira.push(parteInteira % 2);
    parteInteira = Math.trunc(parteInteira / 2);
    if (parteInteira === 0 || parteInteira / 2 === 0.5) {
      parteBitInteira.push(parteInteira)
      isdivisible = false
    }
  } while (isdivisible === true)

  while (parteBitInteira.length < 32) {
    parteBitInteira.push(0);

  }

  return parteBitInteira.reverse().join('')
}

function parteDecimalParaBit(valor) {
  let numeroAbsoluto = Math.abs(valor);

  let parteInteira = Math.floor(numeroAbsoluto);
  let parteDecimal = numeroAbsoluto - parteInteira;

  if (parteDecimal === 0) {
    return ''
  }
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



  return '.' + parteBitDecimal.reverse().join('')

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

function parteInteiraParaBit(valor) {
  let numeroAbsoluto = Math.abs(valor);

  let parteInteira = Math.floor(numeroAbsoluto);
  parteInteira = parteInteira - 1
  let parteBitInteira = [];


  let isdivisible = true;

  if (parteInteira == -1) {
    parteBitInteira.push(parteInteira)
    while (parteBitInteira.length < 32) {
      parteBitInteira.push(0);

    }
    return parteBitInteira.reverse().join('')
  }

  do {
    parteBitInteira.push(parteInteira % 2);
    parteInteira = Math.trunc(parteInteira / 2);

    if (parteInteira === 0 || parteInteira / 2 === 0.5) {
      parteBitInteira.push(parteInteira)
      isdivisible = false
    }

  } while (isdivisible === true)

  while (parteBitInteira.length < 32) {
    parteBitInteira.push(0);
  }




  for (let i = 0; i < parteBitInteira.length; i++) {
    if (parteBitInteira[i] === 0) {
      parteBitInteira[i] = 1;
    } else {
      parteBitInteira[i] = 0;
    }

  }

  parteBitInteira[parteBitInteira.length - 1] = 1;


  return parteBitInteira.reverse().join('')
}