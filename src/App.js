import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Highlights from "./pages/highlights/Highlights";
import Logo from "./resources/nuntium2.png";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/highlights" element={<Highlights />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="laptop">
        <img className="logo" src={Logo} alt="Logo" />
        <h2>
          Please, this web application is only visible from a mobile phone or
          tablet
        </h2>
      </div>
    </div>
  );
}

export default App;
