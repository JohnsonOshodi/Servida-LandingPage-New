const express = require('express');
const { newCleanerMessage } = require('../controllers/cleanerController');

const router = express.Router();

router.get('/signup-message', newCleanerMessage);

module.exports = router;
