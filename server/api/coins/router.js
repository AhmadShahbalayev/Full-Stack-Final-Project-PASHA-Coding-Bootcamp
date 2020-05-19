const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin,
  getCatalog,
  addCoinToDB,
  addAdmin,
  checkAdminRights,
  login
} = require('./controller');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage(
  {
    destination: './upload/images',
    filename: (req, file, func) => {
      return func(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
  }
)

const upload = multer(
  {
    storage,
  }
)

const router = require('express').Router();

router.post('/add-admin', checkAdminRights, addAdmin);
router.post('/admin', login);

router.get('/coins', getCoins);
router.get('/coins/:id', getCoinById);
router.put('/coins/:id', updateCoin);
router.delete('/coins/:id', deleteCoin);
router.get('/catalog/:type', getCatalog);
router.post('/coins', upload.fields([{name: 'obverseLink'}, {name: 'reverseLink'}]), addCoinToDB);

module.exports = router;