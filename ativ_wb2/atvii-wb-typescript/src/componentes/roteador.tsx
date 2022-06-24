import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cadastroCliente";
import ListaCliente from "./Home";
import Produtos from "./listagem/Produtos/Produtos";
import Servicos from "./listagem/Servicos/Servicos";
import Clientes from "./listagem/Clientes/Clientes";
import Consumos from "./Consumo/InserirConsumos";



type state = {
    tela: string
}



export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
    }


    

    render() {
        let barraNavegacao = <BarraNavegacao  tema="purple lighten-4" botoes={['Home', 'Cadastros','Produtos','Servicos','Clientes','Consumos']}/>
        
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            ) 
        }
        if (this.state.tela === 'Produtos') {
            return (
                <>
                {barraNavegacao}
                    <Produtos tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Servicos') {
            return (
                <>
                {barraNavegacao}
                <Servicos tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Clientes') {
            return (
                <>
                {barraNavegacao}
                <Clientes tema="purple lighten-4" />
                </>
            )
        }
        if (this.state.tela === 'Consumos') {
            return (
                <>
                {barraNavegacao}
                <Consumos tema="purple lighten-4" />
                </>
            )
        }
        
    }
}