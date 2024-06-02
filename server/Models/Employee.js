const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    initial: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    designation: {
        type: String,
        required: true,
    },
    nic: {
        type: String,
        required: true,
        unique:true,
    },
    dob: {
        type: Date,
        required: true,
    }

})

// create Model
const Employee = new mongoose.model('Employee', EmployeeSchema)

module.exports = Employee