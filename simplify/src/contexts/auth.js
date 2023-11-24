import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const usuarioLocal = localStorage.getItem("usuario");
    let usuarioObj = JSON.parse(usuarioLocal);

    console.log(usuarioObj)
    function signIn(email, senha){
        
        if(usuarioObj.email === email && usuarioObj.senha === senha){
            alert('LOGADO COM SUCESSO')
            navigate("/admin")
            setUser({
                email: usuarioObj.email,
                senha: usuarioObj.senha,
                telefone: usuarioObj.telefone,
                nome: usuarioObj.nome
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
        localStorage.setItem('usuario', JSON.stringify(data))

        navigate("/admin")
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!usuarioObj,
                user,
                signIn,
                signUp,
                usuarioObj
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider