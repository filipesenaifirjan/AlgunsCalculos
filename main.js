
const { gets, print } = require('./funcoes-auxiliares');


const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
    
}
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);
    






//console.log(funcoes.gets());
/* uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100, Façã um programa que receba os números sorteados para os alunos e mostre o maior número sorteado.

dados de entrada: 5 50 10 98 23 
saída: 98 */
