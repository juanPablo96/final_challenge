const express = require("express");
const routes = express.Router();
const {
  showAllStickers,
  changeQuantity,
  showMyStickers,
  showMyStickersfilter,
} = require("../controllers/stickerControllers");

routes.get("/stickersAlbum", showAllStickers); //ver todas las figuritas de la base de datos
routes.get("/showMyStickers", showMyStickers); //ver las  figuritas que tengo en mi colección
routes.get("/stickersFiltered", showMyStickersfilter);

routes.put("/quantity", changeQuantity);
module.exports = routes;
