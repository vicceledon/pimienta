const path = require("path");
const { about, listaPlatos } = require("../models/data");
//definir el controlador con todos sus métodos//
const indexController = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index"), {
      about: about,
      listaPlatos: listaPlatos,
    });
  },
  idPlatos: (req, res) => {
    let id = req.params.id - 1;

    res.render(path.join(__dirname, "../views/detalleMenu"), {
      detallePlato: listaPlatos[id],
    });
  },
};
//exportar el módulo controlador//
module.exports = indexController;
