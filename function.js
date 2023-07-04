//function sem retorno

function imprimiSoma(a,b,c){
    console.log(c*b+a)

}
imprimiSoma(4,5,6)


//function com retorno
function soma(a,b = 0){
    return a+b;
}

console.log(soma(5,3));

//funtion variável

const imprimiSome = function(a,b){
    console.log(a+b)
}

imprimiSome(2,3);


//function arrow em variável

const somo = (a,b) =>{
    return a+b
}
console.log(somo(8,8))

//retorno implicito

const sub = (a,b) => a-b
console.log(sub(5,3))



const multiplica = (a,b) => a*b
    console.log(multiplica(2,3))



function subs(a,b){
    return a-b;
}
console.log(subs(5,2)); 

const subs1 = function(a,b){
    console.log(a-b)
}
subs1(5,2)

function conc(a , b){
    return a + b
}
console.log(conc("Joao " , " Maria"));

function conc1(a,b){
    console.log(a,b);
}

conc1("joao" ,  "mali")


function bhaskara(a, b, c, x1, x2) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
      console.log("A equação não possui raízes reais.");
      return;
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("A equação possui duas raízes reais:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
  }