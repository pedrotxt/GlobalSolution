import { useContext, useState } from 'react'
import './Dados.css'
import { AuthContext } from '../../contexts/auth'

const Dados = () => {
    const { usuarioObj } = useContext(AuthContext)

    return (
        <div className='dados'>
            <h2>Nome: {usuarioObj.nome}</h2>
            <h2>Email: {usuarioObj.email}</h2>
            <h2>Telefone: {usuarioObj.telefone}</h2>
        </div>
    )
}

export default Dados