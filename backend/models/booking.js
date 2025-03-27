const mongoose = require("mongoose");

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

  // New fields for customer details
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  cleaningPlan: { type: String, required: true },
  extraInfo: { type: String, default: "" },

  // Additional details
  hasCleaningEquipment: { type: Boolean, default: false },
  contactPreference: { type: String, default: "Phone" }, // Can be Phone, Email, or WhatsApp
  heardAboutUs: { type: [String], default: [] }, // Array of sources (Google, Instagram, etc.)

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);

