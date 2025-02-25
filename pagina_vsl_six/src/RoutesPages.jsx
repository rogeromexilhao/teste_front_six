import VslPage from "./VslPage";
import ThanksPage from "./components/ThanksPage";
// import OutraPagina from "./OutraPagina"; // Página de destino
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RoutesPages() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VslPage />} /> 
        <Route path="/obrigado-compra" element={<ThanksPage />} /> 
      </Routes>
    </Router>
  );
}

export default RoutesPages;