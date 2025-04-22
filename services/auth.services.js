import userInstance from "../services/user.services.js"

class AuthService{
    async registerUser(req){
        let newUser=await userInstance.create(req)
        console.log(newUser);
        
        if(!newUser)
        {
            throw new Error("Error registering user")
        }
        return newUser
    }
    async loginUser(req){
        let existingUser=await userInstance.findUserByEmail(req)
        // console.log(existingUser);
        
        if (!existingUser) {
            throw new Error("Error Login in user")
        }
        // console.log(existingUser);
        
        return existingUser;
    }
}
export default new AuthService();