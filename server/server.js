require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const { APP_PORT, DB_PORT, DB_HOST, DB_USER, DB_PASS, MYSQL_DB } = process.env;
const PORT = process.env.PORT || APP_PORT;

const pool = mysql.createPool({
  port: DB_PORT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: MYSQL_DB
});

const app = express();

app.use(express.urlencoded({ extended = true }));
app.use(express.json());
app.use(cors());

