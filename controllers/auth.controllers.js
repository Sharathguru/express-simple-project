import AuthService from "../services/auth.services.js"
import generateToken from '../utils/generateToken.js'
import asynHandler from "express-async-handler"

export let register=asynHandler(async(req,res,next)=>{
    let newUser=await  AuthService.registerUser(req)
    if(!newUser)
    {
        throw new Error("User is not registered!!")
    }
    let token=await generateToken(newUser._id)
    return res.status(201).json({user:newUser,token})
})


export let login=async(req,res,next)=>{
    console.log(req.body);
    
    let {password}=req.body
    let exisitngUser=await  AuthService.loginUser(req)
    console.log(exisitngUser);
    
    if(!exisitngUser)
    {
        return res.status(400).json({
            message:"User Not Found Plz Signup" 
        })
    }
    let pass = await exisitngUser.comparePassword(password);

    if (!pass) {
        return res.status(401).json({
            message: "Incorrect Password"
        });
    }
    
    let token=await generateToken(exisitngUser._id)
    res.status(200).json({user:exisitngUser,token})

}
