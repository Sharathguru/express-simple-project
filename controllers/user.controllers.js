import userInstance from "../services/user.services.js"
import asynHandler from "express-async-handler"


export const getUsers=asynHandler(async (req,res,next)=>{

    console.log("userid in getusers",req.userId);
    
    const users=await userInstance.findAllUsers()
    res.status(200).json(users)
} )