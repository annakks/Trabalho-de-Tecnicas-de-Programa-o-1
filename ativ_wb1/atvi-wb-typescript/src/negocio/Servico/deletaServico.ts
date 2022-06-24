import Servico from '../../modelo/servico';
import Entrada from '../../io/entrada';
import Deleta from '../deletar';

export default class DeletaServico extends Deleta {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    };
    public deletar(): void {
        console.log('Deletar um serviço');
        console.log('        ');
        let id = this.entrada.receberNumero('Digite o código de identificação do serviço que deseja deletar: ');
        this.servicos.forEach(servico => {
            if(id === servico.id){
                this.servicos.splice((servico.id)-1);    
            };
        });
        console.log('        ');
        console.log('Serviço deletado com sucesso!!!');
    };
};