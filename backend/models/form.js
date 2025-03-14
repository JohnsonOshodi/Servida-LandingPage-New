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
      bathrooms: { type: Number, required: true },
      kitchens: { type: Number, required: true },
      livingRooms: { type: Number, default: 0 },
    },
    extraStaff: { type: Number, default: 0 },
    hasRunningWater: { type: Boolean, required: true },

    // Cleaning Plan Data
    selectedPlan: { type: String, enum: ['Basic', 'Deep'], required: true },
    frequency: { type: String, enum: ['onceAWeek', 'twiceAWeek', 'monthly'], required: true },
    startDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },

    // Extra Info Data
    hasDependents: { type: Boolean, default: false },
    hasCleaningEquipment: { type: String, enum: ['Yes', 'No'] },
    contactPreference: { type: String, enum: ['Phone', 'Email'], required: true },
  },
  { timestamps: true }
);

const Form = mongoose.model('Form', formSchema);
module.exports = Form;

