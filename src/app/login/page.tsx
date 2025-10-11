"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Bell } from "lucide-react"; 
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";


export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      name,
      redirect: false,
    });
    setLoading(false);

    if (res?.error) {
      if (res?.error?.includes("Invalid password")) toast.error("Incorrect password 😬");
      else if (res?.error?.includes("Missing credentials")) toast.warning("Email or password missing");
      else toast.error(res?.error);
    } else {
      toast.success("Welcome back 👋", {
        description: "Redirecting to your dashboard...",
      });
      setTimeout(() => router.push("/dashboard"), 1200);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-white/30">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 p-3 rounded-xl shadow-md group-hover:rotate-6 transition-transform duration-300">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            RemindMe
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Your smart reminder companion ✨
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleAuth}
          className="flex flex-col gap-4 w-full text-gray-700"
        >
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 transition-all"
          />

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 transition-all"
            required
          />

          {/* Password Field */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 p-3 pr-12 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 transition-all text-slate-700"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-blue-500 transition-all"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* 🔗 Forgot Password link */}
          <div className="text-right -mt-2">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            disabled={loading}
            className="relative flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-3 mt-2 font-medium hover:shadow-lg hover:scale-[1.02] active:scale-[0.99] transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-5 h-5 mr-2" /> Please wait...
              </>
            ) : (
              "Continue →"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-4 text-center">
          One click we’ll log you in or create your account automatically
        </p>

        <div className="mt-6 text-xs text-gray-400">
          <p>
            By continuing, you agree to our{" "}
            <Link
              href="/terms-of-service"
              className="text-blue-500 hover:underline"
            >
              Terms
            </Link>{" "}
            &{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-500 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

  
