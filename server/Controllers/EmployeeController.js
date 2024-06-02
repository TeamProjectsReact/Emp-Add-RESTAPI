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

        console.log(req.body)

        // check employee already in database
        const checkEmp =  await Employee.findOne({ empID, empEmail, NIC })

        if(checkEmp){
            return res.json({ Error: "Employee already in Database"})
        }
        else{
            const NewEmp = new Employee({
                EmpID: empID, 
                email: empEmail, 
                initial: Initials, 
                surname: Surname, 
                phone: Phone, 
                nic: NIC, 
                address: Address, 
                designation: Category, 
                dob: dob, 
                emgcontact: emgContact, 
                type: Type, 
                civilstatus: CivilState, 
                gender: Gender, 
                relig: Religion
            })

            const ResultEmp = NewEmp.save()

            if(ResultEmp){
                return res.json({ Status: "Success"})
            }
            else{
                return res.json({ Error: "Internal Server Error"})
            }
        }
    }
}

module.exports = EmployeeController;