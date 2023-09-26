"use strict";
const pessoa = new class {
    constructor() {
        this.PrimeiroNome = "Jack";
        this.Sobrenome = "Skellington";
    }
    getNomeCompleto() {
        return this.PrimeiroNome + " " + this.Sobrenome;
    }
};
console.log(pessoa.getNomeCompleto());
const TreinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    CalcularTempoTotal() {
        //Declarando variável para totalizar duração;
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;
        return 0;
    }
};
TreinadorPessoal.adicionarExercicios("Corrida", 30);
TreinadorPessoal.adicionarExercicios("Flexões", 15);
TreinadorPessoal.adicionarExercicios("Agachamentos", 20);
console.log("Tempo total necessário para a rotina: " + TreinadorPessoal.CalcularTempoTotal() + " minutos.");
