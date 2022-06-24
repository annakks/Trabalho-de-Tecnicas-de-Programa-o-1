import { Routes,Route } from "react-router-dom";
import { Component } from "react";
import Home from "../Home";
import CadastroCliente from "../cadastroCliente";
import Clientes from "../listagem/Clientes/Clientes";
import Produtos from "../listagem/Produtos/Produtos";
import Servicos from "../listagem/Servicos/Servicos";
import AtualizarCliente from "../Atualizar/Clientes/atualizarCliente";
import AtualizarProduto from "../Atualizar/Produtos/atualizarProduto";
import AtualizarServico from "../Atualizar/Servicos/atualizarServico";
import InserirConsumos from "../Consumo/InserirConsumos";
import ConsumoDoCliente from "../Consumo/ConsumoDoCliente";





type state = {
}

export default class AppRoutes extends Component <{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        
    }
    render(){

    return (
        <Routes>
            <Route path="/Home" element={<Home tema="purple lighten-4"/>} />
            <Route path="/" element={<Home tema="purple lighten-4"/>} />
            <Route path="/Cadastros" element={<CadastroCliente tema="purple lighten-4"/>} />
            <Route path="/Clientes" element={<Clientes tema="purple lighten-4" />} />
            <Route path="/Produtos" element={<Produtos tema="purple lighten-4"/>} />
            <Route path="/Servicos" element={<Servicos tema="purple lighten-4"/>} /> 
            <Route path="/atualizarCliente" element={<AtualizarCliente tema="purple lighten-4"/>} />
            <Route path="/atualizarProduto" element={<AtualizarProduto tema="purple lighten-4"/>} />
            <Route path="/atualizarServico" element={<AtualizarServico tema="purple lighten-4"/>} />
            <Route path="/Consumos" element={<InserirConsumos tema="purple lighten-4"/>} />
            <Route path="/Consumo" element={<ConsumoDoCliente tema="purple lighten-4"/>} />
        </Routes> 
    );
    }
}


