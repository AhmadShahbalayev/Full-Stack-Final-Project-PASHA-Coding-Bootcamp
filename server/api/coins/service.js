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
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  deleteCoin: (id, func) => {
    pool.query(
      `DELETE FROM final.coins WHERE id = ${id}`,
      [],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  getCatalog: (type, func) => {
    pool.query(
      `SELECT id, name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight, coinType
      FROM final.coins WHERE coinType = '${type}'`,
      [],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  addCoinToDB: (data, func) => {
    pool.query(
      `INSERT INTO final.coins (name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight, obverseLink, reverseLink, coinType)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.body.name, 
        data.body.value, 
        data.body.year, 
        data.body.price, 
        data.body.country, 
        data.body.metal, 
        data.body.shortDescription, 
        data.body.fullDescription, 
        data.body.quality, 
        data.body.weight, 
        `http://localhost:5000/images/${data.files['obverseLink'][0].filename}`, 
        `http://localhost:5000/images/${data.files['reverseLink'][0].filename}`,
        data.body.coinType
      ],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  addAdmin: (username, hashedPasswordWithSalt, func) => {
    pool.query(
      `INSERT INTO final.admins (username, password)
      VALUES (?, ?)`,
      [username, hashedPasswordWithSalt],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  getAdmin: func => {
    pool.query(
      `SELECT username, password
      FROM final.admins`,
      [],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  }
};