import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader'
import './NovoChamado.css'
import { useState } from 'react'

const NovoChamado = (props) => {
    
    const [doutor, setDoutor] = useState('')
    const [assunto, setAssunto] = useState('')
    const [complemento, setComplemento] = useState('')

    let chamados = {};
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
        <div className='novo-chamado'>
            <form onSubmit={handleRegister}>
                <div>
                <label>Doutores</label>
                <select value={doutor} onChange={handleChangeSelectDoutor}>
                    <option value="Doutor Manhatan">Doutor Manhatan</option>
                    <option value="Doutora Kelly">Doutora Kelly</option>
                </select>
                </div>

                <div>
                <label>Assunto da Consulta</label>
                <select value={assunto} onChange={handleChangeSelectAssunto}>
                    <option value="Consulta Psiquiatra">Consulta Psiquiatra</option>
                    <option value="Consulta Psicologa">Consulta Psicologa</option>
                </select>
                </div>

                <div>
                <label>Complemento</label>
                <textarea 
                    type="text"
                    placeholder="Descreva seu problema..."
                    value={complemento}
                    onChange={ (e) => setComplemento(e.target.value) }
                />
                </div>
                

                <button type='submit'>Registrar</button>
            </form>

            {chamado.map((chamado, index) => {
                
                return (    
                <div key={index}>
                <label >Chamados</label>
                <h1>Doutor</h1>
                <h3>{chamado.doutor}</h3>
                <h1>Assunto</h1>
                <h3>{chamado.assunto}</h3>
                <h1>Complemento</h1>
                <p>{chamado.complemento}</p>
            </div> 
            )})}
        </div>
        </div>
        
    )
}

export default NovoChamado