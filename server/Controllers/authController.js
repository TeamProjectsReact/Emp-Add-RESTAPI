const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    },

    // login route
    SignIn: async (req, res) => {
        try{
            const { email, password} = req.body

            // check user
            const LoginUser = await User.findOne({ email })
            if(LoginUser) {
                // check pass
                const PassCheck = await bcrypt.compare(password, LoginUser.password)

                if(PassCheck){
                    // create token for login user
                    const token = jwt.sign({ userId: LoginUser._id, userEmail: LoginUser.email, userRole: LoginUser.Role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            
                    return res.json({Status: "Success", Token:token, Result: LoginUser})       
                }
                else{
                    return res.json({Error: "Password Not Match"})
                }
            }
            else{
                return res.json({Error: "User not Found in database "})
            }
        }
        catch (err) {
            console.log(err)
            return res.json({Error: "Internal Server Error "})
        }
    }
}

module.exports = AuthController;