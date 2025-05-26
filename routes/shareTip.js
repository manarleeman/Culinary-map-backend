const express = require('express');
const router = express.Router();
const SharedTip = require('../models/SharedTip');

router.post('/', async (req, res) => {
  try {
    const newTip = new SharedTip(req.body);
    await newTip.save();
    res.status(201).json(newTip);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;