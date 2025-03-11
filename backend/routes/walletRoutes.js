const express = require('express');
const router = express.Router();
const { loadFunds } = require('../controllers/walletController');
const { protect } = require('../middleware/authMiddleware');

// POST: Load funds into a user's wallet (protected route)
router.post('/load', protect, loadFunds);

module.exports = router;
