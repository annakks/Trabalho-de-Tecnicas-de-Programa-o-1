import Servico from '../../modelo/servico';
import Entrada from '../../io/entrada';
import Atualizar from "../atualizar";

export default class AtualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log('Atualização de  dados  serviço');
        console.log('        ');
        let id = this.entrada.receberNumero('Digite o código de identificação do serviço: ')
        let nome = this.entrada.receberTexto('Digite o novo nome do serviço: ')
        let preco = this.entrada.receberNumero('Digite o novo preço do serviço: ')
        this.servicos.forEach(servico => {
            if(id === servico.id){
                servico.nome = nome
                servico.preco = preco
            }
        
        
        });
        console.log('        ');
        console.log('Atualização concluida com sucesso!!');
    }
}
