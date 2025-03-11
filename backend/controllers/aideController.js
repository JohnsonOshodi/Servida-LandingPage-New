const Aide = require('../models/aide');

// Aide Signup
exports.signupAide = async (req, res) => {
  try {
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
      guarantorName,
      guarantorSurname,
      guarantorPhoneNumber,
      guarantorAddress,
      guarantorNinDocument,
      guarantorDriversLicense,
      guarantorIntlPassport,
      bio,
      experience,
      servicesOffered,
    } = req.body;

    // Check if email already exists
    const existingAide = await Aide.findOne({ email });
    if (existingAide) {
      return res.status(400).json({ error: 'Aide with this email already exists.' });
    }

    // Ensure required fields are present
    if (!firstName || !lastName || !email || !phoneNumber) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newAide = new Aide({
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
      guarantor: {
        name: guarantorName,
        surname: guarantorSurname,
        phoneNumber: guarantorPhoneNumber,
        address: guarantorAddress,
        ninDocument: guarantorNinDocument,
        driversLicense: guarantorDriversLicense,
        intlPassport: guarantorIntlPassport,
      },
      bio,
      experience,
      servicesOffered,
    });

    await newAide.save();
    res.status(201).json({ message: 'Aide registered successfully', aide: newAide });

  } catch (error) {
    console.error('Error signing up aide:', error);
    res.status(500).json({ error: 'Failed to register aide. Please try again later.' });
  }
};

// Fetch all aides
exports.getAllAides = async (req, res) => {
  try {
    const aides = await Aide.find();
    res.status(200).json({
      message: 'Aides retrieved successfully',
      count: aides.length,
      aides,
    });

  } catch (error) {
    console.error('Error fetching aides:', error);
    res.status(500).json({ error: 'Failed to fetch aides. Please try again later.' });
  }
};

// Update an aide
exports.updateAide = async (req, res) => {
  try {
    const aideId = req.params.id;
    const updates = req.body;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No update data provided.' });
    }

    const updatedAide = await Aide.findByIdAndUpdate(aideId, updates, { new: true });

    if (!updatedAide) {
      return res.status(404).json({ error: 'Aide not found' });
    }

    res.status(200).json({ message: 'Aide updated successfully', aide: updatedAide });

  } catch (error) {
    console.error('Error updating aide:', error);
    res.status(500).json({ error: 'Failed to update aide. Please try again later.' });
  }
};

// Delete an aide
exports.deleteAide = async (req, res) => {
  try {
    const aideId = req.params.id;
    const deletedAide = await Aide.findByIdAndDelete(aideId);

    if (!deletedAide) {
      return res.status(404).json({ error: 'Aide not found' });
    }

    res.status(200).json({ message: 'Aide deleted successfully', aide: deletedAide });

  } catch (error) {
    console.error('Error deleting aide:', error);
    res.status(500).json({ error: 'Failed to delete aide. Please try again later.' });
  }
};
