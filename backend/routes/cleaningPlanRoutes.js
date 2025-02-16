const express = require('express');
const { createCleaningPlan } = require('../controllers/cleaningPlanController');
const router = express.Router();

// Route to create a cleaning plan
router.post('/create-plan', createCleaningPlan);

module.exports = router;
