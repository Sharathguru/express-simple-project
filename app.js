import dotenv from "dotenv"
dotenv.config()
import express from "express"
import authRoute from "./routers/auth.router.js"
import DataBase from "../Auth-mern/config/db.js";
DataBase()


let app=express()

app.use(express.json())
app.use("/api/v1/auth",authRoute)




export default app