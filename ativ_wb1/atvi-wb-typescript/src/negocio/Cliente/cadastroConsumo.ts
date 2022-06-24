import Cliente from '../../modelo/cliente';
import Atualizar from "../atualizar";
import Entrada from '../../io/entrada';
import Produto from '../../modelo/produto';
import Servico from '../../modelo/servico';

export default class AtualizarConsumo extends Atualizar {

    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada
  
    constructor(
      clientes: Array<Cliente>,
      produtos: Array<Produto>,
      servicos: Array<Servico>
    ) {
      super();
      this.clientes = clientes;
      this.produtos = produtos;
      this.servicos = servicos;
      this.entrada = new Entrada()
    }
    
   
    public atualizar(): void {
        console.log('Consumos do cliente');
        console.log('        ');
        let cpf = this.entrada.receberTexto('Digite o CPF do cliente: ')
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){ /// comparando number com number
                let execucao = true
                while (execucao) {
                    console.log('        ');
                    console.log('Opções de consumo');
                    console.log(`1 - Produto`);
                    console.log(`2 - Serviço`);
                    console.log(`0 - Sair`);
                    console.log('        ');
                
                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero('O que o cliente consumiu:  ')
                    switch (opcao) {
                        case 1:
                            let idProduto = this.entrada.receberNumero('Por favor, digite o Número de Identificação do produto consumido: ')
                            this.produtos.forEach((produto) => {
                                if (produto.id == idProduto) {
                                  cliente.getProdutosConsumidos.push(produto);
                                } 
                              });
                            break;
                        case 2:
                            let idServico = this.entrada.receberNumero('Por favor, digite o id do serviço consumido: ')
                            this.servicos.forEach((servico) => {
                                if (servico.id == idServico) {
                                  cliente.getServicosConsumidos.push(servico);
                                } 
                              });
                            break;
                        case 0:
                            execucao = false
                            console.log(`Ok!!! Até mais`)
                            break;
                        default:
                            console.log(`Digite uma opção valida`) 
            }
                }}});
        console.log(`Consumo inserido com Sucesso`);
    }
}
