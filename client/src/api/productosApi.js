const BASE_URL = 'http://localhost:3000/api/productos';

export const getProductos = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('No se pudo obtener la lista de productos');
    }
    return await response.json();
};

export const getProductoById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (response.status === 404) {
         throw new Error('Producto no encontrado (404)');
    }
    if (!response.ok) {
        throw new Error('Error al obtener el producto');
    }
    return await response.json();
};