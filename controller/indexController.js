const path = require("path");
//definir el controlador con todos sus métodos//
const indexController = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index"));
  },
};
//exportar el módulo controlador//
module.exports = indexController;
