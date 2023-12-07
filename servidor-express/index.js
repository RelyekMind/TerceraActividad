const express = require("express");
const app = express();
const PORT = 8080;

const productos = require("./productos.json");

app.get("/products", (req, res) => {
  res.json(productos);
});

app.get("/products", (req, res) => {
  const limit = req.query.limit || productos.length;
  res.json(productos.slice(0, limit));
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const producto = productos.find((p) => p.id == id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ error: "El producto no existe" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de productos!");
});
