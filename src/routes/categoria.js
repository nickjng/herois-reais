var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.get("/atividade", function (req, res) {
    categoriaController.listar(req, res);
});

module.exports = router;