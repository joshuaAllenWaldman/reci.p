const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
    res.render('index');
});

//Show All Breakfast recipes
router.get('/breakfast', (req, res) => {
  const categoryName = req.body.title;
  db.Category.findOne(categoryName).populate('recipes').exec(
    (err, foundCategory) => {
      if(err){console.log(err)};
      const context = {
        breakfastData: foundCategory
      }
      console.log(foundCategory)
      res.render('category/breakfast', context)
    }
  )

});

router.get('/lunch', (req, res) => {
  res.render('category/lunch');
});

router.get('/dinner', (req, res) => {
  res.render('category/dinner');
});


module.exports = router;