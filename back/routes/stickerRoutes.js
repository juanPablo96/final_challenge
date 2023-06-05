const express = require("express");
const routes = express.Router();
const {
  showAllStickers,
  changeQuantity,
  showMyStickers,
  showMyStickersfilter,
  showAllStickersmundial2014,
} = require("../controllers/stickerControllers");

routes.get("/stickersAlbum", showAllStickers); //ver todas las figuritas de la base de datos
routes.get("/showMyStickers", showMyStickers); //ver las  figuritas que tengo en mi colección
routes.get("/stickersFiltered", showMyStickersfilter);

routes.get("/stickersAlbum/mundial2014", showAllStickersmundial2014); // ver figuaritas mundial 2014

routes.put("/quantity", changeQuantity);
module.exports = routes;
