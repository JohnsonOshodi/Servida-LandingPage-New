const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    idCard: { type: String, required: true },
    ninDocument: { type: String, required: true },
    passportPhoto: { type: String, required: true },
    driversLicense: { type: String },
    intlPassport: { type: String },
    role: { type: String, default: 'client' },
    reviews: [
      {
        serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
        reviewText: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Client', clientSchema);
