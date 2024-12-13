const express = require('express');
const {
    addFeesRecord,
    getFeesRecords,
} = require('../controllers/feesController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addFeesRecord)
    .get(protect, getFeesRecords);

module.exports = router;
