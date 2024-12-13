const express = require('express');
const {
    addLibraryTransaction,
    getLibraryTransactions,
} = require('../controllers/libraryController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addLibraryTransaction)
    .get(protect, getLibraryTransactions);

module.exports = router;
