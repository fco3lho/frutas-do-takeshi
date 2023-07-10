import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";

//Pages
import Home from "./pages/Home/Home";
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import CadastroRealizado from "./pages/CadastroRealizado/CadastroRealizado";

//Context
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <>
      <ModalProvider>
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
            </Routes>
          </div>
        </BrowserRouter>
      </ModalProvider>
    </>
  );
}

export default App;
