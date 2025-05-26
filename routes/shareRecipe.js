const express = require('express');
const router = express.Router();
const SharedRecipe = require('../models/SharedRecipe');

router.post('/', async (req, res) => {
  try {
    const newRecipe = new SharedRecipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;