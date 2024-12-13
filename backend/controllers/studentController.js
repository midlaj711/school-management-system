const Student = require('../models/Student');

// Add a new student
const addStudent = async (req, res) => {
    const { name, rollNumber, class: studentClass, section, dob, contact } = req.body;
    try {
        const student = await Student.create({
            name,
            rollNumber,
            class: studentClass,
            section,
            dob,
            contact,
        });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update student details
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addStudent, getStudents, getStudentById, updateStudent, deleteStudent };
