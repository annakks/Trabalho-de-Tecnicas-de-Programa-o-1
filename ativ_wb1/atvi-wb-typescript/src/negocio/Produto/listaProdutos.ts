import Produto from '../../modelo/produto';
import Listagem from "../listagem";

export default class ListaProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nListagem de produtos disponíveis:`);
        console.log('        ');
        this.produtos.forEach(produto => {
            console.log(`\nNúmero de Identificação: ` + produto.id);
            console.log(`Nome do Produto: ` + produto.nome);
            console.log('Valor: R$ ' + produto.preco)
            console.log(`--------------------------------------`);
            
        });
        console.log('        ');
    }
}