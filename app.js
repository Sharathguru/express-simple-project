import dotenv from "dotenv"
dotenv.config()
import express from "express"
import authRoute from "./routers/auth.router.js"
import DataBase from "../Auth-mern/config/db.js";
import userRoute from './routers/user.route.js'
// import { message } from "statuses";
DataBase()


let app=express()

app.use(express.json())
app.use("/api/v1/auth",authRoute,userRoute)


app.all("*",(req,res,next)=>{
//  return res.status(404).json({
//     message:`This page is not Found!`
//  })---this is page not found if we enter any url

let err=new Error("Page not found")
    err.statusCode=404;
    next(err);
})
app.use((err,req,res,next)=>{
    let statusCode =err.statusCode||500
    let message=err.message||"Something went wrong"

    res.status(statusCode).json({
        message:message,
        stack:process.env.NODE_ENV==="production" ? undefined : err.stack
    })
})



export default app