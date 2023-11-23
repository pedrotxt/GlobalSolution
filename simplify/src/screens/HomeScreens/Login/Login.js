import { useState, useContext } from 'react'
import './Login.css'
import { AuthContext } from '../../../contexts/auth'; 

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signIn, signed } = useContext(AuthContext)

    function handleSignIn(e){
        e.preventDefault();
        
        if(email !== '' && senha !== ''){
        signIn(email, senha);
        }

    }

    return (
        <div className='login'>
            <div className='login-area'></div>

            <form onSubmit={handleSignIn}>
                <h1>Entrar</h1>
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

                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login