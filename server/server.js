const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require("cors");
const studentRouter = require('./routes/studentsRouter');
const db = require('./DB');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db.on('error',()=>{console.log("connection error")});

app.listen(PORT, () => {
    console.log(`server is up on port: ${PORT}`);
})
app.get('/', (req, res) => {
    res.send("success");
})
app.use('/students', studentRouter);
