function horas(nome,hora){
let saudacao = " ";
if(hora >= 1 && hora <=12){
    saudacao =  `Bom dia ${nome}`
}else if(hora >= 13 && hora <= 18){
    saudacao = `Boa tarde ${nome}`;
}else if(hora >= 19 && hora <=23){
    saudacao = `Boa noite ${nome}`
}else{
    saudacao = "Invalid"
        }
        return saudacao
}

console.log(horas("Leonardo" ,23));



const AreadaMesa = (Largura, Altura) => Largura <=22 && Altura <=23 ? "A mesa cabe" : "A mesa não cabe";

let idde = 17

if (idde >= 18) {
    idde = "Pode entrar"
} else {
    idde = "Não Pode entrar"
}
console.log(idade);



const objeto = {
    nome: "Leonardo",
    idade: 17,
    peso: 80
}

const { nome, idade, peso} =  objeto

console.log({nome, idade, peso})    ;


const array =  [0,1,2,3,4,5,6,7,8,9]

const [zero, one, two, three, four, five, six, seven, eight, nine] = array

console.log([zero, one, two, three, four, five, six, seven, eight, nine])