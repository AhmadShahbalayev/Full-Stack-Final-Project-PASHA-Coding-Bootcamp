const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin,
  getCatalog
} = require('./controller');

const router = require('express').Router();

router.get('/coins', getCoins);
router.get('/coins/:id', getCoinById);
router.put('/coins/:id', updateCoin);
router.delete('/coins/:id', deleteCoin);
router.get('/:type', getCatalog);

module.exports = router;