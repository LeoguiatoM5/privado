// novo recurso es2015

const pessoa = {
    nome: "Leonardo",
    idades: "36",
    endereço: {
        logradouro: " Rua Senador",
        numero: 67
    }

}


const {nome , idades} = pessoa  // declare a variavel com o objeto
console.log(nome, idades)

const {endereço: {logradouro , numero}} = pessoa

console.log(logradouro , numero);

//--------------------------------------------------------------------


const array = [  "Leonardo" , 36 ," " ]

const [no , ida, o] = array; //declare a variavel com o atriuto do array
console.log(no,ida,o);

const [n1 , n2 ,n3] = [10 ,7 ,7 ]
console.log(n1);



function rando({min = 0, max = 1000}){
const valor =  Math.random() * (max - min) + min;
return  Math.floor(valor);
}

const objje =  {min : 0, max : 50}
console.log(rando(objje));

const pessoaa = {Nome : "Maria", idade : 34}


const {Nome, idade} = pessoaa
console.log(Nome, idade);


const arrayu = [0,2,3,4,5,6]

const[x1,x2,x3,,x5] = arrayu
console.log(x5);


function randu([min = 0, max= 1000]){
    if(min>max)[min,max]= [max,min]
    const valor1 = Math.random( )* (max-min)  //destruction array 
    return Math.floor(valor1)
}

console.log(randu([50,40]));
console.log(randu([40,50]));
console.log(randu([]));



const boo =  true;

console.log(boo);


let juru = [0,1,2,3,4,5]  
const [nom,  date, atraso,] = juru


console.log([nom,date,atraso]);


const number = [7,8,9,0];

const [sete, oito,nove, zero] = number

console.log(zero,sete);

5
let npropri = {Nome1: "Leonardo", endereco2: {rua: "Das flores" , nu: 87}

}


let {Nome1 , endereco2 :{rua , nu}} = npropri




