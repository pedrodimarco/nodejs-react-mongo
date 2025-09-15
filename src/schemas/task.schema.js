import { z } from "zod";

export const taskSchema = z.object({
  title: z.string({
    required_error: "Username is required",
  }),
  description: z.string().optional(),
  date: z.iso.datetime().optional(),
});

export const loginSchema = z.object({
  email: z.email({
    required_error: "Email is required",
    message: "Invalid email",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});
