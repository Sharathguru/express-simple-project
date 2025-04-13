import mongoose from "mongoose";

async function DataBase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Database Connection Error:", error.message);
  }
}
export default DataBase;