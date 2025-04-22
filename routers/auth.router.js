import express from "express"
import { register,login } from "../controllers/auth.controllers.js"
import validate from "../middleware/validate.js"
import { loginSchema, registerSchema } from "../validations/auth.validation.js"

let router=express.Router()


router.post("/register",validate(registerSchema),register)

router.post("/login",validate(loginSchema),login)


export default router



