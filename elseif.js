Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim
}


const imprimirResultado =  function(nota){
    if(nota.entre(9,10)){
        console.log("Quadro de honra")

    }else if(nota.entre(7, 8.99)){
        console.log("Aprovado");
    }else if(nota.entre(4, 6.99)){
        console.log("Recuperação");
    }else if(nota.entre(0, 3.99)){
        console.log("Reprovado");
    }    else{
        ("Nota invalida")
        }
    
    console.log("fim");
    
    }

    imprimirResultado(9)


    Number.prototype.validoComparacao = function(valorA, ValorB){
        return Math.max(valorA, ValorB)
    }

    const validar = function(numero){
        let maior = " ";
        if(numero.validoComparacao (5,10)=== numero){
            maior = "O maior número é" + numero.validoComparacao(5,10)
             
        }
    
    }
 
    console.log(validar());




   