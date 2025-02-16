const HowDidYouHear = require('../models/howDidYouHearModel');

// Save user response
const saveResponse = async (req, res) => {
  try {
    const { method, totalPrice } = req.body;

    if (!method || !totalPrice) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newResponse = await HowDidYouHear.create({ method, totalPrice });

    res.status(201).json({
      message: 'Response saved successfully',
      data: newResponse,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch responses (for admin panel or stats)
const getResponses = async (req, res) => {
  try {
    const responses = await HowDidYouHear.find();
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveResponse, getResponses };
