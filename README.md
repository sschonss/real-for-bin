# Desafio - converter Números Reais para Binário

# Conversão de Número real para Binário (IEEE 754)

Este código JavaScript realiza a conversão entre um número de Real de 32 bits e sua representação binária, seguindo o padrão IEEE 754. A conversão é feita em duas direções: de número decimal para binário e de binário para número decimal.

## Conversão de Decimal para Binário

A função `realParaBit(num)` converte um número real em sua representação binária de 32 bits, seguindo os passos:

1. Determina o bit de sinal (0 para números positivos, 1 para números negativos).
2. Calcula o expoente do número.
3. Calcula a fração normalizada.
4. Converte o expoente em binário de 8 bits.
5. Converte a fração em binário de 23 bits.

## Conversão de Binário para Decimal

A função `bitParaReal(binary)` converte uma representação binária de 32 bits em um número real, seguindo os passos:

1. Extrai o bit de sinal, expoente binário e fração binária da entrada.
2. Converte o expoente binário de volta para um número inteiro.
3. Calcula a fração decimal a partir da fração binária.
4. Aplica a fórmula do IEEE 754 para calcular o valor decimal.

# ---- Referências ----

https://www.youtube.com/watch?v=ealNNf7lGoU
https://www.youtube.com/watch?v=KJiJdLcq8a0
https://www.youtube.com/watch?v=HmjG79TKbZQ
