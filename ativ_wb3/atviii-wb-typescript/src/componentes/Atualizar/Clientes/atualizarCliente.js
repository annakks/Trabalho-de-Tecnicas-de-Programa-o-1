import 'materialize-css/dist/css/materialize.min.css'

export default function AtualizarCliente (props){

        let estiloBotao = `btn waves-effect waves-light ${props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <h2 className="center">Atualizar dados do Cliente</h2>
                            <div className="input-field col s4">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="nome" type="text" className="validate" />
                                <label htmlFor="nome">Nome</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="nomeSocial" type="text" className="validate" />
                                <label htmlFor="nomeSocial">Nome Social</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s4">
                                <input id="genero" type="text" className="validate" />
                                <label htmlFor="genero">Gênero</label>
                            </div>
                            <div className="input-field col s4">
                                <input id="RG" type="text" className="validate" />
                                <label htmlFor="RG">RG</label>
                            </div>
                            <div className="input-field col s1">
                                <input id="ddd" type="text" className="validate" />
                                <label htmlFor="tddd">DDD</label>
                            </div>
                            <div className="input-field col s3">
                                <input id="numero" type="text" className="validate" />
                                <label htmlFor="numero">telefone</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Atualizar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </>

        )
}