

class Pessoa { //classe é a definição e objeto é uma coleção de valores
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p2.idade) { 
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
} else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
}
}

const filipe = new Pessoa('Filipe', 18);
const filipe2 = new Pessoa('Filipe2',17);

compararPessoas(filipe, filipe2);


//usando objeto para agregar valores de uma forma facil de entender





























//const filipe = new Pessoa('Filipe', 17);
//filipe.nome = 'Filipe Mattos';
//filipe.idade = 18;

//const filipe2 = new Pessoa('Filipe2', 18);
//filipe2.nome = 'Filipe2';
//filipe2.idade = 16;

//duas maneiras abaixo de impromir a classe e as instâncias
//filipe.descrever();
//filipe2.descrever();

//console.log(filipe);


//console.log(filipe);
//console.log(filipe2);








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