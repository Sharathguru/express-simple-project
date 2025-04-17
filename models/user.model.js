import mongoose from "mongoose";
import validate from "validator";
import bcrypt from "bcryptjs"

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required field"],
      minLength: [4, "username must be above 4 characters"],
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is a required field"],
      validate: [validate.isEmail, "Enter Proper email"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    password: {
      type: String,
      minLength: [6, "Min character length is 6"],
      required: [true, "password is a required field"],
    },
    confirmPassword: {
      type: String,
      select: false,
      minLength: [6, "Min character length is 6"],
      required: [true, "password is a required field"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password and Confirm Passsword do not Match",
      },
    },
  },
  {
    timestamps: true,
  }
);

//pre middleware  step 1 
userSchema.pre("save", async function(next){
    this.password=await bcrypt.hash(this.password,5);// hashing and salt 
    this.confirmPassword=undefined;
})

//step 2


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


  
let User = mongoose.model("User", userSchema);

export default User;
