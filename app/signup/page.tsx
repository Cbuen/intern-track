"use client";

import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Start tracking your internship applications
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Username */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm">Username</label>
            <input
              type="text"
              placeholder="yourusername"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-zinc-800"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}