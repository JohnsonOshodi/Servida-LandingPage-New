const express = require('express');
const router = express.Router();
const { 
  submitForm, 
  submitCleanerForm, 
  submitCleaningPlanForm, 
  submitExtraInfo 
} = require('../controllers/formController');

// POST: Submit forms and send emails
router.post('/submit', submitForm);
router.post('/cleaner-submit', submitCleanerForm);
router.post('/cleaning-plan-submit', submitCleaningPlanForm); 
router.post('/extra-info-submit', submitExtraInfo);

module.exports = router;