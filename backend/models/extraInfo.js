const mongoose = require("mongoose");

const extraInfoSchema = new mongoose.Schema(
  {
    email: { type: String, required: true }, // Add this line
    hasDependents: { type: Boolean, required: true },
    hasCleaningEquipment: { type: String, required: true },
    contactPreference: { type: String, required: true },
    numCleaners: { type: Number, required: true, min: 0 },
    specialNote: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExtraInfo", extraInfoSchema);


