

class Pessoa { //classe é a definição
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
const filipe = new Pessoa();
filipe.nome = 'Filipe Mattos';
filipe.idade = 18;

const filipe2 = new Pessoa();
filipe2.nome = 'Filipe2';
filipe2.idade = 16;

//duas maneiras abaixo de impromir a classe e as instâncias
filipe.descrever();
filipe2.descrever();


console.log(filipe);
console.log(filipe2);








/*
const pessoa = {  //instância é a ocorrência
    nome: 'Filipe Mattos',   
    idade: 18,    //outro detalhe bacana é colocar funcão dentro do objeto

    descrever: function () {
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa[`nome`]);//através de uma string vc acessa dinamicamente o atributo
*/





//ou:
//pessoa.descrever = function() {
   // console.log(`Meu nome é ${this.nome}`);
//}

//pessoa.descrever();

//uma vez que definimos o objeto literal, podemos incrementar ele dinamicamente
//filipe.altura = 1.76;

//ou pode decrementar dinamicamante, ex abaixo:
//delete filipe.nome;

//console.log(filipe.nome);
//console.log(filipe.idade);
//console.log(filipe);

//obs: ele é uma coleção dinâmica de chave e valor