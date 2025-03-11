const express = require('express');
const { getPricingDetails, calculateEstimate, getTotalPrice } = require('../controllers/pricingController');

const router = express.Router();

// Fetch pricing details
router.get('/', getPricingDetails);

// Calculate an estimate based on input
router.post('/estimate', calculateEstimate);

// Fetch total price based on serviceType, frequency, etc.
router.get('/total-price', getTotalPrice);

module.exports = router;
