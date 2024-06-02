const Employee = require('../Models/Employee')

// define Controller

const EmployeeController = {
    AddEmp: async (req, res) => {
        const {
            empID, 
            empEmail, 
            Initials, 
            Surname, 
            Phone, 
            NIC, 
            Address, 
            Category, 
            dob, 
            emgContact, 
            Type, 
            CivilState, 
            Gender, 
            Religion
        } = req.body;
    }
}

module.exports = EmployeeController;