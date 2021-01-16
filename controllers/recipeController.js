const express = require('express');
const router = express.Router();
const db = require('../models');

// Show all recipe
router.get('/', (req, res) => {
    res.render('recipes/recipeIndex')
});

// Show ONE recipe
router.get('/:id', (req, res) => {
  const recipeId = req.params.id;

  db.Recipe.findById(recipeId, (err, foundRecipe) => {
    if (err) {
      console.log(err);
    }

  })
    res.render('recipes/recipeShow');
})

// Add recipe
router.get('/addRecipe', (req, res) => {
  res.render('recipes/addRecipe');
});

module.exports = router;