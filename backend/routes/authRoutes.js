const express = require('express');
const { signup, login, getUsers } = require('../controllers/authController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/', protect, adminOnly, getUsers);

module.exports = router;
