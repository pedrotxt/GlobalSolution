import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "./contexts/auth";
import Index from "./screens/HomeScreens/Index/Index";
import Plan from "./screens/HomeScreens/Plan/Plan";
import DadosAdmin from "./screens/AdminScreens/Dados/DadosAdmin";

import Login from "./screens/HomeScreens/Login/Login";
import Cadastro from "./screens/HomeScreens/Cadastro/Cadastro";
import Private from "./contexts/Private";
import NovoChamado from "./screens/AdminScreens/NovoChamado/NovoChamado";

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
     <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/servicos" element={<Plan/>}/>
        <Route path="/admin" element={<DadosAdmin/>}/>
        <Route path="/admin/novo" element={<NovoChamado/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
     </ AuthProvider>
    </ BrowserRouter>
  );
}

export default App;
