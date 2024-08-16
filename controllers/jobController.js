const Job = require('../models/Job');

exports.addJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json({ message: 'Job added successfully', job });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add job', error: err.message });
  }
};

exports.editJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.body.job_id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job updated successfully', job });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update job', error: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.body.job_id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete job', error: err.message });
  }
};
