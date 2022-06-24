import Cliente from "../../modelo/cliente";
import Lista from "../listagem";


export default class ListaConsumoPreco extends Lista {
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
      let consumoTotal : number=0

      cliente.getProdutosConsumidos.forEach((produto) => {
        consumoTotal = consumoTotal + produto.preco
      })

      cliente.getServicosConsumidos.forEach((servico) => {
        consumoTotal = consumoTotal + servico.preco
      })

      consumoQuantidade.push({
        cpf : cpf,
        nome : nome,
        quantidade : consumoTotal
      })
    });

    let ordenar = consumoQuantidade.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
      return b.quantidade - a.quantidade;
    });

    ordenar = ordenar.slice(0, 4);

    console.log("Os 05 clientes que mais consumiram produtos/serviços (em valor)");
    console.log("              ");
  
    ordenar.forEach((consumo) => {
      console.log("CPF: " + consumo.cpf);
      console.log("Nome do cliente: " + consumo.nome);
      console.log(`Valor Consumido: R$ ${consumo.quantidade}`);
      console.log(`-----------------------------------`);

  });

  };

}
