const AreaDaSala = (largura, altura) => largura <=100 && altura <=200 ? "A mesa cabe na sala" : "A mesa não cabe na sala";

        const espaconasala = AreaDaSala(100,300);

        console.log(espaconasala)



const Area1 = (largura, altura) => {
  if (largura <= 100 && altura <= 200) {
    return "A mesa cabe na sala";
  } else {
    return "A mesa não cabe na sala";
  }
}

console.log(Area1
(100, 200));





let horas = 23 ;

if(horas >= 6 && horas <= 12){
console.log("Bom dia")}
else if(horas >=12 && horas <=18 ){
console.log("Boa tarde")}
else if(horas >=18 && horas <= 23){
console.log("Boa noite")}
else{
console.log("Hora invalida")}


function saudacaoPersonalizada(nome, hora) {
  let saudacao = "";

  if (hora >= 1 && hora <= 12) {
    saudacao = "Bom dia, " + nome;
  } else if (hora >= 12 && hora <= 18) {
    saudacao = "Boa tarde, " + nome;
  } else if (hora >= 18 && hora <= 24) {
    saudacao = "Boa noite, " + nome;
  } else {
    saudacao = "Hora inválida";
  }

  return saudacao;
}

console.log(saudacaoPersonalizada("Leonardo", 1))

