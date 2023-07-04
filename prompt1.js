const readline = require('readline');
const r1 = readline.createInterface({input: process.stdin , output: process.stdout}); //criaçao de input ouput em node


const VcMaiorDeIdade = function() {
    r1.question("Qual é a sua idadade = " , function(input){
        const idade = parseFloat(input);

        if(isNaN(idade)){
            console.log("Digite um número válido");
            VcMaiorDeIdade();
        }else if(idade >= 18){
            console.log("Você é maior de idade");
        }else{
            console.log("Você é menor de idade");
        }
        r1.close()
    })
}

VcMaiorDeIdade()
