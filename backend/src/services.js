const { productos } = require("./productos");

const getProducts = (req, res, next) => {
  try {
    return res.status(200).json(productos);
  } catch (err) {
    const error = new Error("Error al obtener los productos");
    error.status = 400;
    next(error);
  }
};

const getProductById = (req, res, next) => {
  try {
    const { id } = req.params;
    const product = productos.find((p) => p.id === Number(id));

    if (!product) {
      const error = new Error(`No se encotro producto con id: ${id}`);
      error.status = 404;
      next(error);
      return;
    }

    return res.status(200).json(product);
  } catch (err) {
    const error = new Error("Error al obtener los productos");
    error.status = 500;
    next(error);
  }
};

module.exports = { getProducts, getProductById };
