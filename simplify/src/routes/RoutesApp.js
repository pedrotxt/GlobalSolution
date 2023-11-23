import Index from "../screens/HomeScreens/Index/Index";
import DadosAdmin from "../screens/AdminScreens/Dados/DadosAdmin";
import Plan from "../screens/HomeScreens/Plan/Plan";
import AcompanharAdmin from "../screens/AdminScreens/Acompanhar/AcompanharAdmin";
import Login from "../screens/HomeScreens/Login/Login";
import Cadastro from "../screens/HomeScreens/Cadastro/Cadastro";
import { Route, Routes } from "react-router-dom"

const RoutesApp = ()=> {
    return (
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/servicos" element={<Plan/>}/>
        <Route path="/admin" element={<DadosAdmin/>}/>
        <Route path="/admin/acompanhar" element={<AcompanharAdmin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    )
}

export default RoutesApp