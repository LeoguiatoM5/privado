const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("Quadro de honra");
            break;
        case 8:
        case 7:
        console.log("Aprovado");
        break;
        case 6:
        case 5:
        console.log("Recuperação");
        break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
        console.log("Reprovado");
        break;
        default:
            console.log("Nota invalida");
}
    }


    imprimirResultado(1)


function imprimirArray(array1, array2, array3) {
    const arrays = [array1, array2, array3];

    switch (arrays.length(',')) {
        case '1,2,3':
            console.log('Arrays correspondem a [1, 2, 3]');
            break;
        default:
            console.log('Arrays não correspondem a nenhum caso específico');
            break;
    }
}

imprimirArray("1,2,3");

   function saudaao(a){
    switch(a){
        case 1:
            console.log("Bomdia");
            break;
    }
   }


   saudaao(1)