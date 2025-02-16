const Pricing = require('../models/Pricing');

// Get pricing details
const getPricingDetails = async (req, res) => {
  try {
    const pricing = await Pricing.find();
    res.status(200).json(pricing);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Calculate estimate (placeholder implementation)
const calculateEstimate = async (req, res) => {
  try {
    const { serviceType, quantity } = req.body;
    const estimate = quantity * 100; // Example calculation
    res.status(200).json({ estimate });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// Get total price 
const getTotalPrice = async (req, res) => {
  try {
    const { serviceType, quantity = 1, frequency, extraServices = [] } = req.query;

    const service = await Pricing.findOne({ service: serviceType });
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    let basePrice;
    if (frequency) {
      const frequencyOption = service.frequencyOptions.find(opt => opt.frequency === frequency);
      if (frequencyOption) {
        basePrice = frequencyOption.basePrice;
      } else {
        return res.status(400).json({ error: `Frequency option '${frequency}' not available` });
      }
    } else {
      basePrice = service.price;
    }

    let extraCharges = 0;
    if (service.extraCharges) {
      extraCharges += service.extraCharges.extraRoom || 0;
      extraCharges += service.extraCharges.extraStaff || 0;
      extraCharges += service.extraCharges.noRunningWater || 0;
    }

    if (extraServices.length > 0 && service.factors?.additionalServices) {
      const validServices = service.factors.additionalServices.filter(serviceName =>
        extraServices.includes(serviceName)
      );
      extraCharges += validServices.length * 50;
    }

    const totalPrice = (basePrice + extraCharges) * quantity;

    res.status(200).json({ 
      totalPrice, 
      details: { basePrice, extraCharges, quantity, frequency, extraServices } 
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

module.exports = { getPricingDetails, calculateEstimate, getTotalPrice };
