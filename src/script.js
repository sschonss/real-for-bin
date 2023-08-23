
const converterRealParaBit = () => {
  let real = document.getElementById('real').value;
  document.getElementById("result-bit").innerHTML = ''
  document.getElementById("result-bit").innerHTML += realParaBit(real)
}

const converterBitParaReal = () => {
  let bit = document.getElementById('bit').value;
  document.getElementById("result-real").innerHTML = ''
  document.getElementById("result-real").innerHTML += bitParaReal(bit)
}
const verMais = () => {
  if (document.getElementById('sobre').classList.contains("hidden")) {

    document.getElementById('sobre').classList.remove("hidden")
    document.getElementById('ler-mais').textContent = "ler menos"

  } else {
    document.getElementById('sobre').classList.add("hidden")
    document.getElementById('ler-mais').textContent = "ler mais"
  }


}

const clearInput = () => {
  if (document.getElementById('real').value == '') {
    document.getElementById('result-bit').innerHTML = ''
  }
}


function realParaBit(num) {
  if (isNaN(num)) {
    return "Valor inválido";
  }

  let sinal = 0;
  let expoenteBinario = 0
  let bits = 0;

  if (num == 0) {
    // Caso especial para o valor 0
    sinal = "0"
    expoenteBinario = "00000000"
    bits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  } else {
    bits = [];

    // Determina o sinal do número (0 para positivo, 1 para negativo)
    sinal = (num >= 0) ? 0 : 1;
    num = Math.abs(num);

    // Calcula o expoente e a parte fracionária do número
    let expoente = Math.floor(Math.log2(num));
    let fracao = num / Math.pow(2, expoente) - 1;

    // Converte o expoente para binário usando 8 bits
    expoente += 127;// Adiciona o valor de bias para o expoente
    expoenteBinario = expoente.toString(2).padStart(8, '0');

    // Converte a parte fracionária para binário usando 23 bits
    for (let i = 0; i < 23; i++) {
      fracao *= 2; // Multiplica por 2 para obter o próximo bit
      bits.push(Math.floor(fracao));
      fracao -= Math.floor(fracao);
    }

  }
  return formatacao(sinal, expoenteBinario, bits)

}

function bitParaReal(bit) {
  let bitFormatado = bit.replace(/\s/g, "")
  bit = bitFormatado

  var regex = /^[01]+$/

  if (!regex.test(bit)) {
    return `<div class="text-red-400">
    Somente entradas com valores binários!
    </div>`
  }
  if (bit.length < 32) {
    while (bit.length < 32) {
      bit += '0'
    }
  }
  if (bit.length > 32) {
    return `<div class="text-red-400">
    O número máximo de bits é 32!!
    </div>`
  }

  // Extrair o bit de sinal, expoente binário e fração binária da entrada

  const sign = parseInt(bit[0]);
  const expoenteBinario = bit.substring(1, 9);
  const fracaoBinario = bit.substring(9);

  // Converter o expoente binário de volta para um número inteiro
  const expoente = parseInt(expoenteBinario, 2) - 127;

  // Inicializar a fração com o valor 1 (parte inteira)
  let fracao = 1;


  // Converter a fração binária em um número decimal 
  for (let i = 0; i < fracaoBinario.length; i++) {
    fracao += parseInt(fracaoBinario[i]) * Math.pow(2, - (i + 1));
  }

  // Calcular o valor final usando a fórmula IEEE 754

  const value = Math.pow(-1, sign) * fracao * Math.pow(2, expoente);

  return value;
}


function formatacao(sinal, expoenteBinario, bits) {
  let result = `<div class="flex flex-row justify-center">
  <h1 class="text-red-400">
  ${sinal}
  </h1>
  <h1 class=" text-green-400">
  ${expoenteBinario}
  </h1>
  <h1 class="text-blue-500">
  ${bits.join('')}
  </h1>
</div>
<div class="flex flex-col mt-4 ">
  <h1 class="text-red-400 ">
  <strong>Bit de sinal:</strong> ${sinal}
  </h1>
  <h1 class="text-green-400">
  <strong>Expoente Binário:</strong> ${expoenteBinario}
  </h1>
  <h1 class=" text-blue-500">
  <strong>Mantissa:</strong> ${bits.join('')}
  </h1>
</div>
`
  // Retorna a representação binária concatenando sinal, expoente e parte fracionária
  return result;
}
