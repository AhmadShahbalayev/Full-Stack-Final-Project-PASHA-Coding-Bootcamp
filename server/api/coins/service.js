const pool = require('../../config/database');

module.exports = {

  getCoins: func => {
    pool.query(
      `SELECT * FROM final.coins`,
      [],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  getCoinById: (id, func) => {
    pool.query(
      `SELECT * FROM final.coins WHERE id = ?`,
      [id],
      (err, res) => {
        if (err) return func(err);
        return func(null, res[0]);
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
        data.files['obverseLink'][0].filename,
        data.files['reverseLink'][0].filename,
        data.body.coinType
      ],
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  },

  updateCoin: (data, id, func) => {
    pool.query(
      `UPDATE final.coins SET name = ?, value = ?, year = ?, price = ?, country = ?, metal = ?, shortDescription = ?, fullDescription = ?, 
      quality = ?, weight = ?, obverseLink = ?, reverseLink = ?, coinType = ? WHERE id = ${id}`,
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
        data.files['obverseLink'][0].filename,
        data.files['reverseLink'][0].filename,
        data.body.coinType
      ],
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
      `SELECT * FROM final.coins WHERE coinType = '${type}'`,
      [],
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
  },

  searchCoin: (value, func) => {
    pool.query(
      `SELECT * FROM final.coins WHERE name LIKE '%${value}%'
      OR value LIKE '%${value}%'
      OR year LIKE '%${value}%'
      OR price LIKE '%${value}%'
      OR country LIKE '%${value}%'
      OR metal LIKE '%${value}%'
      OR shortDescription LIKE '%${value}%'
      OR fullDescription LIKE '%${value}%'
      OR quality LIKE '%${value}%'
      OR coinType LIKE '%${value}%'`,
      (err, res) => {
        if (err) return func(err);
        return func(null, res);
      }
    )
  }
};