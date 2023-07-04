//par nome/valor

const saudacao =  "Opa"// contexto léxico, local aonde o código foi definida no código.

function exec(){
    const saudacao = "fala"// contexto léxico2
    return saudacao;
    
}
console.log(exec());
//Ojetos são grupos aninhados de pares/ nome/valor]]

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereço: {logradouro: "rua muito legal"}
}


console.log(saudacao);
console.log(exec());
console.log(cliente.nome);