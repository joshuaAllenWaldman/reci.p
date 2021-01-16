const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('recipes/recipeIndex')
});

router.get('/recipeShow', (req, res) => {
    res.render('recipes/recipeShow')
})



module.exports = router;