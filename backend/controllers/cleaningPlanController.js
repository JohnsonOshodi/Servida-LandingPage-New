const CleaningPlan = require('../models/CleaningPlan');

// Controller function to handle Cleaning Plan submission
const createCleaningPlan = async (req, res) => {
  try {
    const { cleaningPlan, cleaningFrequency, startDate, arrivalTime, totalPrice } = req.body;

    // Create a new cleaning plan entry in the database
    const newPlan = new CleaningPlan({
      cleaningPlan,
      cleaningFrequency,
      startDate,
      arrivalTime,
      totalPrice
    });

    await newPlan.save();
    res.status(201).json({
      message: "Cleaning plan created successfully",
      data: newPlan
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createCleaningPlan
};
