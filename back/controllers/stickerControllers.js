const knex = require("../config/knexfile");

exports.showAllStickers = async (req, res) => {
  try {
    const resultado = await knex.select("*").from("sticker");

    if (resultado.length === 0) {
      return res.status(200).json(`No se han agregado figuritas al álbum`);
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
