import { useState } from "react";
import "./Contador.css"

const Contador = ({max}) => {
  const [contador, setContador] = useState(1)

  const sumarContador = () => {
    if (contador < max) {
      setContador(contador+1)
    } else{

    }
  }

  const restarContador = () => {
    if (contador > 1) {
      setContador(contador-1)
    } else{

    }
  }

  return <div className="contador">
    <button onClick={() => restarContador()}>-</button>
    <p>{contador}</p>
    <button onClick={() => sumarContador()}>+</button>
  </div>;
};

export default Contador;
