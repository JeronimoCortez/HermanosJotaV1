const express = require("express");
const app = express();

const cors = require("cors");
const PORT = process.env.PORT || 3001;
const middleware = require("./middleware");
const productoRoutes = require("./routes");

app.use(cors());

app.use(express.json());
app.use(middleware.logger);

app.use("/api", productoRoutes);

app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
