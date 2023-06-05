const knex = require("../config/knexfile");

/* Figuritas mundial 2010 */
exports.showAllStickers = async (req, res) => {
  try {
    const resultado = await knex
      .select("*")
      .from("sticker")
      .where({ category: "mundial2010(futbol)" });

    if (resultado.length === 0) {
      return res.status(200).json(`Se han agregado figuritas al álbum`);
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

/* Actualizar la cantidad de figuritas */
exports.changeQuantity = async (req, res) => {
  try {
    const { id, quantity, own } = req.body;
    console.log(quantity);
    const sticker = await knex("sticker")
      .where({ id: id })

      .update(
        {
          quantity: quantity,
          own: own,
        },
        ["id", "name", "quantity", "own"]
      );

    res.status(200).json({ sticker: sticker[0] });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.showMyStickers = async (req, res) => {
  try {
    const resultado = await knex
      .select("*")
      .from("sticker")
      .where({ own: true });

    if (resultado.length === 0) {
      return res.status(200).json(`ésta es tu colección de figuritas`);
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
/* Filtrado por Paises */
exports.showMyStickersfilter = async (req, res) => {
  try {
    const resultado = await knex
      .column("number")
      .orderBy("number")
      .select("*")
      .from("sticker");

    if (resultado.length === 0) {
      return res.status(200).json(`ésta es tu colección de figuritas`);
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

/* Figuritas mundial 2014 */

exports.showAllStickersmundial2014 = async (req, res) => {
  try {
    const resultado = await knex
      .select("*")
      .from("sticker")
      .where({ category: "mundial2014(futbol)" });

    if (resultado.length === 0) {
      return res
        .status(200)
        .json(`Se han agregado figuritas al álbum del Mundial de Brasil 2014`);
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
