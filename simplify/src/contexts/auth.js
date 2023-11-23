import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const getEmail = localStorage.getItem("emailLocal")
    const getSenha = localStorage.getItem("senhaLocal")
    const getTelefone = localStorage.getItem("telefoneLocal")
    const getNome = localStorage.getItem("nomeLocal")

    function signIn(email, senha){
        
        if(getEmail === email && getSenha === senha){
            alert('LOGADO COM SUCESSO')
            navigate("/admin")
            setUser({
                email: getEmail,
                senha: getSenha,
                telefone: getTelefone,
                nome: getNome
            })
        } else {
            alert('USUARIO NÃO ENCONTRADO')
        }

    }

    function signUp(nome, email, telefone, senha){

        let data = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha
        }

        setUser(data);
        localStorage.setItem('emailLocal', `${email}`)
        localStorage.setItem('senhaLocal', `${senha}`)
        localStorage.setItem('telefoneLocal',`${telefone}`)
        localStorage.setItem('nomeLocal', `${nome}`)
        console.log(user)

        navigate("/admin")
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider