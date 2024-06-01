const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const User = require('../Models/User');

// define AuthController

const AuthController = {
    SignUp: async (req, res) => {
        try{
            const { username, email, password} = req.body;

            // check user
            const checkUser = await User.findOne({ email, username })

            if(checkUser) {
                return res.json({Error: "User Already in Database"})
            }
            else{
                // hash password
                const hashPass = await bcrypt.hash(password, 10)

                // insert user
                const UserNew = new User({
                    username,
                    email,
                    password: hashPass,
                    Role: 'User'
                })

                // save user
                const ResultUser = UserNew.save()

                if(ResultUser) {
                    return res.json({Status: "Success"})
                }
                else{
                    return res.json({Error: "Internal Server Error"})
                }
            }
        }
        catch (err) {
            return res.json({Error: "Internal Server ERROR"})
        }
    }
}

module.exports = AuthController;