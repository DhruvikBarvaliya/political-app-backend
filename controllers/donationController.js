const Donation = require('../models/Donation');

exports.addDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ message: 'Donation added successfully', donation });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add donation', error: err.message });
  }
};
