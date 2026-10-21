import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const [formResponse, setFormResponse] = useState(null);

  const onSubmit = handleSubmit(async (values) => {
    setFormResponse(null);

    try {
      await loginRequest(values);
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error", error);
      setFormResponse({
        message:
          error.response?.data?.message ??
          error.response?.data?.error ??
          "No se pudo completar el login. Intentá de nuevo.",
      });
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-xl bg-zinc-800 p-8 shadow-xl sm:p-10">
        <header className="text-center">
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Enter your credentials to sign in.
          </p>
        </header>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="login-email"
              className="mb-1 block text-sm font-medium text-zinc-200"
            >
              Email
            </label>
            <input
              id="login-email"
              className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              autoComplete="email"
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
              htmlFor="login-password"
              className="mb-1 block text-sm font-medium text-zinc-200"
            >
              Password
            </label>
            <input
              id="login-password"
              className="w-full rounded-md border border-zinc-600 bg-zinc-700 px-4 py-2 text-white placeholder-zinc-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
              })}
              type="password"
              autoComplete="current-password"
              placeholder="Your password"
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
            Log in
          </button>
        </form>

        {formResponse && (
          <p
            role="alert"
            className="mt-4 text-center text-sm text-red-400"
          >
            {formResponse.message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-medium text-indigo-400 hover:text-indigo-300">
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
}

export default LoginPage;
