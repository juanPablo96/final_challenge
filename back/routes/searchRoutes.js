const express = require("express");
const routes = express.Router();

const { playerName } = require("../controllers/searchControllers");

routes.get(
  "/sticker/:name",
  /* runValidation, */

  playerName
);

module.exports = routes;
