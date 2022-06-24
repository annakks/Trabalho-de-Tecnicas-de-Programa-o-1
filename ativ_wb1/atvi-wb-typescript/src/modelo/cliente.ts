import CPF from "./cpf"
import RG from "./rg"
import Telefone from "./telefone"
import Produto from "./produto"
import Servico from "./servico"


export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG> 
    private dataCadastro: Date
    private telefones: Array<Telefone> 
    private produtosConsumidos: Array<Produto> 
    private servicosConsumidos: Array<Servico>
    public genero: string /// acrescentando genero para a barbearia 
    constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF, rgs: RG, telefones: Telefone) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.genero = genero
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
}