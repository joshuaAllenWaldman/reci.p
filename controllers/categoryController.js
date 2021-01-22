const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  if(!req.session.currentUser) return res.redirect('/users/login');
 db.User.findById(req.session.currentUser._id, (err, foundUser) => {
   const context ={
     currentUser: foundUser,
   }
   res.render('category/categoriesIndex', context);
 })
});

//Show All Breakfast recipes
router.get('/breakfast', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  db.Recipe.find({
    $and: [
      {'category': 'Breakfast'},
      {user: req.session.currentUser._id}
    ]
  }, (err, foundRecipe) => {
    if(err) console.log(err);
    const context = {
      recipeData: foundRecipe,
      currentUser: req.session.currentUser
    }
    res.render('category/breakfast', context)
  })

});

router.get('/lunch', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  db.Recipe.find({
    $and: [
      {'category': 'Lunch'},
      {user: req.session.currentUser._id}
    ]
  }, (err, foundRecipe) => {
    if(err) console.log(err);
    const context = {
      recipeData: foundRecipe,
      currentUser: req.session.currentUser
    }
    res.render('category/lunch', context)
  })
});

router.get('/dinner', (req, res) => {
  if(!req.session.currentUser){
    return res.redirect('/users/login')
  }
  db.Recipe.find({
    $and: [
      {'category': 'Dinner'},
      {user: req.session.currentUser._id}
    ]
  }, (err, foundRecipe) => {
    if(err) console.log(err);
    const context = {
      recipeData: foundRecipe,
      currentUser: req.session.currentUser
    }
    res.render('category/dinner', context)
  })

});

module.exports = router;