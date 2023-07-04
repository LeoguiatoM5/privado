const dados = {nome: "Leonardo", 
Idade: 36,
profissão: "programador" 
}
console.log(dados.profissão);



let carro = {
    Marca: "Honda",
    Ano: 1997,
    Cor: "Azul",
    ligar: function () {
        console.log("O carro da marca " + this.Marca + " está ligado!");
    }
};