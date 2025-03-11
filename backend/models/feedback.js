const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    toggles: {
      whatsapp: { type: Boolean, default: false },
      linkedin: { type: Boolean, default: false },
      google: { type: Boolean, default: false },
      instagram: { type: Boolean, default: false },
      facebook: { type: Boolean, default: false },
      wordOfMouth: { type: Boolean, default: false },
      altschool: { type: Boolean, default: false },
    },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feedback', feedbackSchema);


