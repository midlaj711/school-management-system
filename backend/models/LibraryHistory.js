const mongoose = require('mongoose');

const libraryHistorySchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    bookTitle: { type: String, required: true },
    issueDate: { type: Date, required: true },
    returnDate: { type: Date },
    status: { type: String, enum: ['Issued', 'Returned'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('LibraryHistory', libraryHistorySchema);
