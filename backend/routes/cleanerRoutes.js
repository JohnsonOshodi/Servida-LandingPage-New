const express = require('express');
const { submitCleanerForm, newCleanerMessage } = require('../controllers/cleanerController');

const router = express.Router();

router.post('/submit', submitCleanerForm);
router.get('/welcome', newCleanerMessage);

module.exports = router;
