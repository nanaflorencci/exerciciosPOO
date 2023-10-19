class ProdutoLoja{
    nome: string;
    preco: number;

    constructor(NomeDoProduto: string, PrecoDoProduto: number) {
        this.nome = NomeDoProduto;
        this.preco = PrecoDoProduto;
    }
}

class CarrinhoDeCompras{
    ProdutosDoCarrinho: ProdutoLoja[] = [];

    constructor() {
        //this.ProdutosDoCarrinho = [];
    }

    AdicionarProduto(produto: ProdutoLoja) {
        this.ProdutosDoCarrinho.push(produto);
    }
    ExcluirProduto(produto: ProdutoLoja){
        this.ProdutosDoCarrinho = this.ProdutosDoCarrinho.filter((item) => item.nome !== produto.nome);
        console.log("O produto " + produto.nome + " foi apagado do seu carrinho");
    }
    ExcluirProdutoII(produto: ProdutoLoja){
        this.ProdutosDoCarrinho = this.ProdutosDoCarrinho.filter(item => item.nome !== produto.nome);
        console.log("O produto " + produto.nome + " foi apagado do seu carrinho");
    }
    CalcularValorTotal(){
        let soma = 0;
        for (let i = 0; i < this.ProdutosDoCarrinho.length; i++){
            soma = soma + this.ProdutosDoCarrinho[i].preco;
        }
        return "Sua compra equilave a R$ " + soma.toFixed(2);
    }
    ExibirProdutos(){
        console.log("Produto do carrinho:");
        for (let i = 0; i < this.ProdutosDoCarrinho.length; i++){
            console.log("Produto: " + this.ProdutosDoCarrinho[i].nome + "R$ " + this.ProdutosDoCarrinho[i].preco.toFixed(2));
        }
    }
}

class Loja{
    ProdutosDoEstoque: ProdutoLoja[] = [];
    CarrinhoDeCompras = new CarrinhoDeCompras();
    constructor() {}
    AdicionarProdutoAoEstoque(produto: ProdutoLoja) {
        this.ProdutosDoEstoque.push(produto)
    }
    RemoverProdutoDoEstoque(produto: ProdutoLoja){
        this.ProdutosDoEstoque = this.ProdutosDoEstoque.filter(item => item.nome !== produto.nome)
    }
    AdicionarProdutoAoCarrinho(produto: ProdutoLoja){
        const ProdutoEncontrado = this.ProdutosDoEstoque.find(item => item.nome === produto.nome);
        if(ProdutoEncontrado){
            this.CarrinhoDeCompras.AdicionarProduto(ProdutoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else{
            return "Produto não encontrado ao estoque da loja";
        }
    }
    RemoverProdutoDoCarrinho(produto: ProdutoLoja){
        //this.CarrinhoDeCompras.ExcluirProduto(produto.nome);
        this.CarrinhoDeCompras.ExcluirProdutoII(produto);
    }
    ExibirProdutosDoCarrinho(){
        this.CarrinhoDeCompras.ExibirProdutos();    
    }
}
//Criando produtos
const ProdutoLojaI = new ProdutoLoja("Camiseta Babu Gavassi", 29.99);
const ProdutoLojaII = new ProdutoLoja ("Meia Babu Gavassi", 12.99);
const ProdutoLojaIII = new ProdutoLoja ("Bolsinha Babu Gavassi", 20.99);

//Criando a loja
const MinhaLoja = new Loja();

//Adicionando produto ao estoque
MinhaLoja.AdicionarProdutoAoEstoque(ProdutoLojaI);
MinhaLoja.AdicionarProdutoAoEstoque(ProdutoLojaII);
MinhaLoja.AdicionarProdutoAoEstoque(ProdutoLojaIII);

//Adicionando produto ao carrinho de compras
MinhaLoja.AdicionarProdutoAoEstoque(ProdutoLojaI);
MinhaLoja.AdicionarProdutoAoEstoque(ProdutoLojaII);
MinhaLoja.AdicionarProdutoAoEstoque(ProdutoLojaIII);

//Remover produto do carrinho de compras
MinhaLoja.RemoverProdutoDoCarrinho(ProdutoLojaIII);

//Exibindo produtos do carrinho de compras
MinhaLoja.ExibirProdutosDoCarrinho();

//Exibindo valor total do carrinho de compras
console.log("Total do carrinho de compras: R$ " + MinhaLoja.CarrinhoDeCompras.CalcularValorTotal());