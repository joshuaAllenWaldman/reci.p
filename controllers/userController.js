const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/signup', (req, res) => {
  res.render('signup')
});

module.exports = router;