const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const productoRoutes = require("./routes");

app.use(cors());

app.use(express.json());

app.use("/api", productoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
