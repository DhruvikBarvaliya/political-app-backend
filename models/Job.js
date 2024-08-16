const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  area: { type: String, required: true },
  salary: { type: Number, required: true },
  applicationDeadline: { type: Date, required: true },
  contactInfo: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', JobSchema);
