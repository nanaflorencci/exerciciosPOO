"use strict";
class ProdutoLoja {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtos = [];
    }
    AdicionarProduto(produto) {
        this.produtos.push(produto);
    }
    ListarProdutos() {
        console.log("Foi adicionado ao meu carrinho os seguintes produtos: ");
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + " custando R$" + this.produtos[i].preco);
        }
    }
    ExcluirProduto(produto) {
        this.produtos = this.produtos.filter(item => item.nome != produto.nome);
        console.log("O produto " + produto.nome + " foi apagado do seu carrinho");
    }
    CalcularPreços() {
        let soma = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            soma = soma + this.produtos[i].preco;
        }
        return "sua compra é de " + soma.toFixed(2);
    }
}
class Loja {
    constructor() {
        this.estoque = [];
        this.carrinho = new CarrinhoDeCompras();
    }
    Listarestoque() {
        console.log("Nesta loja tem");
        for (let i = 0; i < this.estoque.length; i++) {
            console.log(this.estoque[i].nome + " custando R$" + this.estoque[i].preco);
        }
    }
    Adicionarestoque(estoque) {
        this.estoque.push(estoque);
    }
    Excluirestoque(estoque) {
        this.estoque = this.estoque.filter(item => item.nome != estoque.nome);
        console.log("Seu produto " + estoque.nome + " foi excluido do estoque");
    }
    AdicionarAoCarrinho(produto) {
        const produtoencontrado = this.estoque.find(item => item.nome == produto.nome);
        if (produtoencontrado) {
            this.carrinho.AdicionarProduto(produto);
            return "Produto adicionado ao carrinho de compras";
        }
        else {
            return "produto não encontrado no estoque";
        }
    }
    RemoverDoCarrinho(produto) {
        this.carrinho.ExcluirProduto(produto);
        return "Produto removido do carrinho de compras";
    }
    ListarDocarrinho() {
        this.carrinho.ListarProdutos();
    }
    ValorTotalDocarrinho() {
        this.carrinho.CalcularPreços();
        return this.carrinho.CalcularPreços();
    }
}
const objeto = new ProdutoLoja("Pelucia", 100);
const objeto1 = new ProdutoLoja("cachorrinho", 30);
const objeto2 = new ProdutoLoja("carrinho", 50);
const objeto3 = new ProdutoLoja("boneca", 20);
const SeuCarrinho = new CarrinhoDeCompras();
SeuCarrinho.AdicionarProduto(objeto);
SeuCarrinho.AdicionarProduto(objeto2);
SeuCarrinho.AdicionarProduto(objeto3);
console.log(SeuCarrinho.ListarProdutos());
console.log(SeuCarrinho.ExcluirProduto(objeto));
console.log(SeuCarrinho.CalcularPreços());
console.log("");
console.log("");
const estoque = new Loja();
estoque.Adicionarestoque(objeto);
estoque.Adicionarestoque(objeto1);
estoque.Adicionarestoque(objeto2);
estoque.Adicionarestoque(objeto3);
console.log(estoque.Listarestoque());
console.log(estoque.Excluirestoque(objeto3));
console.log(estoque.AdicionarAoCarrinho(objeto));
console.log(estoque.AdicionarAoCarrinho(objeto1));
console.log(estoque.AdicionarAoCarrinho(objeto2));
console.log(estoque.AdicionarAoCarrinho(objeto3));
console.log(estoque.ValorTotalDocarrinho());
console.log("");
console.log(estoque.RemoverDoCarrinho(objeto1));
estoque.Excluirestoque(objeto1);
console.log("");
console.log(estoque.ListarDocarrinho());
console.log(estoque.ValorTotalDocarrinho());