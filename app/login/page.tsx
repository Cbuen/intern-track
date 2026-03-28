"use client"
import { login, logout } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("Enter Username");
  const [password, setPassword] = useState("Enter Password");

  function handleLogin() {
    login(username, password).then((data) => {
      const token = data;
      localStorage.setItem("auth_token", token);
      console.log(localStorage.getItem("auth_token"));
    });
  }

  // move function later to nav
  function handleLogout() {
    return logout()
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md p-8">

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-md space-y-6">

          <h1 className="text-2xl font-bold text-center">Login</h1>

          {/* Username */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>

            <input
              type="text"
              name="username"
              id="username"
              placeholder={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="" // set type to password later
              name="password"
              id="password"
              placeholder={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800"
            />
          </div>

          {/* Button */}
          <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>

          <button onClick={handleLogout} className="w-full bg-red-500">
            Logout
          </button>

        </div>

      </main>
    </div>
  );
}