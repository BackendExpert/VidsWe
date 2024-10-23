const User = require("../Models/User");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const AuthController = {
    SignUp: async (req, res ) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            const checkUser = await  User.findOne(
                {
                    $or: [
                        { username: username },
                        { email: email }
                    ]
                }
            )

            if(checkUser){
                return res.json({ Error: "User is Already Exists"})
            }

            const CreateUser = new User({
                username: username,
                password: password,
                email: email
            })

            const ResultUser = await CreateUser.save()

            return res.json({ Status: "Success" })
        }
        catch(err){
            console.log(err)
        }
    },

    Login: async(req, res) => {
        try{
            // console.log(req.body)

            const {
                email,
                password
            } = req.body


            const checkUser = await User.findOne({ email: email })
            
            if(!checkUser){
                return res.json({ Error: "User Not Found..."})
            }

            const chechPass = await bcrypt.compare(password, checkUser.password)

            if(chechPass){
                if(checkUser.is_active === true){
                    const token = jwt.sign({ id: checkUser._id }, process.env.JWT_SECRET);
                    return res.json({ Status: "Success", Result: checkUser, Token: token })
                }
                else{
                    return res.json({ Pending: "Yes"})
                }
            }
            else{
                return res.json({ Error: "Password Not Match..."})
            }


        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = AuthController;