const gasolinaPreco = 5.79;
const KmPorLitro = 10;
const distanciaEmKm = 3190;

const litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * gasolinaPreco;
console.log(valorGasto.toFixed(2));


  //distanciaEmKm / KmPorLitro * gasolinaPreco 
  //exemplo de um calculo simples feito em javascript 
  

