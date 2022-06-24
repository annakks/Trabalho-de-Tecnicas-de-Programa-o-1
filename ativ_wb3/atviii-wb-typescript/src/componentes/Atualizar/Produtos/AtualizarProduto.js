import 'materialize-css/dist/css/materialize.min.css'

export default function AtualizarProduto (props) {

        let estiloBotao = `btn waves-effect waves-light ${props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Atualizar dados do Produto</h2>
                            <div className="input-field col s4">
                                <input id="id" type="number" />
                                <label htmlFor="id">Código do Produto</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="nomeProduto" type="text" />
                                <label htmlFor="nomeProduto">Nome Produto</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="preco" type="number" />
                                <label htmlFor="preco">Preço</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Atualizar
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </>

        )
}