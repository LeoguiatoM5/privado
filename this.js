function f1(){
    var f2 = typeof window
    if(this === f2){
        return true;
    }
    
}


console.log(f1());



const pessoa= {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()


const falar = pessoa.falar
falar() //

const falarDePessoa = pessoa.falar.bind(pessoa) // chama a variavel  de conflito, metodo cahma amarra o bjeto pro recente
falarDePessoa()