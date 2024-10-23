const User = require("../Models/User");

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
    }
};

module.exports = AuthController;