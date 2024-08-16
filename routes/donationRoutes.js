const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const authMiddleware = require('../middlewares/authMiddleware');

// Donation management routes
router.post('/add_donation', authMiddleware, donationController.addDonation);

module.exports = router;
