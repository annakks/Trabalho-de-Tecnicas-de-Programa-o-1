import Cliente from "../../modelo/cliente";
import Lista from "../listagem";


export default class ListaConsumoQtdProdServ extends Lista {
  private clientes: Array<Cliente>;
  constructor(
    clientes: Array<Cliente>,
  ) {
    super();
    this.clientes = clientes;
    
  }

  public listar(): void {
    
    let consumoQuantidade : any =  [];

    this.clientes.forEach((cliente) => {
      
      let cpf = cliente.getCpf.getValor;

      let nome = cliente.nome

      let consumoTotal =
        cliente.getProdutosConsumidos.length +
        cliente.getServicosConsumidos.length;

      consumoQuantidade.push({
        cpf : cpf,
        nome : nome,
        quantidade : consumoTotal
      })
    
    });

    let ordem = consumoQuantidade.sort((x, y) => {
      return y.quantidade - x.quantidade;
    });

    ordem = ordem.slice(0, 9);

    console.log("Os 10 clientes que mais consumiram produtos ou serviços, em quantidade");
    console.log('        ');

    ordem.forEach((consumo) => {
          console.log("CPF: " + consumo.cpf);
          console.log("Nome do cliente: " + consumo.nome);
          console.log("Quantidade Consumida: " + consumo.quantidade);
          console.log(`--------------------------------------`);
          console.log('        ');
          

  });

  };

}

