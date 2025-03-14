const express = require('express');
const router = express.Router();
const { sendFormEmail, sendAutoResponse } = require('../utils/emailHandler');

// Helper function to handle form submissions
const handleFormSubmission = async (req, res, formName) => {
  try {
    const formData = req.body;
    
    // Ensure the request body contains data
    if (!formData || Object.keys(formData).length === 0) {
      return res.status(400).send(`Error: ${formName} submission is empty.`);
    }

    await sendFormEmail(formData); // Send form data to servida@servida.net

    // Only send auto-response if the user provided an email
    if (formData.email) {
      await sendAutoResponse(formData.email);
    }

    console.log(`${formName} submitted successfully.`);
    res.status(200).send(`${formName} submitted successfully and email sent.`);
  } catch (error) {
    console.error(`Error in ${formName} submission:`, error);
    res.status(500).send(`Error submitting ${formName}.`);
  }
};

// Routes for various forms
router.post('/submit', (req, res) => handleFormSubmission(req, res, 'General Form'));
router.post('/cleaner-submit', (req, res) => handleFormSubmission(req, res, 'Cleaner Form'));
router.post('/cleaning-plan-submit', (req, res) => handleFormSubmission(req, res, 'Cleaning Plan Form'));
router.post('/extra-info-submit', (req, res) => handleFormSubmission(req, res, 'Extra Info Form'));
router.post('/personal-info-submit', (req, res) => handleFormSubmission(req, res, 'Personal Info Form'));
router.post('/house-description-submit', (req, res) => handleFormSubmission(req, res, 'House Description Form'));
router.post('/how-did-you-hear-submit', (req, res) => handleFormSubmission(req, res, 'How Did You Hear Form'));
router.post('/pricing-submit', (req, res) => handleFormSubmission(req, res, 'Pricing Form'));
router.post('/services-submit', (req, res) => handleFormSubmission(req, res, 'Services Form'));
router.post('/book-cleaning-submit', (req, res) => handleFormSubmission(req, res, 'Book Cleaning Form'));

module.exports = router;

