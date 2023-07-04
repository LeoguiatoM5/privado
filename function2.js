function horaDeAcordar(){
    console.log("Bom dia");
}
horaDeAcordar()


function calculaArea(largura,altura) {
    console.log(largura * altura)
    
}


calculaArea(15 , 18)



function um(a = "um novo usuário"){
    return `A pessoa é ${a} `;
}

console.log(um("L"));


function calculo(largura,altura){
    const area = largura * altura
    return area
}

console.log(calculo(10,10))


function areaRetangulo(largura,altura){
    if (largura < 0 || altura < 0) {
        return "Para exbibir os resutados os número tem que ser positivo"
    }else{
        return `O resultados são ${largura} e ${altura}`
    }   
}

console.log(areaRetangulo(-1,2))

const area = (largura,altura)=> largura <= 100 && altura <= 200 ? "A mesa cabe" : " A mesa naão cabe";

console.log(area(100,50));


function Areadamesa(largura,altura){
    if(largura <= 100 && altura <=200){
        return "A mesa cabe na sala"
    }else{
        return "A mesa não cabe !!!!!!"
    }
}

console.log(Areadamesa( 50,50))