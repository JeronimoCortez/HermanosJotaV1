const express = require("express");
const router = express.Router();
const productoService = require("./services");

router.get("/productos", productoService.getProducts);

router.get("/productos/:id", productoService.getProductById);

module.exports = router;
