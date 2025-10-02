import "./App.css";
import ProductPage from "../src/components/screen/productos/ProductPage";
import { useState } from "react";
import Navbar from "./components/ui/navbar/Navbar";
import Contacto from "./components/screen/contacto/Contacto";
import Footer from "./components/ui/footer/Footer";
import DetalleProducto from "./components/screen/detalle-producto/DetalleProducto";
import HomePage from "./components/screen/homePage/HomePage";

function App() {
  const [id, setId] = useState(undefined);
  const [pagina, setPagina] = useState("inicio");
  return (
    <div className="App">
      <Navbar setPagina={setPagina} />
      {pagina === "inicio" && <HomePage />}
      {pagina === "productos" && (
        <ProductPage setId={setId} setPagina={setPagina} />
      )}
      {pagina === "detalle" && <DetalleProducto id={id} />}
      {pagina === "contacto" && <Contacto />}
      <Footer setPagina={setPagina} />
    </div>
  );
}

export default App;
