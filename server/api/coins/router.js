const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin
} = require('./controller');

const router = require('express').Router();

router.get('/coins', getCoins);
router.get('/coins/:id', getCoinById);
router.put('/coins/:id', updateCoin);
router.delete('/coins/:id', deleteCoin);

module.exports = router;