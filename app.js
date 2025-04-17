import dotenv from "dotenv"
dotenv.config()
import express from "express"
import authRoute from "./routers/auth.router.js"
import DataBase from "../Auth-mern/config/db.js";
import userRoute from './routers/user.route.js'
DataBase()


let app=express()

app.use(express.json())
app.use("/api/v1/auth",authRoute,userRoute)




export default app