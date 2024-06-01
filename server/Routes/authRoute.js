const express = require('express');
const AuthController = require('../Controllers/authController');

const router = express.Router()

// define routers
router.post('/SignUp', AuthController.SignUp)


module.exports = router