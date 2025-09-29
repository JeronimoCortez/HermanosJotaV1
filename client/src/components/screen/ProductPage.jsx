import { useState, useEffect } from "react";
import FiltrosSection from "../ui/productos/FiltrosSection";
import ProductList from "../ui/productos/ProductList";
import "../ui/productos/productos.css";

const productos = [
  {
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
    img: "./assets/aparadorUspallata.png",
    categoria: "sala",
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    medidas: "100 × 35 × 200 cm",
    materiales: "Estructura de acero, estantes de roble",
    acabado: "Laca mate ecológica",
    capacidad: "45 kg por estante",
    modulares: "5 estantes ajustables",
    precio: 1500,
    img: "./assets/bibliotecaRecoleta.png",
    categoria: "sala",
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    medidas: "80 × 75 × 85 cm",
    materiales: "Guatambú macizo, tela bouclé",
    acabado: "Cera vegetal, tapizado premium",
    tapizado: "Repelente al agua y manchas",
    confort: "Espuma alta densidad",
    precio: 1000,
    img: "./assets/butacaMendoza.png",
    categoria: "sala",
  },
  {
    id: 4,
    nombre: "Sillón Copacabana",
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    medidas: "90 × 85 × 95 cm",
    materiales: "Cuero curtido vegetal, acero pintado",
    acabado: "Cuero anilina premium",
    rotación: "360° silenciosa y suave",
    garantía: "10 años en estructura",
    precio: 1600,
    img: "./assets/sillonCopacabana.png",
    categoria: "sala",
  },
  {
    id: 5,
    nombre: "Mesa de Centro Araucaria",
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    medidas: "90 × 90 × 45 cm",
    materiales: "Sobre de mármol Patagonia, patas de nogal",
    acabado: "Mármol pulido, aceite natural en madera",
    peso: "42 kg",
    cargaMáxima: "25 kg distribuidos",
    precio: 400,
    img: "./assets/mesaDeCentroAraucaria.png",
    categoria: "sala",
  },
  {
    id: 6,
    nombre: "Mesa de Noche Aconcagua",
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    medidas: "45 × 35 × 60 cm",
    materiales: "Roble macizo FSC®, herrajes soft-close",
    acabado: "Barniz mate de poliuretano",
    almacenamiento: "1 cajón + repisa inferior",
    características: "Cajón con cierre suave",
    precio: 600,
    img: "./assets/mesaDeNocheAconcagua.png",
    categoria: "dormitorio",
  },
  {
    id: 7,
    nombre: "Cama Neuquén",
    descripcion:
      "Cama plataforma con cabecero flotante tapizado en lino natural y estructura de madera maciza. Su diseño minimalista y sofisticado crea un ambiente de serenidad y elegancia, perfecto para dormitorios contemporáneos que buscan paz y simplicidad.",
    medidas: "160 × 200 × 90 cm",
    materiales: "Roble macizo FSC®, tapizado lino",
    acabado: "Aceite natural, tapizado premium",
    colchón: "Compatible con colchón 160×200",
    características: "Cabecero flotante acolchado",
    precio: 2000,
    img: "./assets/camaNeuquen.png",
    categoria: "dormitorio",
  },
  {
    id: 8,
    nombre: "Sofá Patagonia",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    medidas: "220 × 90 × 80 cm",
    estructura: "Madera de eucalipto certificada FSC®",
    tapizado: "Lino 100% natural premium",
    relleno: "Espuma HR + plumón reciclado",
    sostenibilidad: "Materiales 100% reciclables",
    precio: 1800,
    img: "./assets/sofaPatagonia.png",
    categoria: "sala",
  },
  {
    id: 9,
    nombre: "Mesa Comedor Pampa",
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    medidas: "160-240 × 90 × 75 cm",
    materiales: "Roble macizo FSC®, mecanismo alemán",
    acabado: "Aceite-cera natural",
    capacidad: "6-10 comensales",
    extensión: "Sistema de mariposa central",
    precio: 900,
    img: "./assets/mesaComedorPampa.png",
    categoria: "comedor",
  },
  {
    id: 10,
    nombre: "Sillas Córdoba",
    descripcion:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    medidas: "45 × 52 × 80 cm (cada una)",
    materiales: "Contrachapado nogal, tubo de acero",
    acabado: "Laca mate, pintura epoxi",
    apilables: "Hasta 6 sillas",
    incluye: "Set de 4 sillas",
    precio: 300,
    img: "./assets/sillasCordoba.png",
    categoria: "comedor",
  },
  {
    id: 11,
    nombre: "Escritorio Costa",
    descripcion:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    medidas: "120 × 60 × 75 cm",
    materiales: "Bambú laminado, herrajes ocultos",
    acabado: "Laca mate resistente",
    almacenamiento: "1 cajón con organizador",
    cables: "Pasacables integrado",
    precio: 1100,
    img: "./assets/escritorioCosta.png",
    categoria: "oficina",
  },
  {
    id: 12,
    nombre: "Silla de Trabajo Belgrano",
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    medidas: "60 × 60 × 90-100 cm",
    materiales: "Malla técnica, tejido reciclado",
    acabado: "Base cromada, tapizado premium",
    regulación: "Altura + inclinación respaldo",
    certificación: "Ergonomía europea EN 1335",
    precio: 700,
    img: "./assets/sillaDeTrabajoBelgrano.png",
    categoria: "oficina",
  },
];

const ProductPage = ({ loading, setPagina, setId }) => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setProductosFiltrados(productos);
  }, []);

  function onFiltrar(categoria, precio) {
    let filtrados = productos.filter((p) => {
      //filtrar por categoria
      const cat = categoria === "todos" || p.categoria === categoria;

      //filtrar por precio
      let pr = true;
      switch (precio) {
        case "bajo":
          pr = p.precio > 0 && p.precio <= 500;
          break;
        case "medio-bajo":
          pr = p.precio > 500 && p.precio <= 1000;
          break;
        case "medio-alto":
          pr = p.precio > 1000 && p.precio <= 1500;
          break;
        case "alto":
          pr = p.precio > 1500 && p.precio <= 2000;
          break;
        case "todos":
        default:
          pr = true;
      }
      return cat && pr;
    });
    setProductosFiltrados(filtrados);
  }

  function verProductoDetalle(e, id) {
    if (!e.target.classList.contains("ver-btn")) {
      setId(id);
      setPagina("detalle");
    }
  }

  return (
    <>
      <div className="hero-productos">
        <h1 className="hero-title">Nuestros Productos</h1>
        <p className="hero-subtitle">
          Descubre nuestra coleccion completa de muebles premium para cada
          espacio de tu hogar
        </p>
      </div>
      <main id="lista-productos" className="productos">
        <div className="productos-vista">
          <FiltrosSection onFiltrar={onFiltrar} />
          <p className="cantidad-productos">{`Mostrando ${productosFiltrados.length} productos`}</p>
          <section className="productos-list" id="productos-list">
            {loading ? (
              <p style={{ margin: "0 auto" }}>Cargando productos...</p>
            ) : (
              <ProductList
                productos={productosFiltrados}
                verProductoDetalle={verProductoDetalle}
              />
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductPage;
