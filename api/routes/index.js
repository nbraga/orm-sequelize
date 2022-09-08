const bodyParser = require("body-parser");
const cors = require("cors");
const pessoas = require("./pessoasRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");

module.exports = (app) => {
  app.use(cors());
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    pessoas,
    niveis,
    turmas
  );
};
