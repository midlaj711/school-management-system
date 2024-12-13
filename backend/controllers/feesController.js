const FeesHistory = require('../models/FeesHistory');

// Add a fees record
const addFeesRecord = async (req, res) => {
    const { studentId, amount, paymentDate, status } = req.body;
    try {
        const fees = await FeesHistory.create({
            studentId,
            amount,
            paymentDate,
            status,
        });
        res.status(201).json(fees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all fees records
const getFeesRecords = async (req, res) => {
    try {
        const feesRecords = await FeesHistory.find().populate('studentId', 'name rollNumber');
        res.status(200).json(feesRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addFeesRecord, getFeesRecords };
