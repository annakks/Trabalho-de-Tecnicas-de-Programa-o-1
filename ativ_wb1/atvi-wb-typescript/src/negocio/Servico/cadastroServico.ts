import Entrada from '../../io/entrada';
import Servico from '../../modelo/servico';
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()

    }

    public cadastrar(): void {
        console.log('Cadastro de novo serviço');
        console.log('        ');
        let id = this.entrada.receberNumero('Código de identificação do serviço: ')
        let nomeServico = this.entrada.receberTexto('Nome do serviço: ')
        let preco = this.entrada.receberNumero('Preço do serviço: ')
        let servico = new Servico()
        servico.id = id
        servico.nome = nomeServico
        servico.preco = preco
        this.servicos.push(servico)
        console.log('        ');
        console.log('Serviço cadastro com sucesso!!!');
    }
    
}