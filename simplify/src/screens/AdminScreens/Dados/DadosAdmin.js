import { useContext } from 'react'
import Dados from '../../../components/Dados/Dados'
import VerticalHeader from '../../../components/VerticalHeader/VerticalHeader'
import './DadosAdmin.css'
import { AuthContext } from '../../../contexts/auth'

const DadosAdmin = () => {

    const { user } = useContext(AuthContext)

    return (
        <>
        <div className='dados-container'>
            <VerticalHeader />
            <div className='dados-admin'>
                <h3 className='bem-vindo' >Seja bem vindo {user.nome}</h3>
                <Dados />
            </div>
        </div>
        </>
    )
}

export default DadosAdmin