const { match } = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const compararNumeros = function() {
  rl.question('Digite o primeiro valor: ', function(input1) {
    const valor1 = parseFloat(input1);

    if (isNaN(valor1)) {
      console.log('Entrada inválida. Por favor, digite apenas números.');
      rl.close();
      return;
    }

    rl.question('Digite o segundo valor: ', function(input2) {
      const valor2 = parseFloat(input2);

      if (isNaN(valor2)) {
        console.log('Entrada inválida. Por favor, digite apenas números.');
      } else if (valor1 === valor2){
        console.log('Os valores são iguais.');
        rl.close();
      } else {
        const maiorValor = Math.max(valor1, valor2);
        console.log('O maior número é:', maiorValor);
      }

      rl.close();
    });
  });
};

compararNumeros();


function maiorNumeros(a,b){
  return Math.max(a,b)
}

console.log(maiorNumeros(3,4))
