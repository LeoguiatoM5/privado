const { log } = require("console");

const alunos = {
    Aluno1: "João",
    Idade: 25,
 aluno2:{Nome:"Jo", idade: 25

 }
} 


const {aluno2, Nome} = alunos


console.log({aluno2, Nome});



let precoDoProduto = 37

precoDoProduto += 2

console.log(precoDoProduto)




let number = 5000
let verdade= typeof number === 'string'
let inverdade= number < 100;


console.log(verdade );



function solucao(numero1, numero2){
   const resultado = numero1 % numero2;
   if(resultado === 0){
    console.log(true);
   }else{
    console.log(false);
   }
}
solucao(9,3)

console.log(10 % 2);



//copia e cola, abaixo
console.log("String" === "String")  
console.log(9 === "String") 


// primeiro sai true, e o segundo false
//Instala o node pra ver a saida no terminal, ou digita no console do browser, mas é impossível n dar certo rsrsr




const condição = true

if(condição === false){
   console.log("Verdadeiro")
}else{
   console.log("Falso");
}



//Crie uma função chamada converter
//ParaMaiusculo que recebe uma string como parâmetro e 
//retorna a mesma string convertida para letras maiúsculas.


function ParaMaiusculo(name){
   return name.toUpperCase();

}

console.log(ParaMaiusculo("string"))


function gerarSenhaAleatoria(){

}

function gerarSenhaAleatoria() {
   const caracteres = '0123456789';
   let senha = '';
 
   for (let i = 0; i < 15; i++) {
     const randomIndex = Math.floor(Math.random() * caracteres.length);
     senha = caracteres.charAt(randomIndex) + senha;
   }
 
   return senha;
 }
 
 // Exemplo de uso
 const senhaAleatoria = gerarSenhaAleatoria();
 console.log(senhaAleatoria);


function invertArray([a,b,c,d,e]){
   let inverter = [a,b,c,d,e].reverse()
   return inverter;
}

console.log(invertArray([1,2,3,4,5]));


let precoDoProduto1 = 19.29
let precoDoProduto2 = 3
let precoDoProduto3 = 4.85


if(precoDoProduto1 <= 18 ){
   console.log("Comprei o produto 1");

}else if(precoDoProduto2 >= 1.50 && precoDoProduto2 <= 3){
   console.log("Comprei o produto 2");
}else if(precoDoProduto3 <=18){
   console.log("Comprei o produto 3");
}else{
   console.log("nsõ comprei nenhum produto");
}


