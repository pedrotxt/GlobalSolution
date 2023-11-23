import { useContext } from "react"
import { AuthContext } from "./auth"
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
    const { signed } = useContext(AuthContext);

    if(!signed) {
        return <Navigate to="/" />
    }

    console.log(signed)

    return children
}

export default Private