const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const serviceMiddleware = require('../middleware/serviceMiddleware');

// Route to get all services
router.get('/', serviceController.getAllServices);

// Route to create a new service
router.post('/', serviceMiddleware.validateServiceData, serviceController.createService);

module.exports = router;

