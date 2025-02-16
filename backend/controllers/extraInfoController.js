const ExtraInfo = require('../models/ExtraInfo');


const calculateTotalPrice = (hasCleaningEquipment, numCleaners) => {
  let price = 1000; // base price
  if (hasCleaningEquipment === "Yes") {
    price += 500; // add extra charge if equipment is available
  }
  price += numCleaners * 200; // additional charge per cleaner
  return price;
};

// Controller to handle the form submission
const submitExtraInfo = async (req, res) => {
  try {
    const { hasDependents, hasCleaningEquipment, contactPreference, numCleaners, specialNote } = req.body;

    // Calculate the total price based on form data
    const totalPrice = calculateTotalPrice(hasCleaningEquipment, numCleaners);

    // Create a new ExtraInfo entry in the database
    const extraInfo = new ExtraInfo({
      hasDependents,
      hasCleaningEquipment,
      contactPreference,
      numCleaners,
      specialNote,
      totalPrice,
    });

    // Save the form data to the database
    await extraInfo.save();

    // Respond with the saved data
    res.status(201).json({ message: 'Extra Info submitted successfully', totalPrice });
  } catch (error) {
    console.error('Error submitting extra info:', error);
    res.status(500).json({ error: 'Server error, please try again later' });
  }
};

module.exports = { submitExtraInfo };
