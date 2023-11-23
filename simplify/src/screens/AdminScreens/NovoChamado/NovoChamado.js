import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader'
import './NovoChamado.css'
import { useState } from 'react'

const NovoChamado = () => {
    
    const [doutor, setDoutor] = useState('')
    const [assunto, setAssunto] = useState('')
    const [complemento, setComplemento] = useState('')


    function handleChangeSelectDoutor(e){
        // pegar o valor do option que ele selecionou 
        setAssunto(e.target.value);
    }

    function handleChangeSelectAssunto(e){
        // pegar o valor do option que ele selecionou 
        setAssunto(e.target.value);
    }

    return (
        <div>
        <VerticalHeader />

        <div>
            <form>
                <label>Doutores</label>
                <select value={doutor} onChange={handleChangeSelectDoutor}>
                    <option value="Doutor Manhatan">Doutor Manhatan</option>
                    <option value="Doutora Kelly">Doutora Kelly</option>
                </select>

                <label>Assunto da Consulta</label>
                <select value={assunto} onChange={handleChangeSelectAssunto}>
                    <option value="Consulta Psiquiatra">Consulta Psiquiatra</option>
                    <option value="Consulta Psicologa">Consulta Psicologa</option>
                </select>

                <label>Complemento</label>
                <textarea 
                    type="text"
                    placeholder="Descreva seu problema..."
                    value={complemento}
                    onChange={ (e) => setComplemento(e.target.value) }
                />

            </form>
        </div>
        </div>
    )
}

export default NovoChamado