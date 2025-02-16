const LandingPageData = require('../models/LandingPageData');

// Get all landing page data
const getLandingPageData = async (req, res) => {
  try {
    const data = await LandingPageData.findOne(); // Assuming a single document for simplicity
    if (!data) return res.status(404).json({ message: 'Landing page data not found' });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getLandingPageData };
