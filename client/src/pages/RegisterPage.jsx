import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const [formResponse, setFormResponse] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const res = await registerRequest(values);
      setFormResponse({ success: true, message: res.data.message });
    } catch (error) {
      console.log("error", error);
      setFormResponse({
        success: false,
        message:
          error.response?.data?.message ??
          error.response?.data?.error ??
          "No se pudo completar el registro. Intentá de nuevo.",
      });
    }
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          aria-invalid={Boolean(errors.username)}
          aria-describedby={errors.username ? "username-error" : undefined}
          {...register("username", { required: "Username is required" })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Username"
        />
        {errors.username && (
          <p id="username-error" role="alert" className="text-red-400 text-sm">
            {errors.username.message}
          </p>
        )}
        <input
          type="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-400 text-sm">
            {errors.email.message}
          </p>
        )}
        <input
          type="password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Password must be at least 5 characters",
            },
          })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password"
        />
        {errors.password && (
          <p id="password-error" role="alert" className="text-red-400 text-sm">
            {errors.password.message}
          </p>
        )}
        <button type="submit">Register</button>
      </form>

      <div>
        {formResponse && (
          <p
            className={`text-sm mt-2 ${formResponse.success ? "text-green-400" : "text-red-400"}`}
          >
            {formResponse.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;
