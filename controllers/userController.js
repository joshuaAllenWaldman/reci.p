const express = require('express');
const router = express.Router();
const db = require('../models');

//landing page
router.get('/', (req, res) => {
  res.render('users/login')
})

//sign up page
router.get('/signup', (req, res) => {
  res.render('users/signup')
});

//handle signup info
router.post('/', (req, res) => {
  const newUser = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  db.User.create(newUser, (err, createdUser) => {
    if(err) return console.log(err);
    res.render('users/login')
  })
})

//GET Login form
router.get('/login', (req, res) => {
  res.render('users/login')
})

//Handle Login form
router.post('/login', (req, res) => {
  db.User.findOne({username: req.body.username}, (err, foundUser) => {
    if(!foundUser) return res.redirect('/users/login');
    if (req.body.password === foundUser.password){
      req.session.currentUser = foundUser;
      return res.redirect('/categories')
    } 
    res.redirect('/users/login')
  })
})


//show profilie page
router.get('/account-page', (req, res) => {
  if(!req.session.currentUser) return res.redirect('/users/login');
  db.User.findById(req.session.currentUser._id)
  .populate('recipes').exec((err, foundUser) => {
    if(err) console.log(err);
    const context = {
      currentUser: foundUser,
    }
    res.render('users/profileShow', context)
  })
})

//Logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return console.log(err);
    res.redirect('/');
  })
});



module.exports = router;