let comparacomthis = function(param){
    console.log(this === param);
}

comparacomthis(global)


const obj = {}
comparacomthis = comparacomthis.bind(obj)
comparacomthis(obj)


let comparacomthisArrow = param => console.log(this === param);
comparacomthisArrow(global)