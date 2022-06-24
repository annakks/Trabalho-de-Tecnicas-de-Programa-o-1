import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Consumos from "./Consumo/InserirConsumos";
import CadastroCliente from "./CadastroCliente";
import Home from "./Home";
import Clientes from "./listagem/Clientes/Clientes";
import Servicos from "./listagem/Servicos/Servicos";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }
    

    const construirView = () => {

        if (tela === 'Home') {
            return (
                <>
                    <Home tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Cadastros') {
            return (
                <>
                    <CadastroCliente tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Clientes') {
            return (
                <>
                    <Clientes tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Servicos') {
            return (
                <>
                    <Servicos tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Consumos') {
            return (
                <>
                    <Consumos tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}