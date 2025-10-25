import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
      {/* Background image */}
      <img
        src="/main.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Header */}
      <Header />

      {/* Centered Login Form */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <form className="bg-black/75 backdrop-blur-sm w-11/12 sm:w-6/12 md:w-3/12 lg:w-2/12 py-24 px-10 rounded-lg shadow-2xl flex flex-col justify-center">
          <h1 className="font-bold text-3xl mb-8 text-center">Sign In</h1>

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 my-3 w-full bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-3 w-full bg-[#333] rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="mt-8 bg-red-600 hover:bg-red-700 font-semibold py-3 rounded text-lg transition-all duration-200"
          >
            Sign In
          </button>

          {/* Footer */}
          <p className="mt-8 text-center text-gray-400 text-sm">
            New to OtakuFlix?{" "}
            <a href="#" className="text-red-500 hover:underline">
              Sign up now
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
