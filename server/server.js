const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const studentRouter = require('./routes/studentsRouter');
const userRouter = require('./routes/usersRouter');
const db = require('./DB');
const path = require('path');
const passport = require("passport");
const passportFunc = require("./config/passport");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.on('error', () => { console.log("connection error") });

app.listen(PORT, () => {
    console.log(`server is up on port: ${PORT}`);
})
// Passport middleware
app.use(passport.initialize());
// Routes
app.use('/api/users', userRouter);
app.use('/api/students', studentRouter);
//*****************************************************************/
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}
//*******************************************************************/
