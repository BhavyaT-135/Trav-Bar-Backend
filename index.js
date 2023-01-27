const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')

dotenv.config();
app.use(cors())
app.use(express.json());

app.listen(5000, () => {
    console.log('Server started on port 5000');
});