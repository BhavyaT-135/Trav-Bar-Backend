const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const connectDB = require('./db/connect')

dotenv.config();
app.use(cors())
app.use(express.json());

mongoose.set('strictQuery', false)

app.use("/api/v1/users", userRoute)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT || 5000, () => console.log(`Server started on port ${process.env.PORT || 5000}`))
    } catch (error) {
        console.log(error)
    }
}

start();