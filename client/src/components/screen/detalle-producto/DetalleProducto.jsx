import { useEffect, useState } from "react";
import Contador from "../../ui/contador/Contador";
import "./DetalleProducto.css";

const DetalleProducto = ({ id }) => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fecthProductoById = async (id) => {
    if (id) {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/api/productos/${id}`);
      const data = await response.json();

      setProducto(data);
      setLoading(false);
      setImageLoaded(false);
    } else {
      setProducto(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect ejecutado, id:", id);
    fecthProductoById(id);
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!id) {
    console.log("Render: No hay id");
    return <p>Debe especificar id</p>;
  }
  if (!producto) {
    return <p>El producto no esta dispnible</p>;
  }

  return (
    <>
      <div className="detalle-producto">
        <div className="producto-info-container">
          {!imageLoaded && <p>Cargando imagen...</p>}
          <img
            className="producto-img"
            src={producto.img}
            alt={producto.nombre}
            onLoad={() => setImageLoaded(true)}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
          <div className="producto-info">
            <h3 className="producto-nombre">{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
            <div className="cantidad">
              <p>Cantidad: </p>
              <Contador max={producto.stock} />
            </div>

            <button className="btn-compra">Comprar</button>
          </div>
        </div>
        <div className="producto-caracteristicas">
          <h4 className="caracteristicas-title">Caracteristicas</h4>
          <ul>
            {producto.caracteristicas.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
