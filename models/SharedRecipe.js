const mongoose = require('mongoose');

const sharedRecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: String,
  steps: String,
  submittedBy: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SharedRecipe', sharedRecipeSchema);