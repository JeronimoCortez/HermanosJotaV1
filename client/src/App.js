import "./App.css";
import ProductPage from "../src/components/screen/productos/ProductPage";
import { useState, useEffect } from "react";
import Navbar from "./components/ui/navbar/Navbar";
import Contacto from "./components/screen/contacto/Contacto";
import Footer from "./components/ui/footer/Footer";
import DetalleProducto from "./components/screen/detalle-producto/DetalleProducto";
import HomePage from "./components/screen/homePage/HomePage";
import Carrito from "./components/ui/carrito/Carrito";

function App() {
  const [id, setId] = useState(undefined);
  const [pagina, setPagina] = useState("inicio");
  const [openCarrito, setOpenCarrito] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function sumarAlCarrito(producto, cantidad) {
    if (carrito.find((el) => el.producto.id === producto.id)) {
      setCarrito(
        carrito.map((el) =>
          el.producto.id === producto.id
            ? { ...el, cantidad: el.cantidad + cantidad }
            : el
        )
      );
    } else {
      setCarrito([...carrito, { id: carrito.length + 1, producto, cantidad }]);
    }
  }

  const total = carrito.reduce((total, producto) => {
    return total + producto.cantidad;
  }, 0);

  return (
    <div className="App">
      <Navbar
        setPagina={setPagina}
        setOpenCarrito={setOpenCarrito}
        total={total}
      />
      <Carrito
        openCarrito={openCarrito}
        setOpenCarrito={setOpenCarrito}
        carrito={carrito}
        setCarrito={setCarrito}
        total={total}
      />
      {pagina === "inicio" && <HomePage setPagina={setPagina} setId={setId} />}
      {pagina === "productos" && (
        <ProductPage setId={setId} setPagina={setPagina} />
      )}
      {pagina === "detalle" && (
        <DetalleProducto id={id} sumarAlCarrito={sumarAlCarrito} />
      )}
      {pagina === "contacto" && <Contacto />}
      <Footer setPagina={setPagina} />
    </div>
  );
}

export default App;
