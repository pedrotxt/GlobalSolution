import Botao from '../../../components/Botao/Botao'
import Header from '../../../components/Header/Header'
import './Index.css'

const Index = () => {
    return (
        <>
        <Header />
        <div className='index'>
            <div className='infos'>
                <h2>Simplify</h2>
                <p>Sistema de gerenciamente unico, conectando agendamentos com os seus medicos de forma facil em um unico lugar</p>
                <a href='#sobre'>
                <Botao>Saiba Mais...</Botao>
                </a>
            </div>
            <img src='./images/image1.png' alt='foto ilustrativa' />
        </div>

        <div id='sobre' className='index'>
            <img src='./images/image2.png' alt='foto ilustrativa'/>
            <div className='infos'>
                <h2 className='text-white'>Sobre Nós</h2>
                <p>Somos uma startup, com o proposito de simplificar a forma como você lida com as consultas do dia a dia, trazendo simplicidade e acessibilidade para todos</p>
                <a href='/servicos'>
                <Botao>Serviços</Botao>
                </a>
            </div>
        </div>

        <div className='index'>
            <div className='infos'>
                <h2>Nossos serviços</h2>
                <p>A Simplify, oferece serviços para todos aqueles que precisam de um sistema de agendamento acessivel.</p>
                <a href='/servicos'>
                <Botao>Veja os Serviços</Botao>
                </a>
            </div>
            <img src='./images/image3.png' alt='foto ilustrativa'/>
        </div>
        </>
    )
}

export default Index