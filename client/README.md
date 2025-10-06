# Hermanos Jota V1

Proyecto final ITBA - E-commerce de muebles premium

## Descripción

Hermanos Jota es una aplicación web para la venta de muebles premium, desarrollada como proyecto para ITBA. Permite explorar productos, ver detalles, filtrar por categoría y precio, y simular compras.

## Tecnologías

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Base de datos:** (simulada en archivos JS)
- **Otros:** Fetch API, ES Modules

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tuusuario/HermanosJotaV1.git
   ```
2. Instala dependencias en el backend y frontend:

   ```
   cd HermanosJotaV1/backend
   npm install

   cd ../client
   npm install
   ```

## Ejecución

1. Inicia el backend:

   ```
   cd backend
   npm start
   ```

   El backend corre en `http://localhost:3001`.

2. Inicia el frontend:
   ```
   cd client
   npm start
   ```
   El frontend corre en `http://localhost:3000`.

## Funcionalidades

- Listado de productos con filtros por categoría y precio
- Vista detallada de cada producto
- Contador de cantidad y simulación de compra
- Navegación entre páginas (Inicio, Productos, Contacto)

## Estructura de carpetas

```
HermanosJotaV1/
├── backend/
│   ├── src/
│   │   ├── productos.js
│   │   ├── services.js
│   │   └── routes.js
│   └── ...
├── client/
│   ├── src/
│   │   ├── components/
│   │   └── ...
│   └── ...
```

## Autores

- Jeronimo Cortez
- Nahuel Donatti
- Fausto Leal
- Samuel Darte
- ITBA - Proyecto Final
