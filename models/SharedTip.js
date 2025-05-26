const mongoose = require('mongoose');

const sharedTipSchema = new mongoose.Schema({
  tip: String,
  submittedBy: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SharedTip', sharedTipSchema);