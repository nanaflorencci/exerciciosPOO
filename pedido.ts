enum StatusPedido{
    AguardandoPreparo = "Aguardando preparo",
    EmPreparo = "Em preparo",
    SaiuParaEntrega = "Saiu para entrega",
    Entregue = "Entregue",
    ClienteAusente = "Cliente ausente"
}

class ProdutosPedido{
    nome: string;
    valor: number;
    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido{
    private produtos: ProdutosPedido[] = [];
    private status: StatusPedido;
    constructor(){
    this.produtos = [];
    this.status = StatusPedido.AguardandoPreparo;
    }
    
    AdicionarProduto (produto: ProdutosPedido){
        this.produtos.push(produto);
        return "Produto adicionado com êxito"
    }
    AtualizarStatus(status: StatusPedido){
        this.status = status;
        return "Status atualizado com êxito"
    }
    ExibirStatus(){
        return this.status;
    }
    ExibirProdutoDoPedido(){
        console.log("Produto dos pedidos:");
        for (let index = 0; index < this.produtos.length; index++){
            console.log("Produto :" + this.produtos[index].nome + "R$ " + this.produtos[index].valor.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutosPedido("dsf", 15);
const outroProdutoPedido = new ProdutosPedido("jjd", 20);
const NovoPedido = new Pedido ();

NovoPedido.AdicionarProduto(produtoPedido);
NovoPedido.AdicionarProduto(outroProdutoPedido);

console.log("Status atual do pedido:" + NovoPedido.ExibirStatus());
NovoPedido.AtualizarStatus(StatusPedido.ClienteAusente);
console.log("Status atual do pedido:" + NovoPedido.ExibirStatus());
NovoPedido.ExibirProdutoDoPedido();