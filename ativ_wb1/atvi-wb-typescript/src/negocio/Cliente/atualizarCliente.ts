import Cliente from '../../modelo/cliente';
import Entrada from '../../io/entrada';
import Atualizar from "../atualizar";
import RG from '../../modelo/rg';
import Telefone from '../../modelo/telefone';

export default class AtualizarCliente extends Atualizar {
    private clientes: Array<Cliente> /// cria as varaveis e inicia com o import
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {  
        super()
        this.clientes = clientes /// recebe de clientes com clientes impotados
        this.entrada = new Entrada() /// recebe nova intomação para atualizar
    }
    public atualizar(): void {
        console.log('Atualização de dados do cliente');
        let cpf = this.entrada.receberTexto('Digite o CPF do cliente para atualizar: '); // recebe um cpf
        this.clientes.forEach(cliente => {
            if(cpf === cliente.getCpf.getValor){ /// confirma se tem o cliente
                let confirmado = true /// se confimar, entra na while
                while (confirmado) {
                    console.log('        ');
                    console.log ('Opções para atualizar:');
                    console.log ('1 - Nome');
                    console.log ('2 - Nome Social');
                    console.log ('3 - Gênero');
                    console.log ('4 - RG');
                    console.log ('5 - Telefone');
                    console.log ('0 - Sair');
                    console.log('        ');

                
                    let entrada = new Entrada()
                    let opcao = entrada.receberNumero('Digite uma das opções para atualizar: ');
                
                    switch (opcao) {
                        case 1:
                            let nome = this.entrada.receberTexto('Digite o novo nome: ');
                            cliente.nome = nome
                            break;
                        case 2:
                            let nomeSocial = this.entrada.receberTexto('Digite o novo nome social: ');
                            cliente.nomeSocial = nomeSocial
                            break;
                        case 3:
                            console.log('        ');
                            console.log('Gênero do cliente:'); /// acrescentando genero ao cadastro
                            console.log('1 - Feminino');
                            console.log('2 - Masculino');
                            console.log('3 - Não informado');
                            console.log('        ');
                            let genero = this.entrada.receberTexto('Digite o novo genero: ');
                            cliente.genero = genero
                            break;
                        case 4: 
                            let rgs: Array<RG> = [];
                            let valor = this.entrada.receberTexto("Novo número de RG: ");
                            let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                            let partesData = data.split("/");
                            let ano = new Number(partesData[2].valueOf()).valueOf();
                            let mes = new Number(partesData[1].valueOf()).valueOf();
                            let dia = new Number(partesData[0].valueOf()).valueOf();
                            let dataEmissao = new Date(ano, mes, dia);
                            rgs.push(new RG(valor, dataEmissao));
                            break;
                        case 5: 
                            let telefone: Array<Telefone> = [];
                            let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
                            let numero = this.entrada.receberTexto(`Por favor informe o Telefone: `);
                            telefone.push(new Telefone(ddd, numero));
                            break;

                        case 0:
                            confirmado = false
                            console.log('Saindo');
                            break;
                        default:
                            console.log('Digite uma opção valida!');
            }
                }}});
        console.log('Atualização concluida com sucesso!!');
    }
}
