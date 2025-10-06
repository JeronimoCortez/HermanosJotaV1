import HeroBanner from "../../ui/hero-banner/HeroBanner";
import ProductosDestacados from "../../ui/destacados/destacados";
import "./HomePage.css";

const HomePage = ({ setPagina, setId }) => {
  return (
    <>
      <HeroBanner
        title="HERMANOS JOTA"
        subtitle="MUEBLES QUE ALIMENTAN EL ALMA"
        paragraph="Cada pieza cuenta con una historia de artesanía que honra el pasado mientras abraza el futuro"
        setPagina={setPagina}
      />
      <ProductosDestacados setId={setId} setPagina={setPagina} />
    </>
  );
};

export default HomePage;
