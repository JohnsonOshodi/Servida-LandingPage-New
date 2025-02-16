const mongoose = require('mongoose');

const aideSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true, lowercase: true },
    phoneNumber: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    idCard: { type: String, required: true },
    ninDocument: { type: String, required: true },
    passportPhoto: { type: String, required: true },
    driversLicense: { type: String, default: null },
    intlPassport: { type: String, default: null },
    guarantor: {
      name: { type: String, required: true, trim: true },
      surname: { type: String, required: true, trim: true },
      phoneNumber: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
      ninDocument: { type: String, required: true },
      driversLicense: { type: String, default: null },
      intlPassport: { type: String, default: null },
    },
    bio: { type: String, default: '', trim: true }, // Aide's personal bio
    experience: { type: Number, default: 0 }, // Years of experience
    servicesOffered: { type: [String], default: [] }, // List of services the aide can perform
    status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
    role: { type: String, default: 'aide' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Aide', aideSchema);
