import mongoose from "mongoose";

export const connectDB = async () => {
  console.log(">>> Connecting to DB...");
  await mongoose.connect("mongodb://localhost:27017/merndb");
  console.log(">>> DB connected");
};
