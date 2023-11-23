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
                <p>Sistema de gerenciamente unico com seus pacientes, conectando agendamentos e prescições em um unico sistema</p>
                <Botao>Saiba Mais...</Botao>
            </div>
            <img src='./images/image1.png' alt='foto ilustrativa'/>
        </div>

        <div className='index'>
            <img src='./images/image2.png' alt='foto ilustrativa'/>
            <div className='infos'>
                <h2 className='text-white'>Sobre Nós</h2>
                <p>Somos uma startup, com o proposito de simplificar a forma como você e o seu paciente lida com as consultas do dia a dia, trazendo simplicidade e acessibilidade para todos</p>
                <Botao>Serviços</Botao>
            </div>
        </div>

        <div className='index'>
            <div className='infos'>
                <h2>Nossos serviços</h2>
                <p>A Simplify, oferece serviços tanto para seu paciente quanto para você. Sistema de agendamento, prescições, chatbox robotizado acessivel para perguntas.</p>
                <Botao>Veja os Serviços</Botao>
            </div>
            <img src='./images/image3.png' alt='foto ilustrativa'/>
        </div>
        </>
    )
}

export default Index