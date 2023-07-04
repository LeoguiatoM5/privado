const nota = [6.7, 7.4, 9.8, 8.1, 7.7]

for( let i in nota ){   // in indice
    console.log(i, nota[i]) ;
}


const pessoa= {
    nome: "ana",
    sobrenome: "Silva",
    idade: 20

}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`) ;
}

