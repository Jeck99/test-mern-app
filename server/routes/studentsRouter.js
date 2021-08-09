const express = require('express')
const studentsRouter = express.Router();
const studentsCtrl = require('../controllers/studentsCtrl')

studentsRouter.get('/', studentsCtrl.getAllStudents);
studentsRouter.get('/student/:id', studentsCtrl.getStudentById);
studentsRouter.post('/',studentsCtrl.createNewStudent);
studentsRouter.delete('/:id', studentsCtrl.deleteStudent);
studentsRouter.put('/updateOne', studentsCtrl.updateStudent);

module.exports = studentsRouter;