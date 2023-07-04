


let bol = !!5 //CONVERTE VALOR PARA BOOLEAN


console.log( bol);



function compras (trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const compraTv32 = !!(trabalho1 ^ trabalho2)
    const compraTv32 = trabalho1 != trabalho2 //verifica se dois valores não são iguais
    const manterSaudadvel = !compraSorvete // operador unario

    return {
            compraSorvete,
            comprarTv50,
            compraTv32,
            manterSaudadvel}
}



console.log(compras(true, true))


console.log(delete compras(false, false))


