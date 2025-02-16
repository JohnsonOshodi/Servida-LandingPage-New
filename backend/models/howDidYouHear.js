const mongoose = require('mongoose');

const howDidYouHearSchema = new mongoose.Schema({
  method: {
    type: String,
    required: true,
    enum: ['AltSchool', 'WhatsApp', 'LinkedIn', 'Google Search'],
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('HowDidYouHear', howDidYouHearSchema);
