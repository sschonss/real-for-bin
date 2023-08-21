
const converterRealParaBit = () => {
  let real = document.getElementById('real').value;
  document.getElementById("result-bit").innerHTML = '' + realParaBit(real)
}

const converterBitParaReal = () => {
  let bit = document.getElementById('bit').value;
  document.getElementById("result-real").innerHTML = '' + bitParaReal(bit)
}

function realParaBit(num) {
  if (isNaN(num)) {
     return "Valor inválido";
  }
  if (num == 0) {
    // Caso especial para o valor 0
    return "00000000000000000000000000000000";
  }
  let bits = [];

  // Determina o sinal do número (0 para positivo, 1 para negativo)
  let sinal = (num >= 0) ? 0 : 1;
  num = Math.abs(num);
  
  // Calcula o expoente e a parte fracionária do número
  let expoente = Math.floor(Math.log2(num));
  let fracao = num / Math.pow(2, expoente) - 1;

  // Converte o expoente para binário usando 8 bits
  expoente += 127;// Adiciona o valor de bias para o expoente
  let expoenteBinario = expoente.toString(2).padStart(8, '0');
  
  // Converte a parte fracionária para binário usando 23 bits
  for (let i = 0; i < 23; i++) {
    fracao *= 2; // Multiplica por 2 para obter o próximo bit
    bits.push(Math.floor(fracao));
    fracao -= Math.floor(fracao);
  }
// Retorna a representação binária concatenando sinal, expoente e parte fracionária
   return `${sinal}${expoenteBinario}${bits.join('')}`;
}

function bitParaReal(bit) {
  if (bit.length !== 32) {
    return "Valor binário inválido";
  }

  if (bit == "00000000000000000000000000000000") {
    // Caso especial para o valor 0
    return 0;
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
  