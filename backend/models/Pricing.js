const mongoose = require('mongoose');

// Define the Pricing schema
const pricingSchema = new mongoose.Schema({
  plan: { 
    type: String, 
    required: true 
  },
  priceRange: { 
    min: { type: Number, required: true }, 
    max: { type: Number, required: true } 
  },
  frequencyOptions: [
    {
      frequency: { type: String, required: true }, // e.g., weekly, bi-weekly, monthly
      basePrice: { type: Number, required: true }
    }
  ],
  extraCharges: {
    extraRoom: { type: Number, default: 0 }, // Default to 0 if not specified
    extraStaff: { type: Number, default: 0 },
    noRunningWater: { type: Number, default: 0 }
  },
  factors: {
    additionalServices: [{ type: String }] // Array of additional service names
  },
  service: { 
    type: String, 
    required: true 
  }, // Added from your original model for clear identification
  price: { 
    type: Number, 
    required: true 
  } // Added from your original model for compatibility
});

// Export the Pricing model
module.exports = mongoose.model('Pricing', pricingSchema);
