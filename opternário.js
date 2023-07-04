const resultado  = nota  => nota >=7 ? "Aprovado" : "Reprovado"; // operador ternário para o resultado;
                                //1 -   //2            //3

console.log(resultado(7));


const hora =  (horario, nome = "Leonardo") => horario >=6 && horario <= 12 ? `Bom dia ${nome}`: `${nome} Volte amanhã entre às 06 e 11:59`;

console.log(hora(13));

function resul(note){
    if(note >= 7){
        return "Aprovado"
    }else {
        return "Reprovado"
    }
}

console.log(resul(5));




const entradaBomdia =(hora, nome = "Digite seu nome") =>{
    if(hora >= 6 && hora <= 12){
        return `Bom dia ${nome}`
    }else {
        return 'Volte amanhã entre às 06 e 11:59'
    }
}


console.log(entradaBomdia(7,"Léo"));


global.b = 123;  //valor global
console.log(b);
console.log(module.exports.b)

b = 1234;

console.log(b);