import { Component } from "react";


type props = {
    tema: string
}


export default class AtualizarServico extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Atualizar dados do Serviço</h2>
                            <div className="input-field col s4">
                                <input id="id" type="number" />
                                <label htmlFor="id">Código do Serviço</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="nomeServiço" type="text" />
                                <label htmlFor="nomeServiço">Nome Serviço</label>
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
}