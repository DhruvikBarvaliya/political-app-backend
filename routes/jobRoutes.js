const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');

// Job management routes
router.post('/add_job', authMiddleware, jobController.addJob);
router.post('/edit_job', authMiddleware, jobController.editJob);
router.post('/delete_job', authMiddleware, jobController.deleteJob);

module.exports = router;
