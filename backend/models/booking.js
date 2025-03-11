const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  selectedTier: { type: String, required: true },
  frequency: { type: String, required: true },
  rooms: {
    bedrooms: { type: Number, default: 1 },
    sittingRooms: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },
    kitchens: { type: Number, default: 1 },
    floors: { type: Number, default: 1 },
    balconies: { type: Number, default: 1 },
    stores: { type: Number, default: 1 },
  },
  extraStaff: { type: Number, default: 0 },
  hasRunningWater: { type: Boolean, default: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
