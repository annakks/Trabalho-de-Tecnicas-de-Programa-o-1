import { Component } from "react";
import './style.css'

type props = {
    tema: string
}


export default class CadastroCliente extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <h2 className="center">Cadastro Cliente</h2>
                        <div className="input-field col s6">
                            <input id="nome"  type="text" />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nomeSocial" type="text"  />
                            <label htmlFor="nomeSocial">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4">
                            <input id="genero" type="text" />
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="cpf" type="text" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="rg" type="text"  />
                            <label htmlFor="rg">RG</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s1">
                            <input id="ddd" type="text"  />
                            <label htmlFor="ddd">DDD</label>
                        </div>
                        <div className="input-field col s11">
                            <input id="numero" type="text" />
                            <label htmlFor="numero">telefone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Cadastro Produto</h2>

                            <div className="input-field col s4">
                                <input id="id" type="number" />
                                <label htmlFor="id">Código do Produto</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="nomeProduto" type="text"/>
                                <label htmlFor="nomeProduto">Nome Produto</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="preco" type="number" />
                                <label htmlFor="preco">Preço</label>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="row">
                    <form className="col s12 box1">
                        <div className="row">
                            <h2 className="center">Cadastro Serviço</h2>
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
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>

        )
    }
}