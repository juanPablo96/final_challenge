const express = require("express");
const routes = express.Router();
const {
  showAllStickers,
  changeQuantity,
  showMyStickers,
  showMyStickersfilterSouthafrica,
  showAllStickersWorldCup2014,
  showMyStickersfilterBrasil,
} = require("../controllers/stickerControllers");

routes.get("/stickersAlbum", showAllStickers); //ver todas las figuritas de la base de datos
routes.get("/showMyStickers", showMyStickers); //ver las  figuritas que tengo en mi colección
routes.get("/stickersFiltered/mundial2010", showMyStickersfilterSouthafrica); // ver figuaritas filtradas por pais mundial 2010

routes.get("/stickersAlbum/mundial2010", showAllStickersWorldCup2014); // ver figuaritas mundial 2014
routes.get("/stickersFiltered/mundial2014", showMyStickersfilterBrasil); // ver figuaritas filtradas por pais mundial 2014

routes.put("/quantity", changeQuantity);
module.exports = routes;
