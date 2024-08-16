const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middlewares/authMiddleware');

// News management routes
router.post('/add_news', authMiddleware, newsController.addNews);
router.post('/edit_news', authMiddleware, newsController.editNews);
router.post('/delete_news', authMiddleware, newsController.deleteNews);

module.exports = router;
