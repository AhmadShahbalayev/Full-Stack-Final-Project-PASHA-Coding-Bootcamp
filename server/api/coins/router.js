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
  searchCoin,
  searchAndFilter,
  getSelectValues
} = require('./controller');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage(
  {
    destination: './upload/images',
    filename: (req, file, func) => {
      return func(null, `${path.parse(file.originalname).name}_${Date.now()}${path.extname(file.originalname)}`);
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
router.get('/get-select-values', getSelectValues);

// POSTS:

router.post('/add-admin', checkAdminRights, addAdmin);
router.post('/admin', login);
router.post('/coins', upload.fields([{name: 'obverseLink'}, {name: 'reverseLink'}]), addCoinToDB);
router.post('/search-and-filter', searchAndFilter);

// PUTS: 

router.put('/coins/:id', upload.fields([{name: 'obverseLink'}, {name: 'reverseLink'}]), updateCoin);

// DELETES: 

router.delete('/delete-coin/:id', deleteCoin);

module.exports = router;