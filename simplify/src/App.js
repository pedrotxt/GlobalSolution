import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "./contexts/auth";
import Index from "./screens/HomeScreens/Index/Index";
import Plan from "./screens/HomeScreens/Plan/Plan";
import DadosAdmin from "./screens/AdminScreens/Dados/DadosAdmin";
import AcompanharAdmin from "./screens/AdminScreens/Acompanhar/AcompanharAdmin";
import Login from "./screens/HomeScreens/Login/Login";
import Cadastro from "./screens/HomeScreens/Cadastro/Cadastro";
import Private from "./contexts/Private";

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
     <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/servicos" element={<Plan/>}/>
        
        <Route path="/admin" element={<Private><DadosAdmin/></Private>}/>
        
        <Route path="/admin/acompanhar" element={<Private><AcompanharAdmin/></Private>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
     </ AuthProvider>
    </ BrowserRouter>
  );
}

export default App;
