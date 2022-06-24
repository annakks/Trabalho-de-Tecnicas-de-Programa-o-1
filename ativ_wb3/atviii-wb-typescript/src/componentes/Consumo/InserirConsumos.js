import { Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'

export default function InserirConsumos  (props) {

        let estiloBotao = `btn waves-effect waves-light ${props.tema}`
        return (
            <>
            
                <div className="row">
                    <h3 className="center">Consumo do Cliente</h3>
                    <form className="col s8">
                        <div className="row">
                            <div className="row">
                                <div className="input-field col s10">
                                    <input id="cpf" type="text" />
                                    <label htmlFor="cpf">CPF do Cliente</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="opcao" type="number" />
                                    <label htmlFor="opcao">Digite <b>1</b> para Produto ou <b>2</b> para Serviço</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="id" type="number" className="validate" />
                                    <label htmlFor="id">Código do Produto/Serviço</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <td>
                                        <Link to="/Consumo">
                                            <button className={estiloBotao} type="submit" name="action">Inserir Consumo
                                                <i className="material-icons right">save_alt</i>
                                            </button>
                                        </Link>
                                    </td>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>

        )
}