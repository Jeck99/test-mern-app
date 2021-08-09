const mongoose = require('mongoose');
//import Schema class from mongoose
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    },
})
module.exports = mongoose.model('student',studentSchema);