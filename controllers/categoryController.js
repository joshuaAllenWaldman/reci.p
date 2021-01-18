const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/breakfast', (req, res) => {
  db.Recipe.find({'category': 'breakfast'}, (err, allRecipes) => {
    if (err) {
      console.log(err);
    }
    const context = {
      recipeData: allRecipes,
    };
    db.Category.findOne({'title': 'Breakfast'})
    .populate('recipes')
    .exec((err, foundCategory) => {
      if (err) {
        console.log(err);
      }
      // console.log(allRecipes)
      for (let i = 0; i < allRecipes.length; i++) {
        foundCategory.recipes.push(allRecipes[i]._id);
      }
      console.log(foundCategory);
      const context = {
        breakfastData: foundCategory
      };
      res.render('category/breakfast', context);
    })
  });
});

router.get('/lunch', (req, res) => {
  res.render('category/lunch');
});

router.get('/dinner', (req, res) => {
  res.render('category/dinner');
});


module.exports = router;