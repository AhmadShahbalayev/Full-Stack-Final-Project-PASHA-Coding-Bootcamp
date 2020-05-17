const pool = require('../../config/database');

module.exports = {

  getCoins: func => {
    pool.query(
      `SELECT id, name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight
      FROM final.coins`,
      [],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  getCoinById: (id, func) => {
    pool.query(
      `SELECT id, name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight
      FROM final.coins WHERE id = ?`,
      [id],
      (err, res) => {
        if (err) return func(err);
        return func(null, res[0]);
      }
    )
  },

  updateCoin: (data, id, func) => {
    pool.query(
      `UPDATE final.coins SET name = ?, value = ?, year = ?, price = ?, country = ?, metal = ?, shortDescription = ?, fullDescription = ?, quality = ?, weight =?
      WHERE id = ${id}`,
      [data.name, data.value, data.year, data.price, data.country, data.metal, data.shortDescription, data.fullDescription, data.quality, data.weight],
      (err, res) => {
        if(err) return func(err);
        return func(null, res);
      }
    )
  },

  deleteCoin: (id, func) => {
    pool.query(
      `DELETE FROM final.coins WHERE id = ${id}`,
      [],
      (err, res) => {
        if(err) return func(err);
        return func(null, res);
      }
    )
  },

  getCatalog: (type, func) => {
    pool.query(
      `SELECT id, name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight
      FROM final.coins WHERE coinType = '${type}'`,
      [],
      (err, res) => {
        if(err) return func(err);
        return func(null, res);
      }
    )
  }
};