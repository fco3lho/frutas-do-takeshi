import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";

//Pages
import Home from "./pages/Home/Home";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import CadastroRealizado from "./pages/CadastroRealizado/CadastroRealizado";
import Editar from "./pages/Editar/Editar";
import EdicaoRealizada from "./pages/EdicaoRealizada/EdicaoRealizada";

//Context
import { ModalConfigProvider } from "./context/ModalConfigContext";
import { ModalDeleteProvider } from "./context/ModalDeleteContext";

function App() {
  return (
    <ModalConfigProvider>
      <ModalDeleteProvider>
        <BrowserRouter>
          <Navbar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastrar" element={<Cadastrar />} />
              <Route
                path="/cadastroRealizado"
                element={<CadastroRealizado />}
              />
              <Route path="/editar" element={<Editar />} />
              <Route path="/edicaoRealizada" element={<EdicaoRealizada />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ModalDeleteProvider>
    </ModalConfigProvider>
  );
}

export default App;
