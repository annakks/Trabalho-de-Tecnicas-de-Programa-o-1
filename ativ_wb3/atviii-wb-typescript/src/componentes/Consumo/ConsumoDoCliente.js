import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";

export default function ConsumoCli (props) {
        return (
            <>
                <div className="row">
                    <h3 className="center">
                        Consumo
                    </h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Código Serviço</th>
                                <th>Nome do Serviço</th>
                                <th>Preço R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Corte Feminino</td>
                                <td>50,00</td>
                                <td>
                                    <Link to="/Consumos">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to="/Clientes">
                                        <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Código Produto</th>
                                <th>Nome do Produto</th>
                                <th>Preço R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Shampoo</td>
                                <td>40,00</td>
                                <td>
                                    <Link to="/Consumos">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to="/Clientes">
                                        <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <h3 className="center">
                        Total
                    </h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Quantidade Produtos/Serviços</th>
                                <th>Valor a Pagar R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>90,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
}