const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const tipController = require('../controllers/tipController');

// Route to handle sharing tips
router.post('/share-tip', upload.array('images', 3), tipController.shareTip);

module.exports = router;
