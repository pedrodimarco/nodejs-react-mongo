import app from "./app.js";
import { connectDB } from "./db.js";

import { PORT } from "./config.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(">>> Server running on: ", PORT);
    });
  } catch (error) {
    console.error(">>> Failed to connect to the database:", error.message);
    process.exit(1);
  }
};

startServer();
