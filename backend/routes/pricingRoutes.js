const express = require('express');
const { getPricingDetails, calculateEstimate, getTotalPrice } = require('../controllers/pricingController'); // Import all functions from 'pricingController'

const router = express.Router();

// Routes
router.get('/', getPricingDetails); // Fetch pricing details
router.post('/estimate', calculateEstimate); // Calculate an estimate based on input
router.get('/total-price', getTotalPrice); // Fetch total price based on serviceType, frequency, etc.

module.exports = router;
