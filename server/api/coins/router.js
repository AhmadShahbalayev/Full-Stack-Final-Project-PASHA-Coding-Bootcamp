const {
  getCoins,
  getCoinById,
  updateCoin,
  deleteCoin,
  getCatalog,
  addCoinToDB,
  addAdmin,
  checkAdminRights,
  login,
  searchCoin
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

// GETS:

router.get('/search', searchCoin);
router.get('/coins', getCoins);
router.get('/coins/:id', getCoinById);
router.get('/catalog/:type', getCatalog);

// POSTS:

router.post('/add-admin', checkAdminRights, addAdmin);
router.post('/admin', login);
router.post('/coins', upload.fields([{name: 'obverseLink'}, {name: 'reverseLink'}]), addCoinToDB);

// PUTS: 

router.put('/coins/:id', updateCoin);

// DELETES: 

router.delete('/coins/:id', deleteCoin);

module.exports = router;