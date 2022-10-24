

const precoGasolina = 6.66;
const KmPorLitro = 10;
const distanciaPorKm = 100;
const tipoCombustivel = 'Gasolina';


const litrosConsumidos = distanciaPorKm / KmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * KmPorLitro;
    console.log(valorGasto.toFixed(2));

} else { const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}




/*1 preço do etanol;
2 preço da gasolina;
3 tipo de combustivel que está no seu carro;
4 gasto médio do combustível de seu carro por km;
Distância em km da viagem; */


/*const etanol = 5.79;
const gasolina = 7.89;
const combustivelAtual = gasolina;

const gastoMedioGasolina = 11;
const gastoMedioEtanol = 14;
const distanciaEmKm = 340;
let litrosConsumidosEmGasolina;
let litrosConsumidosEmEtanol;



if (litrosConsumidosEmGasolina === gasolina) {
 litrosConsumidosEmGasolina = distanciaEmKm / gastoMedioGasolina;

const ValorGastoEmGasolina = litrosConsumidosEmGasolina * gasolina;
console.log(ValorGastoEmGasolina.toFixed(2));
}  else {
     litrosConsumidosEmEtanol = distanciaEmKm / gastoMedioEtanol;
    const ValorGastoEmEtanol = litrosConsumidosEmEtanol * etanol;
    console.log(ValorGastoEmEtanol.toFixed(2));
} /*


/*const litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * gasolinaPreco;
console.log(valorGasto.toFixed(2));*/