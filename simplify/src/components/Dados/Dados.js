import { useContext, useState } from 'react'
import './Dados.css'
import { AuthContext } from '../../contexts/auth'

const Dados = () => {
    const { user, getEmail, getNome, getTelefone } = useContext(AuthContext)

    console.log(user)
    return (
        <div className='dados'>
            <div>
            <p>Editar</p>
            </div>
            <h2>Nome: {user}</h2>
            <h2>Email: {getEmail}</h2>
            <h2>Telefone: {getTelefone}</h2>
        </div>
    )
}

export default Dados