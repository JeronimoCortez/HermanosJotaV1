import { products } from "./productos";

export const getProducts = (req, res) => {
  try {
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los productos" });
  }
};

export const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
      res.status(404).json({ message: `No se encotro producto con id: ${id}` });
      return;
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("ERROR: ", error);
    return res.status(500).json({ message: "Error al obtener los productos" });
  }
};
