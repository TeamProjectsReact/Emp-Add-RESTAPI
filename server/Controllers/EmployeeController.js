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

        // check employee already in database
        const checkEmp =  await Employee.findOne({ empID, empEmail, NIC })

        if(checkEmp){
            return res.json({ Error: "Employee already in Database"})
        }
        else{
            const NewEmp = new Employee({
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
            })
        }
    }
}

module.exports = EmployeeController;