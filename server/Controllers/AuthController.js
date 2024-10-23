const AuthController = {
    SignUp: async (req, res ) => {
        try{
            const {
                username,
                email,
                password
            } = req.body

            console.log(req.body)
        }
        catch(err){
            console.log(err)
        }
    }
};

module.exports = AuthController;