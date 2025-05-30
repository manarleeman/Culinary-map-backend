const mongoose = require('mongoose');

const tipSchema = new mongoose.Schema({
  title: String,
  category: String,
  region: String,
  difficulty: String,
  description: String,
  solution: String,
  whyItWorks: String,
  relatedDishes: [String],
  relatedIngredients: [String],
  relatedEquipment: [String],
  experience: String,
  variations: String,
  authorName: String,
  authorEmail: String,
  cookingExperience: String,
  credit: String,
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tip', tipSchema);
