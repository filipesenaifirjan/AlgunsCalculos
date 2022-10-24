

const numero = 0;

const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
    console.log('O número é inválido');
} else if (numeroDivisivelPor5 ) {

console.log('Sim');
} else {  //como, em toda linguagem de programação, o else fica por ultimo, não podendo ter um else antes do else if
    console.log('Não');
}


//if (!eNumeroPar){

    //console.log('Impar')
//}



// = atribuição == ignora o tipo(texto e numero) === é o mais adequado pra fazer as comparações
