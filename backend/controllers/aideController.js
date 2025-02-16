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
    res.status(500).json({ message: 'Failed to register aide', error: error.message });
  }
};

// Fetch all aides
exports.getAllAides = async (req, res) => {
  try {
    const aides = await Aide.find();
    res.status(200).json(aides);
  } catch (error) {
    console.error('Error fetching aides:', error);
    res.status(500).json({ message: 'Failed to fetch aides', error: error.message });
  }
};

// Update an aide
exports.updateAide = async (req, res) => {
  try {
    const aideId = req.params.id;
    const updates = req.body;

    const updatedAide = await Aide.findByIdAndUpdate(aideId, updates, { new: true });

    if (!updatedAide) {
      return res.status(404).json({ message: 'Aide not found' });
    }

    res.status(200).json({ message: 'Aide updated successfully', aide: updatedAide });
  } catch (error) {
    console.error('Error updating aide:', error);
    res.status(500).json({ message: 'Failed to update aide', error: error.message });
  }
};

// Delete an aide
exports.deleteAide = async (req, res) => {
  try {
    const aideId = req.params.id;

    const deletedAide = await Aide.findByIdAndDelete(aideId);

    if (!deletedAide) {
      return res.status(404).json({ message: 'Aide not found' });
    }

    res.status(200).json({ message: 'Aide deleted successfully' });
  } catch (error) {
    console.error('Error deleting aide:', error);
    res.status(500).json({ message: 'Failed to delete aide', error: error.message });
  }
};
