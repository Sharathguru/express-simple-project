import User from "../models/user.model.js"

class UserService{

    async create(req){
            let newUser=await User.create(req.body) 
            if(!newUser)
            {
                throw new Error("Error creating User!!")
            }
            return newUser;
    }
    async findUserById(id)
    {
        // let id=req.params.id;
        let existingUser=await User.findById(id)
        if(!existingUser)
            {
                throw new Error("Error finding User!!")
            }
        return existingUser;
    }
    async findUserByEmail(req)
    {
        let {email}=req.body
        if(!email)
            {
                throw new Error("Email field is missing!")
            }
        let existingUser=await User.findOne({email})
        // console.log(existingUser);
        
        if(!existingUser)
            {
                throw new Error("User doesn't exist with this mail id")
            }
        return existingUser;
    }
   async findAllUsers()
   {
    let users=await User.find()
    if(!users)
        {
            throw new Error("No users found")
        }
    return users;
   }
}
const userInstance=new UserService()
export default userInstance;