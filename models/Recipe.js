const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true},
  body: String,
  link: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;