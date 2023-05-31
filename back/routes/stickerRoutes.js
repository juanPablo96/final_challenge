const express = require("express");
const routes = express.Router();
const {
  showAllStickers,
  changeQuantity,
  showMyStickers,
} = require("../controllers/stickerControllers");

routes.get("/stickersAlbum", showAllStickers);
routes.get("/showMyStickers", showMyStickers); //ver todas laas figuritas de la base de datos
routes.put("/quantity", changeQuantity);
module.exports = routes;
