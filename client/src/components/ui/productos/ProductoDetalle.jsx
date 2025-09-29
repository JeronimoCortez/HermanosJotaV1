import { useEffect, useState } from "react";

const ProductoDetalle = ({ id }) => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    async function fecthProducto() {
      try {
        const res = await fetch(`/api/productos/${id}`);
        const data = await res.json();
        setProducto(data);
      } catch (error) {
        console.log(error);
      }
    }
    fecthProducto();
  }, [id]);

  return <h1>{producto.nombre}</h1>;
};

export default ProductoDetalle;
