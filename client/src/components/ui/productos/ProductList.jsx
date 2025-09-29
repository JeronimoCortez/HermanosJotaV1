import ProductCard from "./ProductCard";

const ProductList = ({ productos, verProductoDetalle }) => {
  if (!productos) return <div></div>;
  return (
    <>
      {productos.length === 0 ? (
        <div className="sin-contenido" style={{ margin: "0 auto" }}>
          <p>No se encontraron productos</p>
        </div>
      ) : (
        productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            verProductoDetalle={verProductoDetalle}
          />
        ))
      )}
    </>
  );
};
export default ProductList;
