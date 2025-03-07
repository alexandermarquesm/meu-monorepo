import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/mensagem", (req, res) => {
  res.json({
    mensagem: "Olá do backend! Esta mensagem foi enviada com sucesso.",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
