/*Desafio 3:

elabore um algorítimo que calcule o que deve ser pago pelo produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento:
Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o calculo adequado.

código condição de pagamento:

A vista débito, recebe 10% de desconto;
A vista em dinheiro ou Pix, recebe 15% de desconto;
Em duas vezes, preço normal de etiqueta sem juros;
Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

const precoDeEtiqueta =35.00;
const formaDePagamento = 4;

if (formaDePagamento === 1 ){
    console.log( precoDeEtiqueta - (precoDeEtiqueta * 0.1) );
}

 else if(formaDePagamento === 2){
 console.log(precoDeEtiqueta - (precoDeEtiqueta * 0.15));

}
else if(formaDePagamento === 3){
    console.log(precoDeEtiqueta);
}

else if(formaDePagamento === 4)
{
    console.log(precoDeEtiqueta + (precoDeEtiqueta * 0.1));
}
//const debitoAVistaPix = precoDeEtiqueta
//const pagEmDuasVezes = precoDeEtiqueta;
//const pagEmMaisVEzes = precoDeEtiqueta + % 10;

