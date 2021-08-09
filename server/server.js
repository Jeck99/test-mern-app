const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require("cors");
const studentRouter = require('./routes/studentsRouter');
const db = require('./DB');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.on('error',()=>{console.log("connection error")});

app.listen(PORT, () => {
    console.log(`server is up on port: ${PORT}`);
})

app.use('/api/students', studentRouter);
//*****************************************************************/
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
//*******************************************************************/
