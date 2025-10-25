import React, { useState } from "react";
import Header from "./Header";
import { useSignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const { signUp, setActive, isLoaded } = useSignUp();
  const [name, setName] = useState("");
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
      const result = await signUp.create({
        firstName: name,
        emailAddress: email,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        console.log("✅ Account created successfully!");
      } else {
        console.log("⚠️ Signup not complete:", result);
      }
    } catch (err) {
      console.error(err);
      setError(err.errors?.[0]?.message || "Something went wrong.");
    }

    setLoading(false);
  };

  const handleGoogleSignUp = async () => {
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
        redirectUrlComplete: "/dashboard",
      });
    } catch (err) {
      console.error(err);
      setError("Google signup failed. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-[Poppins] overflow-hidden">
      {/* --- Static Background --- */}
      <img
        src="/main.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover brightness-90"
      />
      {/* Gradient Overlay (focus in center) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header */}
      <Header />

      {/* --- Signup Form --- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 bg-black/70 border border-white/10 backdrop-blur-md 
                   rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] w-[90%] max-w-md p-10 text-white"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm mb-2 text-gray-300">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white
                         placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <p className="text-center text-red-400 text-sm font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-3 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 
                        hover:from-red-700 hover:to-red-800 font-semibold text-lg transition-all duration-300 shadow-md ${
                          loading ? "opacity-60 cursor-not-allowed" : ""
                        }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="grow border-gray-600/50" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <hr className="grow border-gray-600/50" />
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-lg 
                     bg-white text-black font-semibold text-lg transition-all hover:bg-gray-100"
        >
          <FcGoogle className="w-6 h-6" />
          Sign up with Google
        </button>

        <p className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/" className="text-red-500 hover:underline">
            Sign in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
