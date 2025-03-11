const CleaningPlan = require('../models/cleaningPlan');

// Create a new cleaning plan
const createCleaningPlan = async (req, res) => {
  try {
    const { cleaningPlan, cleaningFrequency, startDate, arrivalTime, totalPrice } = req.body;

    if (!cleaningPlan || !cleaningFrequency || !startDate || !arrivalTime) {
      return res.status(400).json({ error: 'All fields are required: cleaningPlan, cleaningFrequency, startDate, and arrivalTime.' });
    }

    const newPlan = new CleaningPlan({
      cleaningPlan,
      cleaningFrequency,
      startDate,
      arrivalTime,
      totalPrice: totalPrice || 0,
    });

    await newPlan.save();
    res.status(201).json({ message: 'Cleaning plan created successfully!', cleaningPlan: newPlan });
  } catch (error) {
    console.error('Error creating cleaning plan:', error);
    res.status(500).json({ error: 'Server error while creating cleaning plan.', details: error.message });
  }
};

// Get all cleaning plans
const getAllCleaningPlans = async (req, res) => {
  try {
    const plans = await CleaningPlan.find();
    res.status(200).json(plans);
  } catch (error) {
    console.error('Error fetching cleaning plans:', error);
    res.status(500).json({ error: 'Failed to fetch cleaning plans.', details: error.message });
  }
};

// Get a single cleaning plan by ID
const getCleaningPlanById = async (req, res) => {
  try {
    const plan = await CleaningPlan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ error: 'Cleaning plan not found.' });
    }
    res.status(200).json(plan);
  } catch (error) {
    console.error('Error fetching cleaning plan:', error);
    res.status(500).json({ error: 'Failed to fetch cleaning plan.', details: error.message });
  }
};

// Update a cleaning plan
const updateCleaningPlan = async (req, res) => {
  try {
    const updatedPlan = await CleaningPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedPlan) {
      return res.status(404).json({ error: 'Cleaning plan not found.' });
    }

    res.status(200).json({ message: 'Cleaning plan updated successfully!', cleaningPlan: updatedPlan });
  } catch (error) {
    console.error('Error updating cleaning plan:', error);
    res.status(500).json({ error: 'Failed to update cleaning plan.', details: error.message });
  }
};

// Delete a cleaning plan
const deleteCleaningPlan = async (req, res) => {
  try {
    const deletedPlan = await CleaningPlan.findByIdAndDelete(req.params.id);

    if (!deletedPlan) {
      return res.status(404).json({ error: 'Cleaning plan not found.' });
    }

    res.status(200).json({ message: 'Cleaning plan deleted successfully!' });
  } catch (error) {
    console.error('Error deleting cleaning plan:', error);
    res.status(500).json({ error: 'Failed to delete cleaning plan.', details: error.message });
  }
};

module.exports = {
  createCleaningPlan,
  getAllCleaningPlans,
  getCleaningPlanById,
  updateCleaningPlan,
  deleteCleaningPlan,
};
