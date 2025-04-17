import AuthService from "../services/auth.services.js"
import generateToken from '../utils/generateToken.js'

export let register=async(req,res,next)=>{
    let newUser=await  AuthService.registerUser(req)
    if(!newUser)
    {
        return res.status(400).json({
            message:"User Not Created"
        })
    }
    return res.status(201).json(newUser)
}
export let login=async(req,res,next)=>{
    let {password}=req.body
    let exisitngUser=await  AuthService.loginUser(req)
    if(!exisitngUser)
    {
        return res.status(400).json({
            message:"User Not Found"
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
