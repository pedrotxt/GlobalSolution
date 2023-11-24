import './VerticalHeader.css'
import { useNavigate } from 'react-router-dom';

const VerticalHeader = () => {
    
    const navigate = useNavigate();

    function resolverDepois(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(navigate("/"))
            }, 1000);
          });
    }

    async function handleLogout()  {
        var evento = await resolverDepois();
        localStorage.removeItem("usuario")
        return evento;
    }

    return (
        <div className='vertical-header'>
            <img src='https://static.vecteezy.com/ti/vetor-gratis/p1/4313994-livro-de-leitura-sentado-gratis-vetor.jpg' alt='foto perfil'/>
            <div className='opcoes'>
                <a href='/admin'><h3>Dados</h3></a>
                <a href='/admin/novo'><h3 >Nova Consulta</h3></a>
            </div>
            <btn onClick={handleLogout}><h3 className='sair'>Sair</h3></btn>
        </div>
    );
}

export default VerticalHeader