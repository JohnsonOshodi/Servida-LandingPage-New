const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    
    // Cleaner Form Data
    selectedTier: { type: String, enum: ['basic', 'deep'], required: true },
    frequency: { type: String, enum: ['onceAWeek', 'twiceAWeek', 'everyday'], required: true },
    rooms: {
      bedrooms: { type: Number, required: true },
    },
    extraStaff: { type: Number, default: 0 },
    hasRunningWater: { type: Boolean, required: true },

    // Cleaning Plan Data
    cleaningPlan: { type: String, enum: ['basic', 'deep'] },
    cleaningFrequency: { type: String, enum: ['onceAWeek', 'twiceAWeek', 'everyday'] },
    startDate: { type: Date },
    arrivalTime: { type: String, enum: ['morning', 'afternoon', 'evening'] },

    // Extra Info Data
    hasDependents: { type: Boolean },
    hasCleaningEquipment: { type: String, enum: ['Yes', 'No'] },
    contactPreference: { type: String, enum: ['Phone', 'Email'] },
    numCleaners: { type: Number, default: 1 },
    specialNote: { type: String },

    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
