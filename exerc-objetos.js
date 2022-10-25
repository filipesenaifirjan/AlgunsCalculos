/* crie uma classe para representar carros:
Os carros possuem uma marca, uma cor e um gasto médio de combustívelpor kilometro rodado, Crie um metodo dado e a quantodade de quilometros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca; //marca é um atributo do carro
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

calcularGastoDePercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
}

}
const ka = new Carro('Ford','Prata',1/15);
console.log(ka.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));