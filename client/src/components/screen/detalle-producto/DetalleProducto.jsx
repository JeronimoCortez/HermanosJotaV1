import Contador from "../../ui/contador/Contador";
import "./DetalleProducto.css"

const DetalleProducto = ({ id }) => {

  const fecthProductoById = () => {

  }

  const producto = {
    id: 1,
    nombre: "Aparador Uspallata",
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    medidas: "180 × 45 × 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    acabado: "Aceite natural ecológico",
    peso: "68kg",
    capacidad: "6 compartimientos interiores",
    precio: 1200,
    img: "https://i.postimg.cc/pXWMvF92/aparador-Uspallata.png",
    categoria: "sala",
    stock: 10,
    caracteristicas: ["Hecho con nogal macizo FSC®, herrajes de latón", "Acabado de aceite natural ecológico"]
  }
  return (
    <>
    <div className="detalle-producto">
      <div className="producto-info-container">
        <img className="producto-img" src={producto.img} alt={producto.nombre} />
        <div className="producto-info">
          <h3 className="producto-nombre">{producto.nombre}</h3>
          <p >${producto.precio}</p>
          <p>{producto.descripcion}</p>
          <div className="cantidad">
          <p >Cantidad: </p>
          <Contador max={producto.stock} />
          </div>
          
          <button  className="btn-compra">Comprar</button>
        </div>
      </div>
      <div className="producto-caracteristicas">
        <h4 className="caracteristicas-title">Caracteristicas</h4>
        <ul>
        {producto.caracteristicas.map((c,i) => (
          <li key={i}>{c}</li>
        ))}
        </ul>
      </div>
      </div>
    </>
  );
};

export default DetalleProducto;
