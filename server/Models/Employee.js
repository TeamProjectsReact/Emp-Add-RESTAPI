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
    }
})

// create Model
const Employee = new mongoose.model('Employee', EmployeeSchema)

module.exports = Employee