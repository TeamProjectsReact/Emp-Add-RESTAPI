const express = require('express')
const EmployeeController = require('../Controllers/EmployeeController')

const router = express.Router()

router.post('/AddEmp', EmployeeController.AddEmp)

module.exports = router;