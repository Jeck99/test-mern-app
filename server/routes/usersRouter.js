const userRouter = require('express').Router() //import from Router from express
const userCtrl = require('../controllers/usersCtrl') //import functions from user-ctrl

userRouter.post('/register', userCtrl.register)           //save new user
userRouter.post('/login', userCtrl.login)           //save new user

module.exports = userRouter; //exporting userRouter module
