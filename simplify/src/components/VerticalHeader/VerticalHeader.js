import { useContext } from 'react';
import './VerticalHeader.css'
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

const VerticalHeader = () => {
    
    const navigate = useNavigate();

    const { usuarioObj } = useContext(AuthContext)

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
            <img src='https://github.com/pedrotxt.png' alt='foto perfil'/>
            <div className='opcoes'>
                <a href='/admin'><h3>Dados</h3></a>
                <a href='/admin/acompanhar'><h3>Acompanhar</h3></a>
                <a href='/admin/novo'><h3 >Gerar</h3></a>
            </div>
            <a onClick={handleLogout} ><h3 className='sair'>Sair</h3></a>
        </div>
    );
}

export default VerticalHeader