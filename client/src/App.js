import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProductPage from "../src/components/screen/productos/ProductPage";
import Navbar from "./components/ui/navbar/Navbar";
import Contacto from "./components/screen/contacto/Contacto";
import Footer from "./components/ui/footer/Footer";
import HomePage from "./components/screen/homePage/HomePage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>

        <Route path="/catalogo" element={<ProductPage/>}></Route>

        <Route path="/contacto" element={<Contacto/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
