const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  db.User.findById(req.session.currentUser._id)
  .populate('recipes')
  .exec((err, foundUser) => {
    if (err) console.log(err);
    const context = {
      recipeData: foundUser.recipes,
      currentUser: foundUser
    };
    res.render('recipes/recipeIndex', context);
  })
});


router.get('/addRecipe', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  res.render('recipes/addRecipe');
});


// Show ONE recipe
router.get('/:id', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  const recipeId = req.params.id;
  db.Recipe.findById(recipeId, (err, foundRecipe) => {
    if (err) console.log(err);
    const context = {
      recipeData: foundRecipe,
    }
    res.render('recipes/recipeShow', context);
  })
})

//create recipe
router.post ('/', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  if(!req.body.title) {
  return res.redirect('/recipes/addRecipe')
  }
  const recipeObject = req.body;
  recipeObject.user = req.session.currentUser._id;
  db.Recipe.create(recipeObject, (err, createdRecipe) => {
    if(err) console.log(err);
    console.log('console check 1;',createdRecipe)
    db.User.findByIdAndUpdate(
      req.session.currentUser._id,
      {$push: {recipes: createdRecipe._id}},
      {new: true},
      (err, foundUser) => {
        if(err)console.log(err);
        if(req.body.category) {
          return res.redirect(`/categories/${(req.body.category).toLowerCase()}`)
        }
        res.redirect('/recipes')
      }
    )
  })
})

//GET edit
router.get('/:id/edit', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  db.Recipe.findById(req.params.id, (err, foundRecipe) => {
    if(err) console.log(err);
    const context = {
      recipeData: foundRecipe,
    }
    res.render('recipes/editRecipe', context)
  })
});

//Post update
router.put('/:id', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  db.Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedRecipe) => {
      if (err) console.log(err)
      res.redirect('/recipes');
    })
});

router.delete('/:id', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  const recipeId = req.params.id;
  db.Recipe.findByIdAndDelete(recipeId, (err, deletedRecipe) => {
    if (err) console.log(err);
    res.redirect('/recipes');
  })
})

module.exports = router;