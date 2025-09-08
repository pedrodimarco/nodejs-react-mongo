import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/merndb");
    console.log(">>> DB connected");
  } catch (error) {
    console.log(error);
  }
};
