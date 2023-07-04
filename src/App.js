import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/Navbar";

//Pages
import Home from "./pages/Home/Home";
import Cadastrar from "./pages/Cadastrar/Cadastrar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
