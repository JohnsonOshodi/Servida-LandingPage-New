const mongoose = require('mongoose');

// Define schema for User
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'aide', 'client'],
      default: 'client',
    },
    isApproved: { type: Boolean, default: false }, // For admin to approve aide
  },
  { timestamps: true }
);


module.exports = mongoose.models.User || mongoose.model('User', userSchema);

