const express = require('express');
const router = express.Router();
const politicianController = require('../controllers/politicianController');
const authMiddleware = require('../middlewares/authMiddleware');

// Politician profile routes
router.post('/add_politician', authMiddleware, politicianController.addPolitician);
router.post('/edit_politician', authMiddleware, politicianController.editPolitician);
router.post('/delete_politician', authMiddleware, politicianController.deletePolitician);
router.get('/get_politicians', authMiddleware, politicianController.getPoliticians);

module.exports = router;
