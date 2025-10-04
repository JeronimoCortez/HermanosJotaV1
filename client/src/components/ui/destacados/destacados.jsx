import { useState, useEffect } from "react";
import { getProductos } from "../../../api/productosApi";
import ProductList from "../productos/ProductList";
import "./destacados.css";

const ProductosDestacados = ({ setPagina, setId }) => {
  const [productos, setProductos] = useState([]);

  function verProductoDetalle(e, id) {
    setId(id);
    setPagina("detalle");
  }

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        const destacados = data.slice(0, 3);
        setProductos(destacados);
        console.log("Productos recibidos", data);
      } catch (error) {
        console.error("Error al cargar productos", error);
      }
    };
    fetchProductos();
  }, []);
  return (
    <section className="destacados">
      <h2>Productos Destacados</h2>
      <h5>
        Cada pieza ha sido cuidadosamente seleccionada por su calidad, diseño y
        funcionalidad
      </h5>
      <div className="grid">
        <ProductList
          productos={productos}
          verProductoDetalle={verProductoDetalle}
          clase={"destacados"}
        ></ProductList>
      </div>
      <button
        className="destacados-button"
        onClick={() => setPagina("productos")}
      >
        ver todos los productos
      </button>
    </section>
  );
};

export default ProductosDestacados;
