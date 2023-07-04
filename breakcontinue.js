const nume = [1, 2, 3, 4, 5, 6 , 7 , 8, 9]

for(let i in nume){
   if (i ==8){
   break;
   }
   console.log(i, nume[i]);
}


for(let y in nume){
    if(y ==5) continue;
    console.log(`${y} = ${nume[y]}`);
}

externo:
for(let a in nume){
    for(let b in nume){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a} ,${b}`);
    }
}
console.log("fim");