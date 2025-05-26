const mongoose = require('mongoose');

const sharedVideoSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  submittedBy: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SharedVideo', sharedVideoSchema);