const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');



//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//HOME
app.get('/', (req, res) => {
  res.render('index')
});


//Port Listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});