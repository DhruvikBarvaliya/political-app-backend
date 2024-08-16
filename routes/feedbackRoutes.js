const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middlewares/authMiddleware');

// Feedback and issues routes
router.post('/submit_issue', feedbackController.submitIssue);
router.get('/issues', authMiddleware, feedbackController.getIssues);

module.exports = router;
