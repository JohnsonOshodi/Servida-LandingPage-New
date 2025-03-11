const mongoose = require('mongoose');

const cleanerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  homeAddress: { type: String, required: true },
  landmark: { type: String, required: true },
  cleaningPlan: { type: String, required: false, default: "" },
  houseDescription: { type: String, required: false, default: "" },
  extraInfo: { type: String, required: false, default: "" },
  howDidYouHear: { type: String, required: false, default: "" },
  createdAt: { type: Date, default: Date.now, immutable: true }
});

module.exports = mongoose.model('Cleaner', cleanerSchema);
