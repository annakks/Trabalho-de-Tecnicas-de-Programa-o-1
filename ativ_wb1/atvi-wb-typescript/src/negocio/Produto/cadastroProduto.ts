import Entrada from '../../io/entrada';
import Produto from '../../modelo/produto';
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log('Cadastro de novo produto');
        console.log('        ');
        let id = this.entrada.receberNumero('Código de identificação do produto: ')
        let nomeProduto = this.entrada.receberTexto('Nome do produto: ')
        let preco = this.entrada.receberNumero('Preço do produto: ')
        let produto = new Produto()
        produto.id = id
        produto.nome = nomeProduto
        produto.preco = preco
        this.produtos.push(produto)
        console.log('        ');
        console.log('Produto cadastro com sucesso!!!');
    }
    
}