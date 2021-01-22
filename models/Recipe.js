const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true},
  body: String,
  link: String,
  category: {
    type: String,
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;



