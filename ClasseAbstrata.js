"use strict";
class Animal {
    constructor(nome, patas) {
        this.nome = nome;
        this.patas = patas;
    }
    Apresentar() {
        console.log("Este é um " + this.nome + "com " + this.patas + "patas.");
    }
}
