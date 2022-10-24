/*Faça um algorítimo que, dado as 3 notas tiradas por aluno em um sementre da faculdade, calcule e imprima a sua média e a classificação conforme a tabela abaixo*/

/* classificação:

Média menor que 5, reprovado;
Média entre 5 e 7, recuperação;
Média acima de 7, aprovado; */


const nota1 = 8;
const nota2 = 8;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) /3;  //aqui mais simplificado

console.log(media.toFixed(2));

if (media < 5){
    console.log('Reprovado');
}else if (media > 5 && media <=7){
    console.log('Recuperação');

} else {
    console.log('aprovado');
}




//const resultadoParcial = nota1 + nota2 + nota3;
//const media = resultadoParcial / 3;

//console.log(media.toFixed(2));

/*if (media <= 5){
    console.log("reprovado")
    
}*/

