const mongoose = require("mongoose");

const HouseDescriptionSchema = new mongoose.Schema({
  sittingRooms: { type: Number, required: true },
  rooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  kitchens: { type: Number, required: true },
  floors: { type: Number, required: true },
  balconies: { type: Number, required: true },
  stores: { type: Number, required: true },
  runningWater: { type: Boolean, required: true },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("HouseDescription", HouseDescriptionSchema);
