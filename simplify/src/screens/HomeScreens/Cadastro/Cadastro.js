import { useState, useContext } from 'react'
import './Cadastro.css'
import { AuthContext } from '../../../contexts/auth';
import Botao from '../../../components/Botao/Botao';
import Header from '../../../components/Header/Header';

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
        <>
        <Header />
        <div className='cadastro'>
            
            <div className='cadastro-area'>
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

                <Botao type='submit'>
                    Cadastrar
                </Botao>
                
            </form>
            </div>

            <h3 className='h3-btn'>Tem conta?</h3>
            <a href='/login'>
            <Botao>Logar-se</Botao>
            </a>
        </div>
        </>
    )
}

export default Cadastro