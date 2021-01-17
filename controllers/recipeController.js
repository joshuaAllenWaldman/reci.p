const express = require('express');
const router = express.Router();
const db = require('../models');

// Show all recipe
router.get('/', (req, res) => {
  db.Recipe.find({}, (err, allRecipes) => {
    if (err) {
      console.log(err);
    }

    const context = {
      recipeData: allRecipes,
    };
    res.render('recipes/recipeIndex', context);
  })

});


//GET to  Add recipe
router.get('/addRecipe', (req, res) => {
  res.render('recipes/addRecipe');
});


// Show ONE recipe
router.get('/:id', (req, res) => {
  const recipeId = req.params.id;

  db.Recipe.findById(recipeId, (err, foundRecipe) => {
    if (err) {
      console.log(err);
    }
    const context = {
      recipeData: foundRecipe,
    }
    res.render('recipes/recipeShow', context);
  })
})

router.post('/', (req, res) => {
  // console.log(req.body)
  const newRecipe = {};
  newRecipe.title = req.body.title;
  newRecipe.body = req.body.body;
  newRecipe.link = req.body.link;
  newRecipe.category = req.body.category;

  console.log(newRecipe)
  db.Recipe.create(newRecipe, (err, createdRecipe) => {
    if(err) {
      console.log(err)
    }
    console.log('New Recipe:', createdRecipe);

    res.redirect('/recipes')
  })
})

//GET edit
router.get('/:id/edit', (req, res) => {
  db.Recipe.findById(req.params.id, (err, foundRecipe) => {
    if(err){
      console.log(err)
    }
    const context = {
      recipeData: foundRecipe,
    }
    console.log(req.body);
    res.render('recipes/editRecipe', context)
  })

})

//Post update
router.put('/:id', (req, res) => {
  db.Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedRecipe) => {
      if (err) {
        console.log(err)
      }

      res.redirect('/recipes');
    }
  )
});

router.delete('/:id', (req, res) => {
  const recipeId = req.params.id;
  db.Recipe.findByIdAndDelete(recipeId, (err, deletedRecipe) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/recipes');
  })
})

module.exports = router;