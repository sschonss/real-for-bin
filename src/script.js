document
  .getElementById("form-conversor")
  .addEventListener("submit", function (event) {
    event.preventDefault();

  
    const bit = document.getElementById('bit').value;
    let arrayBit = [];
    for(let i = bit.length; i > 0; i--){
      arrayBit.push(bit[i -1]);

    }

    let resultado = 0;
    for(let i = 0; i < arrayBit.length; i++){
      resultado += arrayBit[i] * Math.pow(2, i)
    }

    console.log(resultado);


  });