import Cliente from "../../modelo/cliente";
import Lista from "../listagem";

export default class ListaConsumo extends Lista {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }
    public listar(): void {
        let produtos : any = [] /// lista de produtos comprados vazia 
        let servicos : any = [] // lista de serviços consumidos vazia
        this.clientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach((produto) =>{
                let produto_cod = produto.id;
                produtos.push(produto_cod); // o produto consumido por cada cliente a lista vazia
            });
            cliente.getServicosConsumidos.forEach((servico) =>{
                let servico_cod = servico.id;
                servicos.push(servico_cod); // o servico consumido por cada cliente a lista vazia
            });
        });

        let produtoTotal: any = [] /// lista de total de produtos consumidos vazia
        let servicoTotal: any = [] /// lista de total de serviços consumidos vazia
        
        produtos.forEach(produto => {
           let total = produtos.filter(n => n==produto).length
                produtoTotal.push({
                    id : produto,
                    quantidade : total ///total de produto consumido inseridos na lista vazia 
                })
        });
            
        servicos.forEach(servico => {
            let total = servicos.filter(n => n==servico).length
                servicoTotal.push({
                    id : servico,
                    quantidade: total ///total de serviço consumido inseridos na lista vazia 
                })
        });
        /// ordenando o produto mais consumido para o menos consumido
        produtoTotal = produtoTotal.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
        let ordemProd = produtoTotal.sort((a, b) => {
            return b.quantidade - a.quantidade;
        });
        /// ordenando o serviço mais consumido para o menos consumido
        servicoTotal = servicoTotal.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
        let ordemServ = servicoTotal.sort((a, b) => {
            return b.quantidade - a.quantidade;
        });

        console.log("Lista geral dos serviços ou produtos mais consumidos");
        console.log("             ");
        console.log("Os produtos mais consumidos");
        console.log("             ");

        ordemProd.forEach((produto) => {
                console.log("Código do Produto: " + produto.id);
                console.log("Quantidade: " + produto.quantidade);
                console.log(`--------------------------`);
                console.log("             ");
        });
        
        console.log("             ");
        console.log("Os serviços mais consumidos");
        console.log("             ");
      
        ordemServ.forEach((servico) => {
                console.log("Código do Serviço: " + servico.id);
                console.log("Quantidade: " + servico.quantidade);
                console.log(`--------------------------`);
        });
        console.log("             ");
    }}