import React, { useState } from "react";
import Header from "./Header";
import { useSignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
      }
    } catch (err) {
      setError(err.errors?.[0]?.message || "Invalid email or password.");
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      setError("Google login failed. Try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-[Poppins]">
      {/* ✅ Cinema Background */}
      <img
        src="/main.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/80" />

      {/* ✅ Header */}
      <Header />

      {/* ✅ Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-[90%] max-w-md p-16 bg-red/75 backdrop-blur-lg
                   border border-gray-700/40 shadow-[0_0_15px_rgba(0,0,0,1)]
                   rounded-md text-white"
      >
        <h1 className="text-3xl font-extrabold mb-8 text-center text-red-400">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-xs text-gray-400 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-black/40 border border-gray-500/40 
                         rounded-sm text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400 block mb-1">Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-black/40 border border-gray-500/40 
                         rounded-sm text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm font-medium text-center">
              {error}
            </p>
          )}

          {/* ✅ Netflix Red Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-red-700 hover:bg-red-800 font-semibold 
                        rounded-sm text-lg shadow-md transition-all
                        ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="grow border-gray-700" />
          <span className="mx-3 text-gray-500 text-xs">OR</span>
          <hr className="grow border-gray-700" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 flex items-center justify-center gap-3
                     bg-white text-black font-medium text-base rounded-sm
                     hover:bg-gray-200 transition-all shadow-[0_0_10px_rgba(0,0,0,0.4)]"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          New to OtakuFlix?{" "}
          <a href="/signup" className="text-red-500 hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
