const mongoose = require('mongoose');
const { db } = require('./Recipe');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    username: {type: String, required: true},
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;

