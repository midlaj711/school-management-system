const mongoose = require('mongoose');

const feesHistorySchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    status: { type: String, enum: ['Paid', 'Pending'], required: true },
}, { timestamps: true });

module.exports = mongoose.model('FeesHistory', feesHistorySchema);
