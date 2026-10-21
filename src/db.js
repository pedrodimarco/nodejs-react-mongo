import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  console.log(">>> Connecting to DB...");
  await mongoose.connect(MONGODB_URI);
  console.log(">>> DB connected");
};
