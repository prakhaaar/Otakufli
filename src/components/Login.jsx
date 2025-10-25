import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/main.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] blur-[2px]"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10"></div>

      {/* Header */}
      <Header />

      {/* Login form container */}
      <div className="relative z-20 flex items-center justify-center h-full text-white px-4">
        <form className="bg-black/70 backdrop-blur-sm p-10 rounded-2xl w-full max-w-md shadow-2xl space-y-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Sign In to <span className="text-red-600">OtakuFlix</span>
          </h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Sign In
          </button>

          {/* Extra options */}
          <div className="text-center text-sm text-gray-400">
            <p>
              New to OtakuFlix?{" "}
              <a href="#" className="text-red-500 hover:underline">
                Sign up now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
