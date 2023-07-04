const object = {
    product: "celular ",
    product2: "Pc",
    prin: function () {
        return `O ${this.product} está ligado`;
    }

}

console.log(object.prin());



function bhaskara(a, b, c, x1, x2) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (delta < 0) {
        console.log("não.");
        return;
    }

    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Personagem se move:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
  

} 




