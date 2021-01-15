const express = require('express');
const router = express.Router();
const db = require('../models');




router.get('/signup', (req, res) => {
  res.render('signup')
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log(userId)
  db.User.findById(userId, (err, foundUser) => {
    if(err) {
      console.log(err);
    }
    console.log(foundUser);
  })




  res.render('profileShow');
})



module.exports = router;