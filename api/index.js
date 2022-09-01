const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

const port = 5000;

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//rota de teste
app.get("/teste", (req, res) =>
  res.status(200).send({ messagem: "Boas vindas a api" })
);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;
