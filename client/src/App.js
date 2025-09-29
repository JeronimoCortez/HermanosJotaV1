import "./App.css";
import ProductPage from "../src/components/screen/ProductPage";
import { useState } from "react";
import Navbar from "./components/ui/navbar/Navbar";

function App() {
  const [id, setId] = useState(undefined);
  const [pagina, setPagina] = useState("inicio");
  return (
    <div className="App">
      <Navbar setPagina={setPagina} />
      {pagina === "inicio" && <h1>Pagina de inicio</h1>}
      {pagina === "productos" && (
        <ProductPage setId={setId} setPagina={setPagina} />
      )}
      {pagina === "detalle" && <h1>{`Viendo producto ${id}`}</h1>}
      {pagina === "contacto" && <h1>Pagina de contacto</h1>}
    </div>
  );
}

export default App;
