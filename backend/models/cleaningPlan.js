const mongoose = require('mongoose');

const cleaningPlanSchema = new mongoose.Schema({
  cleaningPlan: { type: String, required: true },
  cleaningFrequency: { type: String, required: true },
  startDate: { type: Date, required: true },
  arrivalTime: { type: String, required: true },
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

const CleaningPlan = mongoose.model('CleaningPlan', cleaningPlanSchema);
module.exports = CleaningPlan;