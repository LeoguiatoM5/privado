
//gerar valor padrão

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(1), soma1(3));
console.log(soma1(1,2,3));

//

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 :c
    return a+b+c;
}

console.log(soma2(1,2, "c"))


function soma3(a = 1, b = 2, c =3){
    if(a == 0 || b == 0 || c == 0){ 
    return "Não pode digitar zero";
}else  {
    return a + b + c;
    }
}

console.log(soma3(0,2,2));