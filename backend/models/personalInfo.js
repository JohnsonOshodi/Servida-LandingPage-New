const mongoose = require("mongoose");

const personalInfoSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    homeAddress: { type: String, required: true },
    landmark: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PersonalInfo", personalInfoSchema);
