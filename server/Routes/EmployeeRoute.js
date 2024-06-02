const express = require('express')
const EmployeeController = require('../Controllers/EmployeeController')

const router = express.Router()

router.post('/AddEmp', EmployeeController.AddEmp)
router.get('/DataEmp', EmployeeController.ViewEmp)

module.exports = router;