const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin,
  getCatalog,
  addCoinToDB,
  addAdmin,
  getAdmin
} = require('./service');

const bcrypt = require('bcrypt');

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
    addCoinToDB(request, (err, res) => {
      if (err) return console.log(err);
      return response.json(res);
    })
  },

  checkAdminRights: (request, response) => {
    response.send('You do not have admin rights');
    return false;
  },

  addAdmin: async (request, response) => {
    try {
      const username = request.body.username;
      const hashedPasswordWithSalt = await bcrypt.hash(request.body.password, 10);
      addAdmin(username, hashedPasswordWithSalt, (err, res) => {
        if (err) return console.log(err);
        return response.json(res);
      })
    }
    catch {
      response.status(500).send('Something got wrong');
    }
  },

  login: async (request, response) => {
    getAdmin( async (err, res) => {
      if (err) return console.log(err);
      let admins = JSON.parse(JSON.stringify(res));
      let admin = admins.find(admin => admin.username === request.body.username);
      if (!admin) return response.status(400).send('Cannot find admin');
      try {
        const comparison = await bcrypt.compare(request.body.password, admin.password);
        if (comparison) {
          response.json({ status: true });
        };
        if (!comparison) {
          response.json({ status: false });
        };
      }
      catch {
        response.status(500).send();
      }
    });
  }
};