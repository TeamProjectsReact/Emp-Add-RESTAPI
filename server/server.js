const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 

// define Routes
const AuthRoute = require('./Routes/authRoute')
const EmployeeRoute = require('./Routes/EmployeeRoute')

// app

const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())


// all routes
app.use('/auth', AuthRoute);
app.use('/Employee', EmployeeRoute);


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})