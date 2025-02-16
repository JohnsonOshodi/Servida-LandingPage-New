const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    aideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Aide', required: true },
    serviceType: { type: String, required: true }, // Example: 'cleaning', 'errand-running'
    status: { type: String, default: 'pending' }, // 'pending', 'in-progress', 'completed', 'canceled'
    paymentStatus: { type: String, default: 'unpaid' }, // 'paid', 'unpaid'
    totalCost: { type: Number, required: true },
    dateScheduled: { type: Date, required: true },
    clientReview: {
      reviewText: { type: String },
      rating: { type: Number, min: 1, max: 5 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
