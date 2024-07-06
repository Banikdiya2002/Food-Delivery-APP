import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:agartala@cluster0.004kkgp.mongodb.net/food-del').then(()=>console.log("DB connected"));
}