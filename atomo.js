const calcularPropriedadesAtom = function(numeroEletrons, numeroNeutrons) {
    const numeroAtomico = numeroEletrons; // Número atômico é igual ao número de elétrons
    const numeroMassa = numeroAtomico + numeroNeutrons; // Número de massa é a soma do número atômico e o número de nêutrons
    const eletronsCamadaValencia = numeroEletrons - 2; // Número de elétrons na camada de valência é igual ao número de elétrons menos 2
    
    return {
      numeroAtomico,
      numeroMassa,
      eletronsCamadaValencia
    };
  };
  
 
  const resultado = calcularPropriedadesAtom(34,44);
  
  console.log('Número atômico:', resultado.numeroAtomico);
  console.log('Número de massa:', resultado.numeroMassa);
  console.log('Elétrons na camada de valência:', resultado.eletronsCamadaValencia);



  