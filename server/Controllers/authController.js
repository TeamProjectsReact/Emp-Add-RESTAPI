const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../Models/User');

// define AuthController

const AuthController = {
    SignUp: async (req, res) => {
        try{
            const { username, email, password} = req.body;

            
        }
        catch (err) {
            return res.json({Error: "Internal Server ERROR"})
        }
    }
}

module.exports = AuthController;