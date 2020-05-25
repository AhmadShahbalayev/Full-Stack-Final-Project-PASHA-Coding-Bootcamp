const pool = require('../../config/database');

const createArrayWithFiles = (data) => {
  return [
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
  ]
}

const createArrayWithoutFiles = (data) => {
  return [
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
    data.body.obverseLink,
    data.body.reverseLink,
    data.body.coinType
  ]
}

module.exports = {

  getCoins: func => {
    const sql = `SELECT * FROM final.coins ORDER BY id DESC`;
    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  getCoinById: (id, func) => {
    const sql = `SELECT * FROM final.coins WHERE id = ? ORDER BY id DESC`;
    pool.query(sql, [id], (err, res) => {
      if (err) return func(err);
      return func(null, res[0]);
    })
  },

  addCoinToDB: (data, func) => {
    const sql = `INSERT INTO final.coins (name, value, year, price, country, metal, shortDescription, fullDescription, quality, weight, obverseLink, reverseLink, coinType)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    pool.query(sql, createArrayWithFiles(data), (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  updateCoin: (data, id, func) => {
    const sql = `UPDATE final.coins SET name = ?, value = ?, year = ?, price = ?, country = ?, metal = ?, shortDescription = ?, fullDescription = ?, 
    quality = ?, weight = ?, obverseLink = ?, reverseLink = ?, coinType = ? WHERE id = ${id}`
    if (data.files) {
      pool.query(sql, createArrayWithFiles(data), (err, res) => {
        if (err) return func(err);
        return func(null, res);
      })
    } else {
      pool.query(sql, createArrayWithoutFiles(data), (err, res) => {
        if (err) return func(err);
        return func(null, res);
      })
    }
  },

  deleteCoin: (id, func) => {
    const sql = `DELETE FROM final.coins WHERE id = ${id}`;
    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  getCatalog: (type, func) => {
    const sql = `SELECT * FROM final.coins WHERE coinType = '${type}' ORDER BY id DESC`;
    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  addAdmin: (username, hashedPasswordWithSalt, func) => {
    const sql = `INSERT INTO final.admins (username, password) VALUES (?, ?)`;
    pool.query(sql, [username, hashedPasswordWithSalt], (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  getAdmin: func => {
    const sql = `SELECT username, password FROM final.admins ORDER BY id DESC`;
    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  searchCoin: (value, func) => {
    const sql = `SELECT * FROM final.coins 
    WHERE name LIKE '%${value}%'
    OR value LIKE '%${value}%'
    OR year LIKE '%${value}%'
    OR price LIKE '%${value}%'
    OR country LIKE '%${value}%'
    OR metal LIKE '%${value}%'
    OR shortDescription LIKE '%${value}%'
    OR fullDescription LIKE '%${value}%'
    OR quality LIKE '%${value}%'
    OR coinType LIKE '%${value}%' ORDER BY id DESC`;
    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  searchAndFilter: (data, func) => {
    delete data.conditions.visibility;
    let { country, metal, quality, priceFrom, priceTo, yearFrom, yearTo } = data.conditions;
    let values = data.conditions;

    country ? values.country = `country = '${country}'` : '';
    metal ? values.metal = `metal = '${metal}'` : '';
    quality ? values.quality = `quality = '${quality}'` : '';
    priceFrom ? values.priceFrom = `price >= ${priceFrom}` : '';
    priceTo ? values.priceTo = `price <= ${priceTo}` : '';
    yearFrom ? values.yearFrom = `year >= ${yearFrom}` : '';
    yearTo ? values.yearTo = `year <= ${yearTo}` : '';
    const newData = Object.values(values);

    let sql = '';
    if (newData.every(item => item === '')) {
      sql = `SELECT * FROM final.coins`;
    } else {
      const result = newData.filter(val => val !== '');
      const where = result.join(' AND ');
      sql = `SELECT * FROM final.coins WHERE ${where}`;
    }

    const text = data.text;

    if (sql === `SELECT * FROM final.coins`) {
      sql += ` WHERE name LIKE '%${text}%' OR shortDescription LIKE '%${text}%' OR fullDescription LIKE '%${text}%'`;
    } else {
      sql += ` AND (name LIKE '%${text}%' OR shortDescription LIKE '%${text}%' OR fullDescription LIKE '%${text}%')`;
    }

    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  },

  getSelectValues: func => {
    const sql = `SELECT country, metal, quality FROM final.coins ORDER BY id DESC`;
    pool.query(sql, (err, res) => {
      if (err) return func(err);
      return func(null, res);
    })
  }
};