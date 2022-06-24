import Cliente from "../../modelo/cliente";
import Lista from "../listagem";


export default class ListaMenorQtdd extends Lista {
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

    let ordem = consumoQuantidade.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return a.quantidade - b.quantidade;
    });

    ordem = ordem.slice(0, 4);

    console.log(
      "\nOs 5 clientes que mmenos consumiram produtos/serviços (em quantidade)"
    );
    
    console.log(`--------------------------------------\n`);

    ordem.forEach((consumo) => {
          console.log("CPF: " + consumo.cpf);
          console.log("Nome do cliente: " + consumo.nome);
          console.log("Quantidade Consumida: " + consumo.quantidade);
          console.log(`--------------------------------------\n`);

  });

  };

}

