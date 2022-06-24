import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";



type props = {
    tema: string
}


export default class Clientes extends Component<props> {

    render() {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Clientes Cadastrados
                    </h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Gênero</th>
                                <th>Nome</th>
                                <th>Name Social</th>
                                <th>CPF</th>
                                <th>RG</th>
                                <th><i className="material-icons separar">phone</i></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Feminino</td>
                                <td>Fulana</td>
                                <td>Fulana X</td>
                                <td>123456789-12</td>
                                <td>12345678-9</td>
                                <td>12 998765432</td>
                                <td>
                                    <Link to = "/Consumo">
                                        <i className="material-icons separar">add_shopping_cart</i>
                                    </Link>
                                    <Link to = "/AtualizarCliente">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to = "/">
                                    <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Masculino</td>
                                <td>Fulano</td>
                                <td>Fulano X</td>
                                <td>123456789-12</td>
                                <td>12345678-9</td>
                                <td>12 998765432</td>
                                <td>
                                    <Link to="/Consumo">
                                        <i className="material-icons separar">add_shopping_cart</i>
                                    </Link>
                                    <Link to="/AtualizarCliente">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to="/">
                                        <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Não Infornmado</td>
                                <td>Fulano</td>
                                <td>Fulano X</td>
                                <td>123456789-12</td>
                                <td>12345678-9</td>
                                <td>12 998765432</td>
                                <td>
                                    <Link to="/Consumo">
                                        <i className="material-icons separar">add_shopping_cart</i>
                                    </Link>
                                    <Link to="/AtualizarCliente">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to="/">
                                        <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

        )
    }
}