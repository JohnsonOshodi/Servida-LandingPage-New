const express = require('express');
const { submitExtraInfo } = require('../controllers/extraInfoController');
const router = express.Router();

// Route to handle form submission
router.post('/extra-info', submitExtraInfo);

module.exports = router;
