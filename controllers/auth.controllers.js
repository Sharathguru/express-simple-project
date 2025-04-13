import AuthService from "../services/auth.services.js"

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
    let exisitngUser=await  AuthService.loginUser(req)
    if(!exisitngUser)
    {
        return res.status(400).json({
            message:"User Not Found"
        })
    }
    return res.status(200).json(exisitngUser)
}
