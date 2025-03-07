const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/mensagem", (req, res) => {
  res.json({ mensagem: "Olá do backend! Esta mensagem foi enviada com sucesso." });
});

module.exports = app;
