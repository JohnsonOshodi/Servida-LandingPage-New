const mongoose = require('mongoose');

const animationSchema = new mongoose.Schema({
  deviceType: { type: String, required: true, unique: true }, // e.g., "desktop", "tablet", "mobile"
  assetPath: { type: String, required: true }, // Path to the asset
  animationEffect: { type: String, default: '' }, // e.g., "zoom-in", "fade-up"
});

module.exports = mongoose.model('Animation', animationSchema);
