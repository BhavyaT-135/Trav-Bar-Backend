const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')

dotenv.config();
app.use(cors())
app.use(express.json());

app.use("/api/v1/users", userRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`);
});