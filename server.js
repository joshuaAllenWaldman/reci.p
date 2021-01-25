const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController');
const categoryController = require('./controllers/categoryController');
const session = require('express-session');
const app = express();
const db = require('./models');

PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');



//Middleware
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'milk and cookies',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2, //valid for 2 weeks. 
  }
}))


//HOME
app.get('/', (req, res) => {
  res.redirect('/users/login');
}); 

// app.use('/users', userController);
app.use('/recipes', recipeController);
app.use('/categories', categoryController);
app.use('/users', userController);


//Port Listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});