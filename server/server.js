require('dotenv').config();
const express = require('express');
const cors = require('cors');
const coinsRouter = require('./api/coins/router');
const PORT = process.env.PORT || process.env.APP_PORT;
const app = express();
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

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(coinsRouter);

app.use('/images', express.static('upload/images'));


app.post('/upload', upload.single('image'), (req, res) => {
  res.json({
    image_url: `http://localhost:5000/images/${req.file.filename}`
  })
});

app.listen(PORT);
