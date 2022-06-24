import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import CadastroServico from "../negocio/Servico/cadastroServico";
import CadastroProduto from "../negocio/Produto/cadastroProduto";
import ListaClientes from "../negocio/Cliente/listaClientes";
import ListaServicos from "../negocio/Servico/listaServicos";
import ListaProdutos from "../negocio/Produto/listaProdutos";
import AtualizarCliente from "../negocio/Cliente/atualizarCliente";
import AtualizarServico from "../negocio/Servico/atualizarServico";
import AtualizarProduto from "../negocio/Produto/atualizarProduto";
import AtualizarConsumo from "../negocio/Cliente/cadastroConsumo";
import DeletarCliente from "../negocio/Cliente/deletaCliente";
import DeletarServico from "../negocio/Servico/deletaServico";
import DeletarProduto from "../negocio/Produto/deletaProduto";
import ListaConsumoQtdProdServ from "../negocio/Listas/listaConsumoQtdProdServ";
import ListaGenero from "../negocio/Listas/listaGenero";
import ListaConsumo from "../negocio/Listas/listaConsumo";
import ListaConsumoGenero from "../negocio/Listas/listaConsumoGenero";
import ListaMenorQtdd from "../negocio/Listas/listaMenorQtdd"
import ListaConsumoPreco from "../negocio/Listas/listaConsumoPreco";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log("   ")
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Atualizar Cliente`);
    console.log(`3 - Deletar Cliente`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`5 - Cadastrar Serviço`);
    console.log(`6 - Atualizar Serviço`);
    console.log(`7 - Deletar Serviço`);
    console.log(`8 - Listar todos os serviços`);
    console.log(`9 - Cadastrar Produto`);
    console.log(`10 - Atualizar Produto`);
    console.log(`11 - Deletar Produto`);
    console.log(`12 - Listar todos os produtos`);
    console.log(`13 - Cadastrar Consumo`);
    console.log(`14 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade`);
    console.log(`15 - Listagem de todos os clientes por gênero`);
    console.log(`16 - Listagem geral dos serviços ou produtos mais consumidos`);
    console.log(`17 - Listagem dos serviços ou produtos mais consumidos por gênero`);
    console.log(`18 - Listagem dos 10 clientes que menos consumiram produtos ou serviços`);
    console.log(`19 - Listagem dos 5 clientes que mais consumiram em valor`);
    console.log(`0 - Sair`);
    console.log("-----------------------------------")

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    console.log("    ")

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let atualizarClientes = new AtualizarCliente(empresa.getClientes)
            atualizarClientes.atualizar()
            break;
        case 3:
            let DeletarClientes = new DeletarCliente(empresa.getClientes)
            DeletarClientes.deletar()
            break;
        case 4:
            let listagem = new ListaClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;       
        case 6:
            let atualizarServicos = new AtualizarServico(empresa.getServicos)
            atualizarServicos.atualizar()
            break;
        case 7:
            let deletarServicos = new DeletarServico(empresa.getServicos)
            deletarServicos.deletar()
            break;      
        case 8:
            let listagemServicos = new ListaServicos(empresa.getServicos)
            listagemServicos.listar()
            break;  
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;    
        case 10:
            let atualizarProdutos = new AtualizarProduto(empresa.getProdutos)
            atualizarProdutos.atualizar()
            break;    
        case 11:
            let deletarProdutos = new DeletarProduto(empresa.getProdutos)
            deletarProdutos.deletar()
            break;     
        case 12:
            let listagemProdutos = new ListaProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;      
        case 13:
            let inserirConsumo = new AtualizarConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            inserirConsumo.atualizar()
            break;
        case 14:
            let listarCliente10Mais = new ListaConsumoQtdProdServ(empresa.getClientes)
            listarCliente10Mais.listar()
            break;
        case 15:
            let listarClientesGenero = new ListaGenero(empresa.getClientes)
            listarClientesGenero.listar()
            break;
        case 16:
            let listarProdutoServiçoMaisConsumido = new ListaConsumo(empresa.getClientes)
            listarProdutoServiçoMaisConsumido.listar()
            break;
        case 17:
            let listarProdutoServiçoMaisConsumidoGenero = new ListaConsumoGenero(empresa.getClientes)
            listarProdutoServiçoMaisConsumidoGenero.listar()
            break;
        case 18:
            let listarClienteMenos = new ListaMenorQtdd(empresa.getClientes)
            listarClienteMenos.listar()
            break; 
        case 19:
            let listarClientePreco = new ListaConsumoPreco(empresa.getClientes)
            listarClientePreco.listar()
            break;   
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}