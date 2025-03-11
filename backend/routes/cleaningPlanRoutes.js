const express = require('express');
const { createCleaningPlan } = require('../controllers/cleaningPlanController');
const router = express.Router();

router.post('/create-plan', createCleaningPlan);

module.exports = router;
