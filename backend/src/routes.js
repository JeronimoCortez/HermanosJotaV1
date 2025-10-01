const express = require('express');
const router = express.Router();
const productoService = require('./services')


router.get('/productos', productoService.obtenerTodosLosProductos);

router.get('/productos/:id', productoService.obtenerProductoPorId)


module.exports = router;