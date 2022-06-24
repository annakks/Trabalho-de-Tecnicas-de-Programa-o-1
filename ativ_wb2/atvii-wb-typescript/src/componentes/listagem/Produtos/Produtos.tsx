import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}


export default class Produtos extends Component<props> {

    render() {

        return (
            <>
                <div className="row">
                    <h3 className="center">Produtos Cadastrados</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome do Produto</th>
                                <th>Preço R$</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Shampoo</td>
                                <td>40,00</td>
                                <td>20</td>
                                <td>
                                    <Link to = "/AtualizarProduto">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to = "/">
                                        <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Condicionador</td>
                                <td>60,00</td>
                                <td>20</td>
                                <td>
                                    <Link to= "/AtualizarProduto">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to = "/">
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