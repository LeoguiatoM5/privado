
let palavra2 = "GAbriel" 
let quantidadeV =  palavra2.match(/[aeiou]/gi)? palavra2.match(/[aeiou]/gi).length : 0

console.log("A quantidade de vogais é = " + quantidadeV)



let  palavers1 =  "Jessica"

let nuDeVogais = 0;

for(const letra of palavers1){
    if(letra === "a"){nuDeVogais += 1;}
    if(letra === "e"){nuDeVogais+= 1;}
    if(letra === "i"){nuDeVogais+= 1;}
    if(letra === "o"){nuDeVogais+= 1;}
    if(letra === "u"){nuDeVogais+= 1;}
    
    

}
console.log(nuDeVogais);





function contarVogais(palavra){
    let vogais = palavra.match(/[aeiou]/gi); // regex
    return vogais ? vogais.length: 0;
}

let palavra;
palavra = contarVogais("M")

console.log(`a palavra tem ${palavra} vogais`);












//if (condicao){

//}



//while(condicao){

//}

//or(const elemento of colecao){

//}





function conteVogais(palavvrinha){
    let conatAi  = palavvrinha.match(/[aeiou]/gi)
    return conatAi ? conatAi.length : 0;
}

let retorna
retorna = conteVogais("ret")
console.log(retorna);












function contavogal(string){
    let strings = string.match(/[aeiou]/gi)
    return string? strings.length : 0;
}


let retorna2;
retorna2 = contavogal("Ana Carolina")


console.log(`${retorna2} vogais`);





let lista = [1,2,3,4]

for(let i in lista++){
    console.log(lista[4],[i]);
}



const ListaMenor = [7,9,10,56,78,90]


const resultado = Math.min(... ListaMenor)


console.log(resultado);



function Menor(){
    let menor = [-2 ,1,3,4,5,6,7,8];
    let resul3 = Math.min(... menor); // subtitui apply operado (spread (...)                                                                                    )
   console.log("O menor número é " + resul3);
    
}

Menor()

