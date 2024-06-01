const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({

})

// create Model
const Employee = new mongoose.model('Employee', EmployeeSchema)

module.exports = Employee