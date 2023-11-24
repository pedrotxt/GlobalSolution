import Botao from '../../../components/Botao/Botao'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader'
import './NovoChamado.css'
import { useState } from 'react'

const NovoChamado = () => {
    
    const [doutor, setDoutor] = useState('')
    const [assunto, setAssunto] = useState('')
    const [complemento, setComplemento] = useState('')

    const [chamado, setChamado] = useState([])

    function handleChangeSelectDoutor(e){
        // pegar o valor do option que ele selecionou 
        setDoutor(e.target.value);
    }

    function handleChangeSelectAssunto(e){
        // pegar o valor do option que ele selecionou 
        setAssunto(e.target.value);
    }

    function handleRegister(e){
        e.preventDefault();

        let chamados = {
        doutor,
        assunto,
        complemento
        }

        setChamado([...chamado, chamados])
      
    }

    return (
        <div className='container'>
        <VerticalHeader />
        <div className='container-chamados'>
        <div className='novo-chamado'>
            <form onSubmit={handleRegister}>
                <div className='div-form'>
                <label>Doutores</label>
                <select value={doutor} onChange={handleChangeSelectDoutor}>
                    <option>Selecione</option>
                    <option value="Doutor Manhatan">Doutor Manhatan</option>
                    <option value="Doutora Kelly">Doutora Kelly</option>
                </select>
                </div>

                <div className='div-form'>
                <label>Assunto da Consulta</label>
                <select value={assunto} onChange={handleChangeSelectAssunto}>
                    <option>Selecione</option>
                    <option value="Consulta Psiquiatra">Consulta Psiquiatra</option>
                    <option value="Consulta Psicologa">Consulta Psicologa</option>
                </select>
                </div>

                <div className='div-form'>
                <label>Complemento</label>
                <textarea 
                    type="text"
                    placeholder="Descreva seu problema..."
                    value={complemento}
                    onChange={ (e) => setComplemento(e.target.value) }
                />
                </div>
                

                <Botao type='submit'>Registrar</Botao>
            </form>
            </div>

            <div className='container-chamados'>
                <h1>Consultas</h1>
            {chamado.map((chamado, index) => {
                
                return (    
                    <table className='chamados' key={index}>
                        <thead>
                            <tr>
                                <th>Doutor</th>
                                <th>Assunto</th>
                                <th>Complemento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Doutor">{chamado.doutor}</td>
                                <td data-label="Assunto">{chamado.assunto}</td>
                                <td data-label="Complemento">{chamado.complemento}</td>
                            </tr>
                        </tbody>
                    </table>
         
            )})}
            </div>
        </div>
        </div>
        
    )
}

export default NovoChamado