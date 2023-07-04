function area(largura, altura){
    const area = largura *altura
    if(isNaN(area)){
        console.log(`${area} Entrada invalida`)
    }
    else if(area >20){
        console.log(`Valor  acima do permitido ${area} m2`)
    }else{
        console.log(`Valor de area permitido ${area} m2`);
    }
}

area("t")


function switcase(valor){
    switch (valor) {
        case valor >= 18: 
        console.log("Entrada permitida")
            break;
        case valor < 18: 
        console.log("Entrada não permitida")
        break;
       
        
   
           
    }
}


