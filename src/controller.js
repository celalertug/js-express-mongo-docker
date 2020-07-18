const express = require('express');

module.exports = () => {
  const router = express.Router();

  router.get('/test', (req, res) => {
    res.json({ message: 'surprise motherfucker!!!' });
  });

  return router;
};
