

function dividir(a, b) {
  try {
    const resultado = a / b;
    if (b === 0) {
      throw new Error ("A divisão por zero não é permitida")   //if/else em tratamento de erro
    }
    
    console.log("Resultado:", resultado);
  } catch (error) {
    console.log("Erro:", error.message);
  }finally{
    console.log("Fechando o bloco");
  }
}

dividir(10, 0);



function div (a,b){
  const res = a/b;
  if(b===0){
    console.log("O resultado não dividi por zero"); 
  }else {
    console.log("O resultado " + res)
  }
}

div(10,5)



function saudacao(nome) {
  
 
  return `Olá ${nome}`;
  }
  

  console.log(saudacao('Pedro'));



  function Verificanumeo(a){
    if(a > 0){
      return "O número é positivo"
    }else if(a < 0){
      return "O número é negativo"
    }else if(a === 0)
      return "O número é zero"
    }

  
  


  console.log(Verificanumeo(0));

  const valor = [10,9,8,7]

  for(let i = 0; i < valor.length; i++){
console.log(valor[i]);
  }