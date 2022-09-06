const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");
const cors = require("cors");

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(pessoas);
  app.get("/", (req, res) => res.send("Olá"));
};
