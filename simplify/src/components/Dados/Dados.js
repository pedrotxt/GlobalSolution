import { useContext } from 'react'
import './Dados.css'
import { AuthContext } from '../../contexts/auth'

const Dados = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='dados'>
            <div>
            <p>Editar</p>
            </div>
            <h2>Nome: {user.nome}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Telefone: {user.telefone}</h2>
        </div>
    )
}

export default Dados