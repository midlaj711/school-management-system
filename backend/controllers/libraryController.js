const LibraryHistory = require('../models/LibraryHistory');

// Add a library transaction
const addLibraryTransaction = async (req, res) => {
    const { studentId, bookTitle, issueDate, returnDate, status } = req.body;
    try {
        const transaction = await LibraryHistory.create({
            studentId,
            bookTitle,
            issueDate,
            returnDate,
            status,
        });
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all library transactions
const getLibraryTransactions = async (req, res) => {
    try {
        const transactions = await LibraryHistory.find().populate('studentId', 'name rollNumber');
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addLibraryTransaction, getLibraryTransactions };
