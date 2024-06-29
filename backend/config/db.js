import mongoose from "mongoose";

export const connectDB =async() =>{
    await mongoose.connect('mongodb+srv://aryanmittal678:aryan123@cluster0.osuyyou.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}