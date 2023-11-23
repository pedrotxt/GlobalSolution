import { useContext } from 'react'
import Dados from '../../../components/Dados/Dados'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader'
import './DadosAdmin.css'
import AuthProvider, { AuthContext } from '../../../contexts/auth'

const DadosAdmin = () => {

    const { user, getEmail, getNome, getTelefone } = useContext(AuthContext)
    console.log(user)
    return (
        <>
        <div className='container'>
            <VerticalHeader />
            <div className='dados-admin'>
                <h3 className='bem-vindo' >Seja bem vindo {user}</h3>
                <Dados />
            </div>
        </div>
        </>
    )
}

export default DadosAdmin