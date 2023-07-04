console.log(Math.ceil(6.1));

const obj1 ={}
obj1.nome  =  "Bola"



console.log(obj1.nome);


function objet(nome){  //this// atributo público anotação ponto que , que pode ser instanciada fora
    this.nome =  nome
    this.exec = function(){
        console.log("Leol");
    }
    
}

const meuObjeto = new objet()


meuObjeto.exec()

//é um processo por meio do qual se realiza a cópia de um objeto (classe) existente.
// Uma classe, a qual tem a função de determinar um tipo de dado, 
//deve ser instanciada para que possamos utilizá-la.