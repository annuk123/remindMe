"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);
      toast.success("Password reset link sent! Check your email.");
    } catch (err: unknown) {
  const message =
    err instanceof Error ? err.message : "Something went wrong";
  toast.error(message);
}
 finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-semibold text-center mb-4">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to receive a reset link.
        </p>

        <input
          type="email"
          className="w-full border px-3 py-2 rounded-lg mb-4"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg flex justify-center items-center gap-2"
        >
          {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Send Link"}
        </button>
      </form>
    </div>
  );
}