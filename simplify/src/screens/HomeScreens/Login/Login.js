import { useState, useContext } from 'react'
import './Login.css'
import { AuthContext } from '../../../contexts/auth'; 
import Botao from '../../../components/Botao/Botao';
import Header from '../../../components/Header/Header';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn } = useContext(AuthContext)

    function handleSignIn(e){
        e.preventDefault();
        
        if(email !== '' && senha !== ''){
        signIn(email, senha);
        }

    }

    return (
        <>
        <Header />
        <div className='login'>
            <div className='login-area'>

            <form onSubmit={handleSignIn}>
                <h1>Login</h1>
                <input 
                    type="text"
                    placeholder="email@email.com"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="******"
                    value={senha}
                    onChange={ (e) => setSenha(e.target.value)}
                />

                <Botao type='submit'>
                    Entrar
                </Botao>
            </form>
            </div>

            <h3 className='h3-btn'>Não tem conta?</h3>
            <a href='/cadastro'>
            <Botao>Cadastre-se</Botao>
            </a>
            
        </div>
        </>
    )
}

export default Login