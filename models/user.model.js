import mongoose from "mongoose"

let userSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"username is required field"],
            minLength:[4,"username must be above 4 characters"],
            trim:true
        },
        email:{
            type:String,
             unique:true,
            required:[true,"email is a required field"]
        },
        role:{
            type:String,
            enum:["admin","user"],
            default:"user"
        },
        password:{
            type:String,
            minLength:[6,"Min character length is 6"],
            required:[true, "password is a required field"]
        },
        confirmPassword:{
            type:String,
            minLength:[6,"Min character length is 6"],
            required:[true, "password is a required field"]
        },
    },
{
timestamps:true,
}
    )

    let  User=mongoose.model("User",userSchema);

    export default User;