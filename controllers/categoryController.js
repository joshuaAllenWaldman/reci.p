const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('index');
});

//Show All Breakfast recipes
router.get('/breakfast', (req, res) => {
  db.Category.findOne({'title': 'Breakfast'}).populate('recipes').exec(
    (err, foundCategory) => {
      if(err){console.log(err)};
      const context = {
        breakfastData: foundCategory
      }
      res.render('category/breakfast', context)
    }
    
  )
});

router.get('/lunch', (req, res) => {
  db.Category.findOne({'title': 'Lunch'}).populate('recipes').exec(
    (err, foundCategory) => {
      if(err){console.log(err)};
      const context = {
        lunchData: foundCategory
      }
      res.render('category/lunch', context)
    }
  )

});

router.get('/dinner', (req, res) => {
  db.Category.findOne({'title': 'Dinner'}).populate('recipes').exec(
    (err, foundCategory) => {
      if(err){console.log(err)};
      const context = {
        dinnerData: foundCategory
      }
      res.render('category/dinner', context)
    }
  )

});


module.exports = router;