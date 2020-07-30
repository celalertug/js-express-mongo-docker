/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDb, create } = require('mongo-node-client');

const controller = require('./src/controller.js');

(async () => {
  const {
    PORT, MONGO_URL, DB_NAME, COLLECTION_NAME,
  } = process.env;

  let db;
  try {
    // db = await connectDb(process.env.MONGO_URL);
    db = await connectDb(MONGO_URL);
  } catch (error) {
    console.log('mongo db connection failed');
    process.exit(1);
  }

  const dbo = db.db(DB_NAME);
  const mongoService = create(dbo, COLLECTION_NAME);
  await mongoService.createCollection();
  // await createCollection(dbo, COLLECTION_NAME);

  //   const dbo = db.db(process.env.DB_NAME);

  const app = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use('/', controller(mongoService));

  app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
})();
