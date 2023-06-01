const express = require("express");
const routes = express.Router();
const {
  showAllStickers,
  changeQuantity,
  showMyStickers,
} = require("../controllers/stickerControllers");

routes.get("/showMyStickers", showMyStickers); //ver todas las figuritas de la base de datos
routes.get("/stickersAlbum", showAllStickers); //ver las  figuritas que tengo en mi colección
routes.put("/quantity", changeQuantity);
module.exports = routes;
