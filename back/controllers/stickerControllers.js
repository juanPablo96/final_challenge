const knex = require("../config/knexfile");

exports.showAllStickers = async (req, res) => {
  try {
    const resultado = await knex.select("*").from("sticker");

    if (resultado.length === 0) {
      return res.status(200).json(`Se han agregado figuritas al álbum`);
    }

    return res.status(200).json(resultado);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.changeQuantity = async (req, res) => {
  try {
    //registro en la tabla playlists
    const { id, quantity, own } = req.body;
    /*  const sticker_id = Number(req.params.id); */
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
