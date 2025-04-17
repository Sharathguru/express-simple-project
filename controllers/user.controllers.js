import userInstance from "../services/user.services.js"

export const getUsers=async (req,res,next)=>{
    const users=await userInstance.findAllUsers()
    res.status(200).json(users)
} 