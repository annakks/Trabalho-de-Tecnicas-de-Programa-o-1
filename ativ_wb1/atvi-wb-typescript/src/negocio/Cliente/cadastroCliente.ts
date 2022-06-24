import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        console.log('        ');
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        console.log('        ');
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        console.log('        ');
        console.log('Gênero do cliente:'); /// acrescentando genero ao cadastro
        console.log('1 - Feminino');
        console.log('2 - Masculino');
        console.log('3 - Não informado');
        console.log('        ');
        let genero = this.entrada.receberTexto("Digite opção de gênero: ");
        console.log('        ');
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF co Cliente: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        console.log('        ');
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG do Cliente: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        console.log('        ');
        let partesDataRG = dataRG.split("/");
        let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
        let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
        let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
        let rgs = new RG(valorRG, dataEmissaoRG);


        let ddd = this.entrada.receberTexto(`Por favor informe o número do DDD do Telefone do Cliente: `);
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone do Cliente: `);
        let telefone = new Telefone(ddd, numero);

        let cliente = new Cliente(nome, nomeSocial, genero, cpf, rgs, telefone);
        this.clientes.push(cliente)
        console.log('        ');
        console.log(`\nCadastro concluído :)\n`);
        console.log('        ');
    }
}