const productos = require('./productos')

function obtenerTodosLosProductos(req, res){
    res.status(200).json(productos)
}

function obtenerProductoPorId(req, res){
    const idProducto = parseInt(req.params.id);

    const productoEncontrado = productos.find(p => p.id === idProducto)

    if (productoEncontrado){
        res.status(200).json(productoEncontrado)
    }
    else{
        res.status(404).json({error: 'Producto no encontrado', id: idProducto})
    }
}

module.exports ={
    obtenerTodosLosProductos,
    obtenerProductoPorId
}