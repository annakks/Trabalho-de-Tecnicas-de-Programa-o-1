import Produto from '../../modelo/produto';
import Entrada from '../../io/entrada';
import Atualizar from "../atualizar";

export default class AtualizarProduto extends Atualizar {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log('Atualização de dados do produto');
        console.log('        ');
        let id = this.entrada.receberNumero('Digite o código de identificação do produto: ')
        let nome = this.entrada.receberTexto('Digite o novo nome do produto: ')
        let preco = this.entrada.receberNumero('Digite o novo preço do produto: ')
        this.produtos.forEach(produto => {
            if(id === produto.id){
                produto.nome = nome
                produto.preco = preco
            }
        
        
        });
        console.log('        ');
        console.log('Atualização concluida com sucesso!!');
    }
}


