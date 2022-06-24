import 'materialize-css/dist/css/materialize.min.css'
import { Link } from "react-router-dom";

export default function Servicos (props) {
        return (
            <>
                <div className="row">
                    <h3 className="center">Serviços Cadastrados</h3>
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome do Serviço</th>
                                <th>Preço R$</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Corte Feminino</td>
                                <td>50,00</td>
                                <td className="espaço">
                                    <Link to="/AtualizarServico">
                                        <i className="material-icons separar">mode</i>
                                    </Link>
                                    <Link to="/">
                                        <i className="material-icons separar">delete</i>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Corte Masculino</td>
                                <td>30,00</td>
                                <td className="espaço">
                                    <Link to="/AtualizarServico">
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