const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController');
const categoryController = require('./controllers/categoryController');
const app = express();
const db = require('./models');

PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');



//Middleware
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//HOME
app.get('/', (req, res) => {
  res.redirect('/categories');
}); 

// app.use('/users', userController);
app.use('/recipes', recipeController);
app.use('/categories', categoryController);


//Port Listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});