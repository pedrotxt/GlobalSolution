import './VerticalHeader.css'

const VerticalHeader = () => {
    return (
        <div className='vertical-header'>
            <img src='https://github.com/pedrotxt.png' alt='foto perfil'/>
            <div className='opcoes'>
                <a href='/admin'><h3>Dados</h3></a>
                <a href='/admin/acompanhar'><h3>Acompanhar</h3></a>
                <a href='/admin/novo'><h3 >Gerar</h3></a>
            </div>
            <a href='/login'><h3>Sair</h3></a>
        </div>
    );
}

export default VerticalHeader