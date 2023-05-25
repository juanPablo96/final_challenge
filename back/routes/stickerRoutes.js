const express = require("express");
const routes = express.Router();
const { showAllStickers } = require("../controllers/stickerControllers");

routes.get("/stickersAlbum", showAllStickers); //ver todas laas figuritas de la base de datos

module.exports = routes;
