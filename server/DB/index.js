const mongoose = require('mongoose');
const DBConcoctionString = process.env.CONNECTION_URL;
mongoose.connect(DBConcoctionString,       //creating the connection to cinema db
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(error => {                            //error handling
        console.error('Connection error', error.message)
    });
    module.exports = mongoose.connection;// exporting the connection