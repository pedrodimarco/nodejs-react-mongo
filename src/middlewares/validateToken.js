import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "No token. Authorization denied" });
  }

  jwt.verify(token, tokenSecret, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = user;
  });
  next();
};
