const Feedback = require('../models/Feedback');

exports.submitIssue = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Issue submitted successfully', feedback });
  } catch (err) {
    res.status(400).json({ message: 'Failed to submit issue', error: err.message });
  }
};

exports.getIssues = async (req, res) => {
  try {
    const issues = await Feedback.find();
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve issues', error: err.message });
  }
};
