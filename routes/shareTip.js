const express = require('express');
const multer = require('multer');
const path = require('path');
const Tip = require('../models/Tip');
const router = express.Router();

// Set up multer for image handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/tips/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// POST route to handle tip submission
router.post('/', upload.array('tip-images[]', 3), async (req, res) => {
  try {
    const {
      'tip-title': title,
      'tip-category': category,
      'tip-region': region,
      'tip-description': description,
      'tip-solution': solution,
      'tip-why': whyItWorks,
      'related-dishes': relatedDishes,
      'related-ingredients': relatedIngredients,
      'related-equipment': relatedEquipment,
      'tip-experience': experience,
      'tip-variations': variations,
      'author-name': authorName,
      'author-email': authorEmail,
      'cooking-experience': cookingExperience,
      credit,
      difficulty
    } = req.body;

    const imagePaths = req.files.map(file => file.path);

    const newTip = new Tip({
      title,
      category,
      region,
      description,
      solution,
      whyItWorks,
      relatedDishes,
      relatedIngredients,
      relatedEquipment,
      experience,
      variations,
      authorName,
      authorEmail,
      cookingExperience,
      credit,
      difficulty,
      images: imagePaths
    });

    await newTip.save();
    res.status(201).json({ message: 'Tip submitted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error submitting tip' });
  }
});

module.exports = router;
