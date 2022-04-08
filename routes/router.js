const express = require("express");
const router = express.Router();
//requerir los controladores//
const indexController = require("../controller/indexController");
//asignar uso de los controladores//
router.get("/", indexController.index);
router.get("/detalleMenu/:id", indexController.idPlatos);
//exportar el modulo de rutas//
module.exports = router;
