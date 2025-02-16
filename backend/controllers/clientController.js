const Client = require('../models/Client'); 
const { validationResult } = require('express-validator');

// Handle client data submission
exports.submitClientData = async (req, res, next) => {
  // Validate the incoming request data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure the fields from the request body
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    idCard,
    ninDocument,
    passportPhoto,
    driversLicense,
    intlPassport,
    reviews, 
  } = req.body;

  try {
    // Create a new client document
    const newClient = new Client({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      idCard,
      ninDocument,
      passportPhoto,
      driversLicense,
      intlPassport,
      reviews,
    });

    // Save the client document to the database
    await newClient.save();

    // Respond with a success message
    return res.status(201).json({
      message: 'Client data submitted successfully!',
      clientData: newClient,
    });
  } catch (error) {
    // Handle any errors and send the response
    return res.status(500).json({
      error: 'Server error while submitting client data. Please try again later.',
    });
  }
};
