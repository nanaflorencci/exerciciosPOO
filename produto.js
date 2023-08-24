"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    detalhesproduto() {
        return "O produto " + this.nome + " custa " + this.preco + " reais";
    }
    descontoproduto(desconto) {
        return "Desconto de" + desconto + "% aplicado. preço reduzido = R$" + this.preco * desconto / 100;
    }
}
let produto1 = new Produto("Mangá Junji Ito", 30);
let produto2 = new Produto("Vinil Michael Jackson", 250);
let produto3 = new Produto("HQ Do Inferno", 50);
console.log(produto1.detalhesproduto());
console.log(produto2.detalhesproduto());
console.log(produto3.detalhesproduto());
console.log(produto1.descontoproduto(5));
console.log(produto2.descontoproduto(10));
console.log(produto3.descontoproduto(7));
