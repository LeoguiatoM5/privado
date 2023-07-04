let array = [0,1,2,3,4,5,6]

for(let i = 0; i < array.length ; i++) {
    console.log(array[i]);
}
    
  let contador = 0

  while(contador <=10){
    console.log(contador);
    contador++
  }




const pessoa = {
    nome: "Leonardo",
    idade: "36"
}


for(let atributo in pessoa){
    console.log(`${atributo} : ${pessoa[atributo]}`)
}
