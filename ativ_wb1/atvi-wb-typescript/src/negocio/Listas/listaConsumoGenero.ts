import Cliente from "../../modelo/cliente";
import Lista from "../listagem";

export default class ListaConsumoGenero extends Lista {
  private clientes: Array<Cliente>;
  constructor(
    clientes: Array<Cliente>,
  ) {
    super();
    this.clientes = clientes;
  }

  public listar(): void {
    let fem: any = [];
    let masc: any = [];
    let nInf: any = [];

    this.clientes.forEach((cliente: { genero: string; }) => {
        if (parseInt(cliente.genero) == 1) {
          fem.push(cliente);
        } else if (parseInt(cliente.genero) == 2) {
          masc.push(cliente);
        } else if (parseInt(cliente.genero) == 3) {
          nInf.push(cliente);
        }
    });

    let produtosFem : any = []
    let servicosFem : any = []
      fem.forEach(cliente => {
        cliente.getProdutosConsumidos.forEach((produto) =>{
            let idProduto = produto.id
            produtosFem.push(idProduto)
        })
        cliente.getServicosConsumidos.forEach((servico) =>{
            let idServico = servico.id
            servicosFem.push(idServico)
        })
      });

    let produtosMasc : any = []
    let servicosMasc : any = []
      masc.forEach(cliente => {
        cliente.getProdutosConsumidos.forEach((produto) =>{
            let idProduto = produto.id
            produtosMasc.push(idProduto)
        })
        cliente.getServicosConsumidos.forEach((servico) =>{
            let idServico = servico.id
            servicosMasc.push(idServico)
        })
      });

    let produtosNInf : any = []
    let servicosNInf : any = []
      nInf.forEach(cliente => {
        cliente.getProdutosConsumidos.forEach((produto) =>{
            let idProduto = produto.id
            produtosNInf.push(idProduto)
        })
        cliente.getServicosConsumidos.forEach((servico) =>{
            let idServico = servico.id
            servicosNInf.push(idServico)
        })
      });

    // Para os do Gênero Feminino
    let produtoTotalFem : any = []
    let servicoTotalFem : any = []

    produtosFem.forEach(produto => {
      let total = produtosFem.filter(n => n==produto).length
      produtoTotalFem.push({
        id : produto,
        quantidade : total
      })
    });

    servicosFem.forEach(servico => {
      let total = servicosFem.filter(x => x==servico).length
      servicoTotalFem.push({
        id : servico,
        quantidade : total
      })
    });

    servicoTotalFem = servicoTotalFem.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
    let ordemServFem = servicoTotalFem.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade
    });

    produtoTotalFem = produtoTotalFem.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
    let ordemProdFem = produtoTotalFem.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

    console.log("Os 10 produtos/serviços mais consumidos por gênero");
    console.log(`---------------------------------------------------`);
    console.log("             ");
    console.log("Gênero Feminino");
    console.log("             ");
    console.log("-> Serviço");
    console.log("             ");

    ordemServFem.forEach((servico) => {
      console.log("ID do Serviço: " + servico.id);
      console.log("Quantidade: " + servico.quantidade);
      console.log(`----------------------`);
      console.log("             ");
    });

    console.log("-> Produto");
    console.log("             ");
    
    ordemProdFem.forEach((produto) => {
      console.log("ID do Produto: " + produto.id);
      console.log("Quantidade: " + produto.quantidade);
      console.log(`-----------------------`);
    });

    // Para o Gênero Masculino
    let produtoTotalMasc : any = []
    let servicoTotalMasc : any = []

    produtosMasc.forEach(produto => {
      let total = produtosMasc.filter(x => x==produto).length
      produtoTotalMasc.push({
        id : produto,
        quantidade : total
      })
    });

    servicosMasc.forEach(servico => {
      let total = servicosMasc.filter(x => x==servico).length
      servicoTotalMasc.push({
        id : servico,
        quantidade : total
      })
    });

    servicoTotalMasc = servicoTotalMasc.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
    let ordemServMasc = servicoTotalMasc.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });
    
    produtoTotalMasc = produtoTotalMasc.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
    let ordemProdMasc = servicoTotalMasc.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade
    });

    console.log("Gênero Masculino");
    console.log("             ");
    console.log("-> Serviço");
    console.log("             ");
    
    ordemServMasc.forEach((servico) => {
      console.log("ID do Serviço: " + servico.id);
      console.log("Quantidade: " + servico.quantidade);
      console.log(`------------------------`);
      console.log("             ");
    });

    console.log("-> Produto");
    console.log("             ");
    
    ordemProdMasc.forEach((produto) => {
      console.log("ID do Produto: " + produto.id);
      console.log("Quantidade: " + produto.quantidade);
      console.log(`-------------------------`);
      console.log("             ");
    });
 
    // Genero não informado
    let produtoTotalNInf : any = []
    let servicoTotalNInf : any = []

    produtosNInf.forEach(produto => {
      let total = produtosNInf.filter(x => x==produto).length
      produtoTotalNInf.push({
        id : produto,
        quantidade : total
      })
    });

    servicosNInf.forEach(servico => {
      let total = servicosNInf.filter(x => x==servico).length
      servicoTotalNInf.push({
        id : servico,
        quantidade : total
      })
    });

    servicoTotalNInf = servicoTotalNInf.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
    let ordemNInfServ = servicoTotalNInf.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

    produtoTotalNInf = produtoTotalNInf.map(e => JSON.stringify(e)).reduce((acc, cur) => (acc.includes(cur) || acc.push(cur), acc), []).map(e => JSON.parse(e));
    let ordemNInfProd = servicoTotalNInf.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

    console.log("Gênero Não Informado");
    console.log("             ");

    console.log("->Serviço");
    console.log("             ");
    ordemNInfServ.forEach((servico) => {
      console.log("Código do Serviço: " + servico.id);
      console.log("Quantidade: " + servico.quantidade);
      console.log(`----------------`);
      console.log("             ");
    });

    console.log("->Produto");
    console.log("             ");
    ordemNInfProd.forEach((produto) => {
      console.log("Código do Produto: " + produto.id);
      console.log("Quantidade: " + produto.quantidade);
      console.log(`----------------`);
      console.log("             ");
    });
}}
