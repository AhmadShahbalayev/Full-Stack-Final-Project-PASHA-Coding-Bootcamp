const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin,
  getCatalog,
  addCoinToDB
} = require('./service');

module.exports = {

  getCoins: (request, response) => {
    getCoins((err, res) => {
      if (err) return console.log(err);
      return response.json(res);
    })
  },

  getCoinById: (request, response) => {
    const id = request.params.id;
    getCoinById(id, (err, res) => {
      if (err) return console.log(err);
      if (!res) response.status(404).send(`Coin not found with the id of ${id}`);
      return response.json(res);
    })
  },

  updateCoin: (request, response) => {
    const id = request.params.id;
    updateCoin(request.body, id, (err, res) => {
      if (err) return console.log(err);
      return response.json(res);
    })
  },

  deleteCoin: (request, response) => {
    const id = request.params.id;
    deleteCoin(id, (err, res) => {
      if (err) return console.log(err);
      return response.json(res);
    })
  },

  getCatalog: (request, response) => {
    const type = request.params.type;
    getCatalog(type, (err, res) => {
      if (err) return console.log(err);
      return response.json(res);
    })
  },

  addCoinToDB: (request, response) => {
    console.log(request.body.coinType)
    addCoinToDB(request, (err, res) => {
      if (err) return console.log(err);
      return response.json(res);
    })
  },

};