import { useState, useContext } from 'react'
import './Cadastro.css'
import { AuthContext } from '../../../contexts/auth';

const Cadastro = () => {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    const { signUp } = useContext(AuthContext)

    function handleSubmit(e){
        e.preventDefault();

        if(nome !== '' && email !== '' && telefone !== '' && senha !== ''){
            signUp(nome, email, telefone, senha)
        }
    }

    return (
        <div className='cadastro'>
            <div className='cadastro-area'></div>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar</h1>
                <input 
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={ (e) => setNome(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={ (e) => setTelefone(e.target.value)}
                />
                

                <input 
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={ (e) => setSenha(e.target.value)}
                />

                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Cadastro