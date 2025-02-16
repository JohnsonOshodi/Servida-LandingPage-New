const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  bgColor: { type: String, required: true },
  hoverBgColor: { type: String, required: true },
  buttonColor: { type: String, required: true },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
