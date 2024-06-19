const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    EmpID: {
        type: String,
        required: true,
        unique:true,
    },
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
    Department: {
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
    },
    emgcontact: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    civilstatus: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    relig: {
        type: String,
        required: true,
    },
    create_at: {
        type: Date,
        default: Date.now,
    }
})

// create Model
const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee