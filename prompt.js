const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const imprimirResultado = function() {
  rl.question('Digite a nota: ', function(input) {
    const nota = parseFloat(input);

    if (isNaN(nota)) {
      console.log('Entrada inválida. Por favor, digite apenas números.');
    } else if (nota >= 7 && nota <= 10) {
      console.log('Aprovado');
    } else if (nota >= 0 && nota <= 6) {
      console.log('Reprovado');
    } else {
      console.log('Nota inválida');
    }

    rl.close();
  });
};

imprimirResultado(5);