const express = require('express');
const router = express.Router();
const SharedVideo = require('../models/SharedVideo');

router.post('/', async (req, res) => {
  try {
    const newVideo = new SharedVideo(req.body);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;