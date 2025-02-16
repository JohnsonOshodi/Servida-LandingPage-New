const express = require('express');
const { submitClientData } = require('../controllers/clientController');
const { validateClientData } = require('../middleware/clientMiddleware');

const router = express.Router();

// POST route to submit client data
router.post('/submit', validateClientData, submitClientData);

module.exports = router;
