let conta  = 0
const deposito = 500
const objetivo = 100000
const redAnual = 0.15;
let meses = 0;
// todo ano ela rede 10% ao ano
//todo mÊs fazer deposito

// quantas meses demora pra chegar em 100 mil reais

while( conta < objetivo){
    conta += deposito;

    conta += conta * redAnual / 12;
    meses += 1
}

console.log(`Demorou , ${meses} , meses`)