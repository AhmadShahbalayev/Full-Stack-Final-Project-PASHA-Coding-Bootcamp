require('dotenv').config();
const express = require('express');
const cors = require('cors');
const coinsRouter = require('./api/coins/router');
const PORT = process.env.PORT || process.env.APP_PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(coinsRouter);   
app.use('/images', express.static('upload/images')); 

app.listen(PORT);
