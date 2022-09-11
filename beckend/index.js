const express = require("express");
const cors = require("cors");
const app = express();
const port = 2727;

// CONFIGURAÇÃO PARA LER JSON / MIDDLEWARES
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Importando a API
const api = require("./services/api.json");

app.get("/", (req, res) => {
  res.json(api);
});

app.listen(port, () => {
  console.log(`Beckend rodando na Porta ${port}!`);
});
