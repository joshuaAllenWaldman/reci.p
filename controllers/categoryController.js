const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/breakfast', (req, res) => {
  res.render('category/breakfast');
});

router.get('/lunch', (req, res) => {
  res.render('category/lunch');
});

router.get('/dinner', (req, res) => {
  res.render('category/dinner');
});


module.exports = router;