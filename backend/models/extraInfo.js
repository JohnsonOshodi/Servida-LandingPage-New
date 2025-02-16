const mongoose = require('mongoose');


const extraInfoSchema = new mongoose.Schema({
  hasDependents: { type: Boolean, required: true },
  hasCleaningEquipment: { type: String, required: true },
  contactPreference: { type: String, required: true },
  numCleaners: { type: Number, required: true },
  specialNote: { type: String, required: false },
  totalPrice: { type: Number, required: true },
}, { timestamps: true });

const ExtraInfo = mongoose.model('ExtraInfo', extraInfoSchema);

module.exports = ExtraInfo;
