/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./src/controller.js');

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use('/', controller());

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
