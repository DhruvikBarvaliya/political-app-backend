const News = require('../models/News');

exports.addNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json({ message: 'News added successfully', news });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add news', error: err.message });
  }
};

exports.editNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.body.news_id, req.body, { new: true });
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json({ message: 'News updated successfully', news });
  } catch (err) {
    res.status(400).json({ message: 'Failed to update news', error: err.message });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.body.news_id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.json({ message: 'News deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Failed to delete news', error: err.message });
  }
};
