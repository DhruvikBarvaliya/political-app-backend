const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  method: { type: String, required: true },
  reference: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', DonationSchema);
