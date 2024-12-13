const express = require('express');
const {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} = require('../controllers/studentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/')
    .post(protect, addStudent)
    .get(protect, getStudents);

router.route('/:id')
    .get(protect, getStudentById)
    .put(protect, updateStudent)
    .delete(protect, deleteStudent);

module.exports = router;
