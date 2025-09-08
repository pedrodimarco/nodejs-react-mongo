import app from "./app.js";
import { connectDB } from "./db.js";

const PORT = 3000;

connectDB();
app.listen(3000, () => {
  console.log(">>> Server running on: ", PORT);
});
