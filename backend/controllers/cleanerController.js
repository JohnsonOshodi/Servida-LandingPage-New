const Cleaner = require('../models/cleaner');

// Handle form submission
exports.submitCleanerForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, address, experience, skills } = req.body;

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !address) {
      return res.status(400).json({ error: 'Full name, email, phone number, and address are required.' });
    }

    const newCleaner = new Cleaner({
      fullName,
      email,
      phoneNumber,
      address,
      experience: experience || 'Not specified', // Default value if not provided
      skills: skills || [], // Default to an empty array
    });

    await newCleaner.save();
    res.status(201).json({ message: 'Cleaner form submitted successfully!', cleaner: newCleaner });
  } catch (error) {
    console.error('Error submitting cleaner form:', error);
    res.status(500).json({ error: 'Error submitting form', details: error.message });
  }
};

// Welcome message for new cleaners
exports.newCleanerMessage = (req, res) => {
  res.status(200).json({
    message:
      'Welcome to Servida! Please visit our head office at Diya Street, Lagos, or contact 07064863860 to complete your verification and start receiving jobs.',
  });
};
