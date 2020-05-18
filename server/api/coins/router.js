const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin,
  getCatalog,
  addCoinToDB,
} = require('./controller');

const router = require('express').Router();

router.get('/coins', getCoins);
router.get('/coins/:id', getCoinById);
router.put('/coins/:id', updateCoin);
router.delete('/coins/:id', deleteCoin);
router.get('/catalog/:type', getCatalog);
router.post('/coins', addCoinToDB);

module.exports = router;