import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://TARUN:Tarun1234@cluster0.16med.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}