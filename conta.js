"use strict";
class ContaBancaria {
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    Saldo() {
        return "Olá, " + this.nome + "." + " Seu saldo atual é de R$" + this.saldo + ",00" + ".";
    }
    Deposito(deposito) {
        this.saldo = this.saldo + deposito;
        let msgDeposito = '. Seu depósito foi executado com sucesso!';
        if (this.saldo < 2) {
            let msgDeposito = '. Seu depósito foi negado...';
        }
        return "Olá, " + this.nome + msgDeposito + " Você depositou R$" + deposito + ",00" + ". Seu depósito atual é de R$" + (this.saldo + deposito) + ",00" + ".";
    }
    Saque(saque) {
        let msgSaque = ". Seu saque foi executado com sucesso!";
        if (saque > this.saldo) {
            let msgSaque = ". Seu saque foi negado! Saldo insuficiente...";
            return "Olá," + this.nome + msgSaque + ". Seu saldo atual é de R$" + this.saldo + ",00.";
        }
        else {
            this.saldo = this.saldo - saque;
            return "Olá, " + this.nome + msgSaque + ". Seu saldo atual é de R$" + this.saldo + ",00.";
        }
    }
}
let MinhaConta = new ContaBancaria("João", 1000);
console.log(MinhaConta.Saldo());
console.log(MinhaConta.Deposito(500));
console.log(MinhaConta.Saque(200));
console.log(MinhaConta.Saque(1500));
