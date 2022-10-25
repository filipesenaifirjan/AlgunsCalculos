

const pessoa = {
    nome: 'Filipe Mattos',   
    idade: 18,    //outro detalhe bacana é colocar funcão dentro do objeto

    descrever: function () {
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(pessoa[`nome`]);//através de uma string vc acessa dinamicamente o atributo






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