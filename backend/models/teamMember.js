const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  photo: { type: String, required: true }, // Store image URLs
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
