import Cliente from "../../modelo/cliente";
import Listas from "../listagem";


export default class ListaGenero extends Listas { 
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }

    public listar(): void {
        
   
    let fem: Cliente[] = [];
    let masc: Cliente[] = [];
    let nInf: Cliente[] = [];

    this.clientes.forEach((cliente) => {
      if (parseInt(cliente.genero) == 1) {
        fem.push(cliente);
      } else if (parseInt(cliente.genero) == 2) {
        masc.push(cliente);
      } else if (parseInt(cliente.genero) == 3) {
        nInf.push(cliente);
      }
    });

    console.log("Listagem de clientes por gênero");
    console.log('      ');
    console.log('Clientes do Gênero Feminino:');
    console.log('      ');
    
    fem.forEach(fem => {
      console.log(`Nome: ` + fem.nome);
      console.log(`Nome social: ` + fem.nomeSocial);
      console.log(`CPF: ` + fem.getCpf.getValor);
      console.log(`------------------`);
      console.log('      ');
    });

    console.log('Clientes do Gênero Masculino:')
    masc.forEach(masc => {
      console.log(`Nome: ` + masc.nome);
      console.log(`Nome social: ` + masc.nomeSocial);
      console.log(`CPF: ` + masc.getCpf.getValor);
      console.log(`-------------------`);
      console.log('      ');
    });

    console.log('Clientes que Não informaram Gênero:')
    nInf.forEach(nInf => {
      console.log(`Nome: ` + nInf.nome);
      console.log(`Nome social: ` + nInf.nomeSocial);
      console.log(`CPF: ` + nInf.getCpf.getValor);
      console.log(`----------------`);
      console.log('      ');
    });
  };
};