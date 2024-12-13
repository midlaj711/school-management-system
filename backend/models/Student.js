const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNumber: { type: String, unique: true, required: true },
    class: { type: String, required: true },
    section: { type: String, required: true },
    dob: { type: Date, required: true },
    contact: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
