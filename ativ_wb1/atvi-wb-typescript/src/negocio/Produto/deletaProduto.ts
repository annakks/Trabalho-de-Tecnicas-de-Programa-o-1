import Produto from '../../modelo/produto';
import Entrada from '../../io/entrada';
import Deleta from "../deletar";

export default class DeletarProduto extends Deleta {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log('Deletar um produto');
        console.log('        ');
        let id = this.entrada.receberNumero('Digite o código de identificação do produto que deseja deletar: ')
        this.produtos.forEach(produto => {
            if(id === produto.id){
                this.produtos.splice((produto.id)-1);
            }
        });
        console.log('        ');
        console.log('Produto deletado com sucesso!!!');
    }
}