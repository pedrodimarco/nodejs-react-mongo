import jwt from "jsonwebtoken";
import { tokenSecret } from "../config.js";

export function createAccesToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      tokenSecret,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}
