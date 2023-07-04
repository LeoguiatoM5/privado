let carro = {
    Marca: "Honda",
    Ano: 1997,
    Cor: "Azul",
    ligar: function () {
       console.log("O carro da marca " + this.Marca + " está ligado!");
    }
};

carro.ligar()


let arrays =[0,1,2,3]
let cont = 0
while (cont < arrays.length) {
    console.log(arrays[cont]);
    cont++;
}

let idade = 18

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}


let hora = 23;

if (hora >= 6 && hora < 12) {
    console.log("Bom dia!")
} else if (hora >= 12 && hora < 18) {
    console.log("Boa tarde!");
} else if (hora >= 18 && hora < 24) {
    console.log("Boa noite!")
} else {
    console.log("Horário inválido!")
}


let numeros = [1, 2, 3, 4, 5, 6]

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index])

}

let frutas = ["Maça", "Pera", "Uva"]

let ind = 0
while (ind < frutas.length) {

    console.log(frutas[ind]);
    ind++;
}typeo


var arrayex = ["Carro", "Pneu", "Avião"]

for (let cont = 0; cont < arrayex.length; cont++) {
    console.log(arrayex[cont]);
}

let arra = ["Carro", "Pneu", "Avião"]

let cont1 = 1

while (cont1 < arra.length) {
    console.log(arra[cont1]);
    cont1++;

}

//Exercício 1: Crie uma função chamada dobro que recebe um número como parâmetro e retorna o /////dobro desse número.

function dobro(num) {
    return num * 2;
}
let dobro1 = dobro(2)
console.log(dobro1)

//Exercício 2: Crie uma função chamada maior que recebe dois números como parâmetros e retorna o maior entre eles.


function maior(a, b) {
    return Math.max(a, b)
}

console.log("O maior número é " + maior(7,8));


let variavel = 1
let variavel2 = 2
let resulta = Math.max(variavel, variavel2)
console.log(resulta);


//Exercício 3: Crie uma função chamada saudacaoPersonalizada que recebe o nome de uma pessoa e o horário do dia (manhã, tarde ou noite) como parâmetros. A função deve retornar uma saudação personalizada com base nos valores recebidos.

function saudacaoPersonalizada(nome, horario) {
    let saudacao = " ";
    if (horario >= 6 && horario < 12) {
        saudacao = "Bom dia " + nome + "!";
    } else if (horario >=12 && horario <18) {
        saudacao = "Boa tarde " + nome + "!";
    } else if (horario >= 18 && horario < 24) {
        saudacao = "Boa noite " + nome + "!";
    } else {
        saudacao = "Horário invalido"
     }
        
     return saudacao;
    }
   

    console.log(saudacaoPersonalizada("Leonardo",6));



function calculaMedia(numeros) {
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
soma += numeros[i];
}
let media = soma / numeros.length;
return media;
}

console.log(calculaMedia([1, 2, 3, 4, 5]));



//Exercício 1: Crie uma função chamada calcularIdade que recebe o ano de nascimento de uma pessoa como argumento e retorna a idade atual. Em seguida, utilize a função para calcular a idade de uma pessoa nascida em 1990.


function calcularIdade(dateString) {
    const hoje = new Date()
    const birthDate = new Date(dateString);
    let age = hoje.getFullYear() - birthDate.getFullYear();
    const m = hoje.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}
console.log(calcularIdade("1987/05/05")) 