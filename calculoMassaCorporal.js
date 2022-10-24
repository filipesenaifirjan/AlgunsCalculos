/*O Imc Indice de massa corporal é um critério da Organização Mundial da Saúde para dar indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:

IMC = peso / (altura * altura)

elabore um algorítimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC em adultos condição:

Abaixo de 18.5 Abaixo do peso;
Entre 18.5 e 25 normal;
Entre 25 e 30 Acima do peso;
Entre 30 3 40 Obeso;
Acima de 40 Obesidade Grave; */

const peso = 40;
const altura = 1.70;
const massaCorporal = peso/ Math.pow (altura, 2);
console.log(massaCorporal);

if (massaCorporal < 18.5 ){
    console.log('Abaixo do peso');
}
    else if (massaCorporal >= 18.5 && massaCorporal < 25){
    console.log('Peso normal');

}else if (massaCorporal >= 25 && massaCorporal < 30 ){
    console.log('Acima do peso'); 
    
}
else if (massaCorporal >= 30 && massaCorporal < 40){
    console.log('Obeso');
}
else  
    console.log('Obesidde grave')

  
     
    

