import jwt from "jsonwebtoken";

// verify token

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization.split(" ")[1]; 
    if(!authHeader||!req.headers.authorization.startsWith("Bearer"))
    {
        console.log("Invalid or missing Authorization header:", authHeader);
    return res.status(401).json({ message: "Unauthorized" });
    }
    console.log(authHeader);
      
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET); 
    console.log("Decoded Token:", decoded);
    next();
  };
  
  export default auth;
  