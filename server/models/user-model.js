const mongoose = require('mongoose');
//import Schema class from mongoose
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        default: Date.now
    },
})
module.exports = mongoose.model('user',userSchema);