const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);