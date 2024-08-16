const Politician = require('../models/Politician');

exports.addPolitician = async (req, res) => {
  try {
    const politician = new Politician(req.body);
    await politician.save();
    res.status(201).json({ message: 'Politician added successfully', politician });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add politician', error: err.message });
  }
};

exports.editPolitician = async (req, res) => {
  try {
    const politician = await Politician.findByIdAndUpdate(req.body.politician_id, req.body, { new: true });
    if (!politician) return res.status(404).json({ message: 'Politician not found' });
    res.json({ message: 'Politician updated successfully', politician });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update politician', error: err.message });
  }
};

exports.deletePolitician = async (req, res) => {
  try {
    const politician = await Politician.findByIdAndDelete(req.body.politician_id);
    if (!politician) return res.status(404).json({ message: 'Politician not found' });
    res.json({ message: 'Politician deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete politician', error: err.message });
  }
};

exports.getPoliticians = async (req, res) => {
  try {
    const politicians = await Politician.find();
    res.json(politicians);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve politicians', error: err.message });
  }
};
