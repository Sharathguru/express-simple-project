import UserService from "../services/user.services.js"

class AuthService{
    async registerUser(req){
        let newUser=await UserService.create(req)
        return newUser
    }
    async loginUser(req){
        let existingUser=await UserService.findUserByEmail(req)
        return existingUser;
    }
}
export default new AuthService;