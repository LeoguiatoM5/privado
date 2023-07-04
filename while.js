function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max- min) + min;
    return Math.floor(valor);

}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorio(-1,5)
    console.log(opcao)
}

console.log(`Bloco foi executado:`);

console.log(3 ===3); //true
console.log(3 === "3");// false
console.log(3 == 3);// true
console.log(3 == "3")//true

console.log(3 != 3); //false
console.log(3 != "3");// false
console.log(3 != 4);// true

console.log(3 !== 3);//
console.log(3 !== 4);// falso positivo



let op = 0
console.log(op != -1);


