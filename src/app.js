import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import { FRONTEND_URL } from "./config.js";

import authRoutes from "./routes/auth.routes.js"; //authentication routes
import tasksRoutes from "./routes/tasks.routes.js"; //tasks routes

const app = express();

//Middlewares
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);

export default app;
