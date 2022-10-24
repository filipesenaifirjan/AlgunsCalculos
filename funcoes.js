

/*function sayMyName(name) {
    console.log('Your name is:' + name);
}

sayMyName('Filipe');
sayMyName('Filipe2');*/

/*function quadrado(valor){
return valor * valor;
}

console.log(quadrado(10) + quadrado(10));



*/
//const quadradoDeDez = quadrado(10);
//console.log(quadradoDeDez);

/*function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
    }
    console.log(incrementarJuros(100, 10));
    console.log(incrementarJuros(100, 15));
    console.log(incrementarJuros(100, 20)); */

//refatorando o código da aula passada e adicionando funções

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

    if (imc < 18.5 ){
        return ('Abaixo do peso');
    }
        else if (imc >= 18.5 && imc < 25){
        return ('Peso normal');
    
    }else if (imc >= 25 && imc < 30 ){
       return ('Acima do peso'); 
        
    }
    else if (imc >= 30 && imc < 40){
        return ('Obeso');
    }
    else  
        return ('Obesidde grave')

}

function main (){
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main(); //função no javascript são como se fossem valores que a gente consegue manipular(objetos do tipo função)

