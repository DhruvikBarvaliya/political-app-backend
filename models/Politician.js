const mongoose = require('mongoose');

const PoliticianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  district: { type: String, required: true },
  area: { type: String, required: true },
  state: { type: String, required: true },
  legislativeArea: { type: String, required: true },
  party: { type: String, required: true },
  partyLogo: { type: String },
  dateOfBirth: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Politician', PoliticianSchema);
