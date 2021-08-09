const studentModel = require('../models/student-model');

async function getAllStudents(req, res) {
    try {
        await studentModel.find({}, (error, result) => {
            if (error) throw error;
            res.json({ massage: "success", data: result })
        })
    } catch (err) {
        res.json({ massage: "database problem", error: err })
    }
}
async function createNewStudent(req, res) {
    try {
        await studentModel.insertMany(req.body.student, (error, result) => {
            if (error) throw error;
            res.json({ massage: "success, added successfully", data: req.body.student })
        })
    } catch (err) {
        res.json({ massage: "database problem", error: err })
    }
}
async function getStudentById(req, res) {
    try {
        await studentModel.findById(req.params.id, (error, result) => {
            if (error) throw error;
            res.json({ massage: "success", data: result })
        })
    } catch (err) {
        res.json({ massage: "database problem", error: err })
    }
}
async function deleteStudent(req, res) {
    try {
        await studentModel.findByIdAndDelete(req.params.id, (error, result) => {
            if (error) throw error;
            res.json({ massage: "success, deleted successfully", data: req.body.student })
        })
    } catch (err) {
        res.json({ massage: "database problem", error: err })
    }
}
async function updateStudent(req, res) {
    try {
        await studentModel.findByIdAndUpdate(req.body.student.id, req.body.student, (error, result) => {
            if (error) throw error;
            res.json({ massage: `${req.body.student.name} success updated successfully` })
        })
    } catch (err) {
        res.json({ massage: "database problem", error: err })
    }
}
module.exports =
{
    getAllStudents,
    createNewStudent,
    deleteStudent,
    getStudentById,
    updateStudent
};
