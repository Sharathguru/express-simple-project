import jwt from "jsonwebtoken";
import userInstance from '../services/user.services.js';

// verify token

const auth = async(req, res, next) => {
    // const authHeader = req.headers.authorization.split(" ")[1]; 
    console.log(req.headers);
    
    let token;  
    if(req.headers.authorization||req.headers.authorization.startsWith("Bearer"))
    {
        token=req.headers.authorization.split(" ")[1]; 
    }
    console.log(token);
    
    if(!token)
    {
        return res.status(400).json("Please login!!")
    }      
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); 
    console.log("Decoded Token:", decodedToken);
    let user=await userInstance.findUserById(decodedToken.id)
    if(!user){
        return res.status(400).json("User doesn't exist,Please register!!")
    }
    req.userId=user._id;
    next();
  };
  
  export default auth;
  