"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return toast.error("Please enter a new password");

    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);
      toast.success("Password reset successful! Redirecting...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    } finally {
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
          Reset Password
        </h1>

        <input
          type="password"
          className="w-full border px-3 py-2 rounded-lg mb-4"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg flex justify-center items-center gap-2"
        >
          {loading ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
}
