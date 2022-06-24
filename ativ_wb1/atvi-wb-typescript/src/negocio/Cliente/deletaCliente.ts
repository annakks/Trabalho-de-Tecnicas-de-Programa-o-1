import Cliente from '../../modelo/cliente';
import Entrada from '../../io/entrada';
import Deleta from "../deletar";

export default class DeletaCliente extends Deleta {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log('        ');
        console.log('Deletar um cliente');
        console.log('        ');
        let cpf = this.entrada.receberTexto('Digite o CPF do cliente que deseja deletar: ');
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){ /// se o cfp bater com o do cliente
                let index = this.clientes.indexOf(cliente); ///// *****verificar se funciona********/////
                this.clientes.splice(index);
            };
        });
        console.log('        ');
        console.log('Cliente deletado com sucesso!!!');
    };
};