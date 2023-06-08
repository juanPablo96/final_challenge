const knex = require("../config/knexfile");

exports.playerName = async (req, res) => {
  const searchPlayer = req.params.name.toUpperCase();

  try {
    // Buscar el sticker por su nombre
    const stikers = await knex("sticker")
      /*       .whereRaw(` name LIKE ?`, `%${searchPlayer.toLowerCase()}%`) */
      .whereILike(`name `, `%${searchPlayer.toLowerCase()}%`)

      .select("id", "name");

    return res.status(200).json(stikers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
