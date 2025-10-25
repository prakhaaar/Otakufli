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
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/90 z-10"></div>

      {/* Header */}
      <Header />

      {/* Login content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
          Welcome to <span className="text-red-600">OtakuFlix</span>
        </h1>
        <p className="max-w-lg text-lg text-gray-200 mb-8">
          Stream your favorite anime anytime, anywhere.
        </p>
        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
