const express = require('express');
const router = express.Router();
const { createFeedback, getAllFeedback } = require('../controllers/feedbackController'); // Updated to match the correct export

router.post('/', createFeedback);
router.get('/', getAllFeedback); // Updated to use the correct function

module.exports = router;
