import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-xl bg-zinc-800 p-8 shadow-xl sm:p-10">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Enter your details to get started.
          </p>
        </header>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="username"
              className="mb-1 block text-sm font-medium text-zinc-200"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              aria-invalid={Boolean(errors.username)}
              aria-describedby={errors.username ? "username-error" : undefined}
              {...register("username", { required: "Username is required" })}
              className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="Your username"
            />
            {errors.username && (
              <p id="username-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="mb-1 block text-sm font-medium text-zinc-200"
            >
              Email
            </label>
            <input
              id="register-email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="mb-1 block text-sm font-medium text-zinc-200"
            >
              Password
            </label>
            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
              className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="At least 5 characters"
            />
            {errors.password && (
              <p id="password-error" role="alert" className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 active:bg-indigo-700"
          >
            Create account
          </button>
        </form>

        {formResponse && (
          <p
            role={formResponse.success ? "status" : "alert"}
            className={`mt-4 text-center text-sm ${formResponse.success ? "text-green-400" : "text-red-400"}`}
          >
            {formResponse.message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
            Log in
          </Link>
        </p>
      </section>
    </div>
  );
}

export default RegisterPage;
