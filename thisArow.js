let dobro = (a)=>{
    return 2 *a;
    
}

console.log(dobro(4))


dobro = (a) =>{
    return 2 * a;
}

dobro = a => 2 * a


console.log(dobro(Math.PI));

let ola = function(){
    return "Olá"
}

ola = () => "Ola"
ola = _ => "Ola"    //único parâmetro


console.log(ola());