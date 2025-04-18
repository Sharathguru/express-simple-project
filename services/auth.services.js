import userInstance from "../services/user.services.js"

class AuthService{
    async registerUser(req){
        let newUser=await userInstance.create(req)
        if(!newUser)
        {
            throw new Error("Error registering user")
        }
        return newUser
    }
    async loginUser(req){
        let existingUser=await userInstance.findUserByEmail(req)
        if (existingUser) {
            throw new Error("Error Login in user")
        }
        return existingUser;
    }
}
export default new AuthService();