import './Plano.css'
import Botao from '../Botao/Botao'

const Plano = () => {

    return (
        <div className='plano'>
            <div className='login'>
            <h1>SELECIONE O PLANO E FAÇA O CADASTRO</h1>
            <h1>SE JA TEM O CADASTRO</h1>
            <a href='/login'>
                <Botao>Login</Botao>
            </a>
            </div>
            <div className='opcoes'>
                <h4>30 DIAS GRATUITOS</h4>
                <h4>150R$ POR 01 MÊS</h4>
                <h4>550R$ POR 06 MÊS</h4>
                <h4>999R$ POR 12 MÊS</h4>
                <a href='/cadastro'>
                    <Botao className='botao'>Continuar</Botao>
                </a>
                
            </div>
        </div>
    )
}

export default Plano;