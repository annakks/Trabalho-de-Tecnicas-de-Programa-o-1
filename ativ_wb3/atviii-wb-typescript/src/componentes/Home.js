
import './style.css'


export default function Home(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <>
            <h3 className="center">Bem vindos ao Sistema do Grupo World Beauty</h3>
            <h4 className="center">Visão geral da Unidade de São Jose dos Campos</h4>
            <div className='row'>
                <div className='col s6'>
                    <div className="tabela">
                        <h5>Clientes que <b>MAIS</b> consumiram produtos ou serviços, em quantidade</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Consumo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulano</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulana</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulano</td>
                                    <td>8</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col s6'>
                    <div className="tabela">
                        <h5>Clientes que <b>MENOS</b> consumiram produtos ou serviços, em quantidade</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Consumo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulano</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulana</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulano</td>
                                    <td>3</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col s12'>
                    <div className='row'>
                        <h4 className="center">Produtos e Serviços mais consumidos</h4>
                        <div className='col s6'>
                            <div className="tabela">
                                <h5>Serviços</h5>
                                <table className="responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nome do Serviço</th>
                                            <th>Quantidade Consumida</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>Corte Feminino</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>002</td>
                                            <td>Corte Masculino</td>
                                            <td>4</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col s6'>
                            <div className="tabela">
                                <h5>Produtos</h5>
                                <table className="responsive-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Nome do Serviço</th>
                                            <th>Quantidade Consumida</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>Shampoo</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>002</td>
                                            <td>Condicionador</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <h4 className="center">Listagem dos serviços e produtos mais consumidos por gênero.</h4>
                <div className='col s4'>
                    <div className="tabela">
                        <h5>Feminino</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Código do Produto</th>
                                    <th>Nome do Produto</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Shampoo</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Condicionador</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Código do Serviço</th>
                                    <th>Nome do Serviço</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Corte Feminino</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col s4'>
                    <div className="tabela">
                        <h5>Masculino</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Código do Produto</th>
                                    <th>Nome do Produto</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Shampoo</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Condicionador</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Código do Serviço</th>
                                    <th>Nome do Serviço</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Corte Masculino</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='col s4'>
                    <div className="tabela">
                        <h5>Não Informado</h5>
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th>Código do Produto</th>
                                    <th>Nome do Produto</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Shampoo</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>Condicionador</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Código do Serviço</th>
                                    <th>Nome do Serviço</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>Corte Masculino</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h4 className="center">Listagem dos 5 clientes que mais consumiram em valor</h4>
            <div className="row">
                <div className='col s12'>
                    <div className="tabela">
                        <table className="responsive-table">
                            <thead >
                                <tr>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Valor Consumido em R$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulano</td>
                                    <td>90,00</td>
                                </tr>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulana</td>
                                    <td>60,00</td>
                                </tr>
                                <tr>
                                    <td>123456789-12</td>
                                    <td>Fulano</td>
                                    <td>40,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}